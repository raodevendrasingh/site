import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { FC } from "react";

interface Project {
    id: number;
    title: string;
    description: string;
    link: string;
    tag?: string;
    year?: string;
}

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
    const { id, title, description, link, year } = project;

    return (
        <div key={id} className="group relative px-3 py-2 hover:bg-accent/40">
            {/* Corner highlights */}
            <div className="absolute -z-10 inset-0 opacity-0 group-hover:opacity-100 transition-[opacity] duration-75 group-hover:duration-200">
                {/* Top left corner */}
                <div className="absolute top-0 left-0 w-3 h-[1px] bg-primary/30" />
                <div className="absolute top-0 left-0 w-[1px] h-3 bg-primary/30" />

                {/* Top right corner */}
                <div className="absolute top-0 right-0 w-3 h-[1px] bg-primary/30" />
                <div className="absolute top-0 right-0 w-[1px] h-3 bg-primary/30" />

                {/* Bottom left corner */}
                <div className="absolute bottom-0 left-0 w-3 h-[1px] bg-primary/30" />
                <div className="absolute bottom-0 left-0 w-[1px] h-3 bg-primary/30" />

                {/* Bottom right corner */}
                <div className="absolute bottom-0 right-0 w-3 h-[1px] bg-primary/30" />
                <div className="absolute bottom-0 right-0 w-[1px] h-3 bg-primary/30" />
            </div>

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
                <div className="relative flex flex-col items-center gap-2 justify-between pl-4">
                    <ArrowUpRight
                        size={16}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-primary/75"
                    />
                    {year && (
                        <span className="text-xs text-primary/70 transition-colors duration-200 group-hover:text-primary/90">
                            {year}
                        </span>
                    )}
                </div>
            </Link>
        </div>
    );
};
