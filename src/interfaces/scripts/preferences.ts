/// <reference lib="dom" />
import { preferenceStorageKey } from "#/src/domains/preference/preference";

/*
 * PromptBlock の切り替えを動かすクライアントスクリプト
 * 選んだ値を localStorage に保存し、ページ内のすべての切り替えと差し込み位置に反映する
 */

const radioSelector = "input[data-preference-key]";

function read(key: string): string | null {
	try {
		return localStorage.getItem(preferenceStorageKey(key));
	} catch {
		return null;
	}
}

function write(key: string, value: string) {
	try {
		localStorage.setItem(preferenceStorageKey(key), value);
	} catch {
		// 保存できない環境でも、このページ内の切り替えは効かせる
	}
}

/** 値に対応する切り替えがあるときだけ、ページ内の表示をその値にそろえる */
function apply(key: string, value: string) {
	const radios = Array.from(
		document.querySelectorAll<HTMLInputElement>(radioSelector),
	).filter((radio) => radio.dataset.preferenceKey === key);
	const selected = radios.find((radio) => radio.value === value);
	if (!selected) {
		return;
	}

	for (const radio of radios) {
		radio.checked = radio.value === value;
	}

	document
		.querySelectorAll<HTMLElement>("[data-preference-value]")
		.forEach((element) => {
			if (element.dataset.preferenceValue === key) {
				element.textContent = selected.dataset.preferenceLabel ?? "";
			}
		});
}

const keys = new Set(
	Array.from(document.querySelectorAll<HTMLInputElement>(radioSelector))
		.map((radio) => radio.dataset.preferenceKey)
		.filter((key): key is string => Boolean(key)),
);

for (const key of keys) {
	const value = read(key);
	if (value) {
		apply(key, value);
	}
}

document.addEventListener("change", (event) => {
	const radio = event.target;
	if (
		!(radio instanceof HTMLInputElement) ||
		!radio.matches(radioSelector) ||
		!radio.checked
	) {
		return;
	}
	const key = radio.dataset.preferenceKey;
	if (!key) {
		return;
	}
	write(key, radio.value);
	apply(key, radio.value);
});

// 別のタブで切り替えたときも、開いているページをそろえる
window.addEventListener("storage", (event) => {
	for (const key of keys) {
		if (event.key === preferenceStorageKey(key) && event.newValue) {
			apply(key, event.newValue);
		}
	}
});
