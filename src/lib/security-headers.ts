/**
 * すべてのレスポンスに付けるセキュリティヘッダー。
 * SSG したページは静的アセットとして配信され Worker を通らないため、
 * public/_headers にも同じ内容を書く（security-headers.test.ts で一致を確かめる）。
 *
 * design-system の CodeBlock はコピーボタンに onclick 属性を使うため、
 * script-src はまだ強制せず Report-Only で様子を見る。
 */
export const securityHeaders: Record<string, string> = {
	"Content-Security-Policy":
		"frame-ancestors 'none'; base-uri 'self'; object-src 'none'; form-action 'self'",
	"Content-Security-Policy-Report-Only":
		"default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; frame-ancestors 'none'; base-uri 'self'; object-src 'none'; form-action 'self'",
	"X-Frame-Options": "DENY",
	"X-Content-Type-Options": "nosniff",
	"Referrer-Policy": "strict-origin-when-cross-origin",
	"Permissions-Policy":
		"camera=(), microphone=(), geolocation=(), payment=(), usb=()",
};
