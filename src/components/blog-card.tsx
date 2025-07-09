import Link from "next/link";
import type { FC } from "react";

interface Blog {
	id: number;
	title: string;
	link: string;
	tag?: string;
}

interface BlogCardProps {
	blog: Blog;
}

export const BlogCard: FC<BlogCardProps> = ({ blog }) => {
	return (
		<div key={blog.id} className="px-3 py-1">
			<Link href={blog.link} target="_blank" className="">
				<div className="flex items-center gap-2">
					<span className="font-medium text-primary/75">{blog.title}</span>
				</div>
			</Link>
		</div>
	);
};
