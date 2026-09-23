import { Footer } from "@cloudensis/design-system/components/layout/footer";
import { Header } from "@cloudensis/design-system/components/layout/header";
import { jsxRenderer, useRequestContext } from "hono/jsx-renderer";
import { Link, Script, ViteClient } from "vite-ssr-components/hono";
import { company, site } from "#/src/domains/company/constants";

declare module "hono" {
	interface ContextRenderer {
		// biome-ignore lint/style/useShorthandFunctionType: interface is required for declaration merging with hono's ContextRenderer
		(
			content: string | Promise<string>,
			props?: {
				title?: string;
				description?: string;
				ogImage?: string;
				noindex?: boolean;
			},
		): Response;
	}
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
					{noindex && <meta name="robots" content="noindex, nofollow" />}

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
					<Link href="/src/interfaces/styles/global.css" rel="stylesheet" />
					<Script src="/src/interfaces/scripts/preferences.ts" />
				</head>
				<body class="flex min-h-svh flex-col">
					<Header title={site.name} />
					<main class="flex-1">{children}</main>
					<Footer copyrightHolder={company.name} links={[]} />
				</body>
			</html>
		);
	},
);
