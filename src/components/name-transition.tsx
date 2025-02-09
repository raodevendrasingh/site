"use client";

import { useTransition } from "react";

export function NameTransition() {
    const [isPending, startTransition] = useTransition();

    return (
        <div className="view-transition-name:name-transition">
            <h1 className="font-medium text-lg">
                <span className="sr-only">Devendra Singh Rao</span>
                <span
                    aria-hidden="true"
                    className="block overflow-hidden group relative"
                >
                    <span
                        className="inline-block transition-transform duration-300 ease-in-out group-hover:-translate-y-full whitespace-nowrap"
                        style={{ viewTransitionName: "name-top" }}
                    >
                        {Array.from("Devendra Singh Rao").map(
                            (letter, index) => (
                                <span
                                    key={index}
                                    className="inline-block"
                                    style={{
                                        transitionDelay: `${index * 25}ms`,
                                        opacity: isPending ? 0 : 1,
                                    }}
                                >
                                    {letter === " " ? "\u00A0" : letter}
                                </span>
                            ),
                        )}
                    </span>
                    <span
                        className="inline-block absolute left-0 top-0 transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0"
                        style={{ viewTransitionName: "name-bottom" }}
                    >
                        {Array.from("raodevendrasingh").map((letter, index) => (
                            <span
                                key={index}
                                className="inline-block"
                                style={{
                                    transitionDelay: `${index * 25}ms`,
                                    opacity: isPending ? 0 : 1,
                                }}
                            >
                                {letter}
                            </span>
                        ))}
                    </span>
                </span>
            </h1>
        </div>
    );
}
