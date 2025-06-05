import { ContactType } from "@/data/contact-list";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type ContactProps = {
    item: ContactType;
};

export const ContactItem = ({ item }: ContactProps) => {
    return (
        <Badge variant="secondary" className="py-1 rounded-lg">
            <Link
                href={item.href}
                className="flex items-center gap-2 text-primary/85 hover:text-primary bg-transparent shadow-none transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
            >
                {item.icon}
                <span className="font-medium text-sm tracking-wide">
                    {item.title}
                </span>
                <ArrowUpRight size={16} />
            </Link>
        </Badge>
    );
};
