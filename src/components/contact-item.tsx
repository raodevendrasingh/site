import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { ContactType } from "@/data/contact-list";

export type ContactProps = {
	item: ContactType;
};

export const ContactItem = ({ item }: ContactProps) => {
	return (
		<Badge
			variant="secondary"
			className="py-1 rounded-full w-full md:w-fit md:aspect-auto aspect-square flex items-center justify-center"
		>
			<Link
				href={item.href}
				className="flex items-center gap-2 text-primary/85 hover:text-primary bg-transparent shadow-none transition-colors duration-200 w-full h-full justify-center"
				target="_blank"
				rel="noopener noreferrer"
			>
				{item.icon}
				<span className="hidden md:block font-medium text-sm tracking-wide">{item.title}</span>
				<ArrowUpRight size={16} className="hidden md:block" />
			</Link>
		</Badge>
	);
};
