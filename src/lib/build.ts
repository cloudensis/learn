/**
 * Preview 用のビルドかどうか。Cloudflare のツールが Preview のビルドで
 * CLOUDFLARE_PREVIEW_BUILD=true を渡すので、vite.config.ts でビルド時に埋め込む。
 */
export const isPreviewBuild: boolean = import.meta.env.PREVIEW_BUILD === true;
