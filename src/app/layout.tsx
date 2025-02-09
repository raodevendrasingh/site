import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://raodevendrasingh.com"),
    alternates: {
        canonical: "/",
    },
    title: {
        default: "Devendra Singh",
        template: "%s | Devendra Singh",
    },
    description: "Full-stack developer | Tech enthusiast",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${inter.className} dark`}
            suppressHydrationWarning
        >
            <body className="antialiased">
                <div className="min-h-screen mx-auto max-w-2xl pt-20 pb-10">
                    {children}
                </div>
            </body>
        </html>
    );
}
