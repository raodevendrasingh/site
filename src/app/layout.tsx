import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";

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
            <body className="min-h-screen flex flex-col mx-auto max-w-2xl pt-12 md:pt-20 pb-10 px-8 antialiased">
                <main className="flex-grow">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
