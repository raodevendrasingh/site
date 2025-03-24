import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { FC } from "react";

interface Project {
    id: number;
    title: string;
    description: string;
    link: string;
    tag?: string;
}

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
    const { id, title, description, link } = project;

    return (
        <div key={id} className="group px-3 py-2 hover:bg-accent/40">
            <Link
                href={link}
                target="_blank"
                className="flex items-center justify-between hover:text-primary"
            >
                <div className="flex flex-col gap-1">
                    <span className="font-medium text-primary/95">{title}</span>
                    <span className="text-sm text-primary/75">
                        {description}
                    </span>
                </div>

                <ArrowUpRight
                    size={16}
                    className="hidden group-hover:block text-accent-foreground/75"
                />
            </Link>
        </div>
    );
};
