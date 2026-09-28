import { LogoMark } from "@cloudensis/design-system/brand/cloudensis/logo-mark";
import { site } from "#/src/domains/company/constants";

export function Header() {
	return (
		<header class="flex flex-wrap items-center justify-between gap-4 p-4 lg:px-8">
			<a href="/" class="flex items-baseline gap-2 text-neutral-800 lg:gap-3">
				<LogoMark class="h-4 lg:h-6" />
				<span class="font-extralight text-xl tracking-wider lg:text-3xl">
					{site.name}
				</span>
			</a>
		</header>
	);
}
