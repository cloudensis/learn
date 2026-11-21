// SSG の出力 HTML を走査し、サイト内リンクの行き先とアンカーが存在するか確かめる。
// npm run build のあとに実行する。
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(
	new URL("../.cloudflare/output/v1/workers/default/assets/", import.meta.url),
);

async function walk(dir) {
	const entries = await fs.readdir(dir, { withFileTypes: true });
	const files = await Promise.all(
		entries.map((entry) => {
			const full = path.join(dir, entry.name);
			return entry.isDirectory() ? walk(full) : [full];
		}),
	);
	return files.flat();
}

const files = await walk(root);
const fileSet = new Set(files);

/** URL のパスを、配信される HTML ファイルに対応づける */
function resolve(urlPath) {
	const base = path.join(root, decodeURIComponent(urlPath));
	const candidates = path.extname(urlPath)
		? [base]
		: [`${base.replace(/\/$/, "")}.html`, path.join(base, "index.html")];
	return candidates.find((candidate) => fileSet.has(candidate));
}

const ids = new Map();
async function idsOf(file) {
	if (!ids.has(file)) {
		const html = await fs.readFile(file, "utf8");
		ids.set(
			file,
			new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])),
		);
	}
	return ids.get(file);
}

const errors = [];
for (const file of files.filter((f) => f.endsWith(".html"))) {
	const html = await fs.readFile(file, "utf8");
	const page = `/${path.relative(root, file)}`;
	for (const [, href] of html.matchAll(/\shref="([^"]+)"/g)) {
		if (/^[a-z]+:/i.test(href) || href.startsWith("//")) continue; // 外部リンク
		const [urlPath, hash] = href.split("#");
		const target = urlPath ? resolve(urlPath) : file;
		if (!target) {
			errors.push(`${page}: リンク先がありません: ${href}`);
			continue;
		}
		if (hash && target.endsWith(".html") && !(await idsOf(target)).has(hash)) {
			errors.push(`${page}: アンカーがありません: ${href}`);
		}
	}
}

if (errors.length > 0) {
	for (const error of errors) console.error(error);
	process.exit(1);
}
console.log(`check-links: ${files.length} ファイルを確認しました`);
