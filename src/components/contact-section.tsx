import Link from "next/link";

export const ContactSection = () => {
	return (
		<section className="flex flex-col">
			<h2 className="font-semibold pb-3">Contact</h2>
			<p className="text-primary/75 px-3 space-x-1 leading-7">
				Reach me on{" "}
				<Link
					href="https://x.com/tminusdev"
					className="underline underline-offset-4 hover:text-primary"
					target="_blank"
					rel="noopener noreferrer"
				>
					X
				</Link>
				{" / "}
				<Link
					href="https://github.com/raodevendrasingh"
					className="underline underline-offset-4 hover:text-primary"
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub
				</Link>
				{" / "}
				<Link
					href="https://linkedin.com/in/raodevendrasingh"
					className="underline underline-offset-4 hover:text-primary"
					target="_blank"
					rel="noopener noreferrer"
				>
					LinkedIn
				</Link>
				{" / "}
				<Link
					href="https://peerlist.io/devendrasingh"
					className="underline underline-offset-4 hover:text-primary"
					target="_blank"
					rel="noopener noreferrer"
				>
					Peerlist
				</Link>
				{" – or drop an email at "}
				<Link
					href="mailto:hello@raodevendrasingh.com"
					className="underline underline-offset-4 hover:text-primary"
				>
					hello@raodevendrasingh.com
				</Link>
			</p>
		</section>
	);
};
