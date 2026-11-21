import { company } from "@/lib/site";

const links = [
	{ href: "/about", label: "運営者情報" },
	{ href: "/privacy", label: "プライバシーポリシー" },
	{ href: "/terms", label: "利用規約" },
];

export function Footer() {
	return (
		<footer class="space-y-2 px-4 py-8 text-sm lg:px-8">
			<ul class="flex flex-wrap gap-x-4 gap-y-1">
				{links.map((link) => (
					<li key={link.href}>
						<a href={link.href} class="hover:underline">
							{link.label}
						</a>
					</li>
				))}
			</ul>
			<p>
				&copy; {new Date().getFullYear()} {company.name}
			</p>
		</footer>
	);
}
