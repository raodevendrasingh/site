import { NameTransition } from "@/components/name-transition";
import { projects } from "@/data/projects";
import React from "react";
import { ProjectCard } from "@/components/project-card";
import { building } from "@/data/building";
import { writing } from "@/data/writing";
import { BlogCard } from "@/components/blog-card";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
    return (
        <div className="flex flex-col space-y-8">
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

            <section className="flex flex-col">
                <h2 className="font-semibold pb-3">Building</h2>
                <div className="flex flex-col gap-3">
                    {building.map((item) => (
                        <ProjectCard key={item.id} project={item} />
                    ))}
                </div>
            </section>

            <section className="flex flex-col">
                <h2 className="font-semibold pb-3">Projects</h2>
                <div className="flex flex-col gap-3">
                    {projects
                        .filter((item) => item.show)
                        .map((item) => (
                            <ProjectCard key={item.id} project={item} />
                        ))}
                </div>
            </section>

            {/* <section className="flex flex-col">
                <h2 className="font-semibold pb-3">Writing</h2>
                {writing.map((item) => (
                    <BlogCard key={item.id} blog={item} />
                ))}
            </section> */}

            <ContactSection />
        </div>
    );
}
