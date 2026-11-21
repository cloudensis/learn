import { describe, expect, it } from "vitest";
import headersFile from "../../public/_headers?raw";
import { securityHeaders } from "./security-headers";

/** public/_headers の `/*` に書いたヘッダーを読む */
function readHeadersFile(): Record<string, string> {
	const headers: Record<string, string> = {};
	for (const line of headersFile.split("\n").slice(1)) {
		const match = line.match(/^\s+([^:]+):\s*(.*)$/);
		if (match) headers[match[1]] = match[2];
	}
	return headers;
}

describe("securityHeaders", () => {
	it("public/_headers と同じ内容になっている", () => {
		expect(readHeadersFile()).toEqual(securityHeaders);
	});
});
