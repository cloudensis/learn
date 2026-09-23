type PreferenceOption = {
	/** localStorage に保存する値 */
	value: string;
	/** プロンプトに差し込む表記切り替えのラベルにも使う */
	label: string;
};

export type Preference = {
	/** プロンプト内で `{{key}}` として参照する識別子 */
	key: string;
	/** 切り替えの前に添える見出し */
	label: string;
	options: PreferenceOption[];
	/** 読者がまだ選んでいないときの値 */
	defaultValue: string;
};

/**
 * 読者ごとに違う値を、プロンプトへ差し込むための設定
 * ここに追加すると、プロンプト内の `{{key}}` が切り替えつきで表示される
 */
export const preferences: Record<string, Preference> = {
	os: {
		key: "os",
		label: "利用OS",
		options: [
			{ value: "windows", label: "Windows" },
			{ value: "mac", label: "Mac" },
		],
		defaultValue: "windows",
	},
	browser: {
		key: "browser",
		label: "ブラウザ",
		options: [
			{ value: "chrome", label: "Chrome" },
			{ value: "edge", label: "Edge" },
			{ value: "safari", label: "Safari" },
			{ value: "firefox", label: "Firefox" },
		],
		defaultValue: "chrome",
	},
};

/** 設定値を保存する localStorage のキー */
export function preferenceStorageKey(key: string): string {
	return `preference:${key}`;
}

/** 設定の現在値に対応する表記見つからなければ既定値の表記を返す */
export function preferenceLabel(preference: Preference, value: string): string {
	const option =
		preference.options.find((item) => item.value === value) ??
		preference.options.find((item) => item.value === preference.defaultValue);
	return option?.label ?? "";
}
