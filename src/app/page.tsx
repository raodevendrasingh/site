import { NameTransition } from "@/components/name-transition";
import { code } from "@/data/code";
import { writing } from "@/data/writing";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col space-y-8">
            <section className="flex flex-col space-y-4">
                <NameTransition />
                <p className="text-primary/85 text-balance">
                    I'm an engineer, builder, and problem solver. I craft
                    full-stack, production-ready applications with a focus on
                    scalability and performance. I’m always tinkering with new
                    tech or working on side projects that solve problems I care
                    about.
                </p>
            </section>

            <section className="flex flex-col">
                <h2 className="font-medium pb-3">Code</h2>
                <ul className="list-disc pl-5">
                    {code.map((item) => (
                        <li key={item.id} className="pb-2">
                            <Link
                                href={item.link}
                                target="_blank"
                                className="text-primary/75 hover:text-primary transition-colors"
                            >
                                {item.title}
                                {item.comments && (
                                    <span className="pl-1 text-sm text-primary/60 italic">
                                        ({item.comments})
                                    </span>
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="flex flex-col">
                <h2 className="font-medium pb-3">Writing</h2>
                <ul className="list-disc pl-5">
                    {writing.map((item) => (
                        <li key={item.id} className="pb-2">
                            <Link
                                href={item.link}
                                className="text-primary/75 hover:text-primary transition-colors"
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
