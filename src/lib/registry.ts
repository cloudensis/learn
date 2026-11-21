/**
 * import.meta.glob で集めた meta.ts の default export を取り出す。
 * slug がフォルダ名と違うとリンクが 404 になるため、ずれていたらビルドを止める。
 */
export function collectMeta<T extends { slug: string }>(
	modules: Record<string, { default: T }>,
): T[] {
	return Object.entries(modules).map(([path, module]) => {
		const folder = path.split("/").at(-2);
		if (module.default.slug !== folder) {
			throw new Error(
				`${path}: slug "${module.default.slug}" がフォルダ名 "${folder}" と一致しません`,
			);
		}
		return module.default;
	});
}
