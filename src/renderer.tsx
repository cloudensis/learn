import { jsxRenderer, useRequestContext } from "hono/jsx-renderer";
import { Link, Script, ViteClient } from "vite-ssr-components/hono";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { isPreviewBuild } from "./lib/build";
import { site } from "./lib/site";

export type Meta = {
	title?: string;
	description?: string;
	ogImage?: string;
	noindex?: boolean;
};

type Render = (content: string | Promise<string>, meta?: Meta) => Response;

declare module "hono" {
	interface ContextRenderer extends Render {}
}

export const renderer = jsxRenderer(
	({ children, title, description, ogImage, noindex }) => {
		const c = useRequestContext();
		const canonicalUrl = new URL(c.req.path, site.url).toString();
		const pageTitle = title ?? site.name;
		const pageDescription = description ?? site.description;
		const ogImageUrl = new URL(ogImage ?? "/ogp.png", site.url).toString();

		return (
			<html lang="ja">
				<head>
					<meta charset="UTF-8" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
					<title>{pageTitle}</title>
					<meta name="description" content={pageDescription} />
					<link rel="canonical" href={canonicalUrl} />
					{(noindex || isPreviewBuild) && (
						<meta name="robots" content="noindex, nofollow" />
					)}

					<meta property="og:type" content="website" />
					<meta property="og:site_name" content={site.name} />
					<meta property="og:title" content={pageTitle} />
					<meta property="og:description" content={pageDescription} />
					<meta property="og:url" content={canonicalUrl} />
					<meta property="og:image" content={ogImageUrl} />
					<meta property="og:locale" content="ja_JP" />
					<meta name="twitter:card" content="summary" />

					<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
					<link rel="apple-touch-icon" href="/logo.png" />

					<ViteClient />
					<Link href="/src/style.css" rel="stylesheet" />
					<Script src="/src/scripts/preferences.ts" />
				</head>
				<body class="flex min-h-svh flex-col">
					<Header />
					<main class="flex-1">{children}</main>
					<Footer />
				</body>
			</html>
		);
	},
);
