import { NameTransition } from "@/components/name-transition";
import { projects } from "@/data/projects";
import React from "react";
import { ProjectCard } from "@/components/project-card";
import { building } from "@/data/building";
import { writing } from "@/data/writing";
import { BlogCard } from "@/components/blog-card";
import { contactList } from "@/data/contact-list";
import { ContactItem } from "@/components/contact-item";
import { MailBox } from "@/components/mail-box";

export default function Home() {
    return (
        <div className="flex flex-col space-y-12">
            <section className="flex flex-col space-y-4">
                <NameTransition />
                <p className="text-primary/85 text-pretty">
                    I'm an engineer, builder, and problem solver. I craft
                    full-stack, production-ready applications with a focus on
                    scalability and performance. I'm always tinkering with new
                    tech or working on side projects that solve problems I care
                    about.
                </p>
                <p className="text-primary/85 text-pretty">
                    I am currently exploring full-time roles where I can
                    leverage my skills, passion, and dedication to deliver
                    high-quality outcomes and advance your team's objectives.
                </p>
            </section>

            <section className="flex flex-col space-y-3">
                <h2 className="font-instrument tracking-wider text-2xl">
                    currently building.
                </h2>
                <div className="flex flex-col gap-3">
                    {building.map((item) => (
                        <ProjectCard key={item.id} project={item} />
                    ))}
                </div>
            </section>

            <section className="relative flex flex-col space-y-3">
                <h2 className="font-instrument tracking-wider text-2xl">
                    previously built.
                </h2>
                <div className="flex flex-col gap-3">
                    {projects
                        .filter((item) => item.show)
                        .map((item) => (
                            <ProjectCard key={item.id} project={item} />
                        ))}
                </div>
            </section>

            <section className="flex flex-col w-full space-y-3">
                <h2 className="font-instrument tracking-wider text-2xl">
                    contact.
                </h2>
                <div className="flex flex-col gap-4 px-3">
                    <div className="flex flex-col gap-2">
                        <p>Connect with me on —</p>
                        <span className="flex flex-wrap gap-3 md:flex-nowrap">
                            {contactList.map((contact, index) => (
                                <div
                                    key={index}
                                    // className="w-[calc(50%-0.375rem)] md:w-auto"
                                >
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
