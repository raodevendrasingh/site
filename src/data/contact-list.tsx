import { Github } from "@/assets/icon/github";
import { LinkedIn } from "@/assets/icon/linkedin";
import { Peerlist } from "@/assets/icon/peerlist";
import { TwitterX } from "@/assets/icon/twitterX";
import { ReactNode } from "react";

export type ContactType = {
    icon: ReactNode;
    title: string;
    href: string;
};

export const contactList: ContactType[] = [
    {
        icon: <Github size={16} />,
        title: "Github",
        href: "https://github.com/raodevendrasingh",
    },
    {
        icon: <TwitterX size={16} />,
        title: "Twitter",
        href: "https://x.com/tminusdev",
    },
    {
        icon: <Peerlist size={16} />,
        title: "Peerlist",
        href: "https://peerlist.io/devendrasingh",
    },
    {
        icon: <LinkedIn size={16} />,
        title: "LinkedIn",
        href: "https://linkedin.com/in/raodevendrasingh",
    },
];
