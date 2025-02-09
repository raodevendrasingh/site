import { NameTransition } from "@/components/name-transition";
import { code } from "@/data/code";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <NameTransition />
            <p className="pt-5 pb-8 text-primary/85 text-pretty">
                I'm an engineer, builder, and problem solver. I craft
                full-stack, production-ready applications with a focus on
                scalability and performance. I’m always tinkering with new tech
                or working on side projects that solve problems I care about.
            </p>
            <section>
                <h2 className="font-medium pb-3">Code</h2>
                <ul className="list-disc pl-5">
                    {code.map((item, index) => (
                        <li key={index} className="pb-2">
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
        </div>
    );
}
