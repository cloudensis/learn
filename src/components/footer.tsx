import { company } from "../lib/site";

export function Footer() {
	return (
		<footer class="px-4 py-8 text-sm lg:px-8">
			&copy; {new Date().getFullYear()} {company.name}
		</footer>
	);
}
