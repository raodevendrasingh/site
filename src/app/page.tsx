import { ContactItem } from "@/components/contact-item";
import { MailBox } from "@/components/mail-box";
import { NameTransition } from "@/components/name-transition";
import { ProjectCard } from "@/components/project-card";
import { building } from "@/data/building";
import { contactList } from "@/data/contact-list";
import { projects } from "@/data/projects";

export default function Home() {
	return (
		<div className="flex flex-col space-y-12">
			<section className="flex flex-col space-y-2">
				<NameTransition />
				<div className="flex flex-col gap-5">
					<h3 className="text-primary/90 text-pretty font-medium">
						programmer • systems thinker • generalist
					</h3>
					<div className="flex flex-col gap-2">
						<p className="text-primary/85 text-pretty">
							I'm an engineer, builder, and problem solver. I craft full-stack, production-grade
							systems with a focus on performance, scalability, and clean abstractions. I'm always
							tinkering with new tech or working on side projects that solve problems I care about.
						</p>
						<p className="text-primary/85 text-pretty">
							I'm open to full-time opportunities where I can bring my engineering instincts,
							attention to detail, and drive to build things that actually matter.
						</p>
					</div>
				</div>
			</section>

			<section className="flex flex-col space-y-3">
				<h2 className="font-instrument tracking-wider text-2xl">currently building.</h2>
				<div className="flex flex-col gap-3">
					{building.map((item) => (
						<ProjectCard key={item.id} project={item} />
					))}
				</div>
			</section>

			<section className="relative flex flex-col space-y-3">
				<h2 className="font-instrument tracking-wider text-2xl">previously built.</h2>
				<div className="flex flex-col gap-3">
					{projects
						.filter((item) => item.show)
						.map((item) => (
							<ProjectCard key={item.id} project={item} />
						))}
				</div>
			</section>

			<section className="flex flex-col w-full space-y-3">
				<h2 className="font-instrument tracking-wider text-2xl">contact.</h2>
				<div className="flex flex-col gap-4 px-3">
					<div className="flex flex-col gap-2">
						<p>Connect with me on —</p>
						<span className="flex flex-wrap gap-3 md:flex-nowrap">
							{contactList.map((contact, index) => (
								<div key={index}>
									<ContactItem item={contact} />
								</div>
							))}
						</span>
					</div>
					<div className="flex flex-col gap-2">
						<p>
							<em>or</em> feel free to email me at —{" "}
						</p>
						<span className="flex flex-wrap gap-3">
							<MailBox text="contact@raodevendrasingh.com" />
						</span>
					</div>
				</div>
			</section>

			{/* <section className="flex flex-col">
                <h2 className="font-semibold pb-3">Writing</h2>
                {writing.map((item) => (
                    <BlogCard key={item.id} blog={item} />
                ))}
            </section> */}
		</div>
	);
}
