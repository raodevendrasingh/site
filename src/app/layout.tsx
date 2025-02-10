import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Footer } from "@/components/footer";
import "./globals.css";

const outfit = Outfit({
    variable: "--font-outfit",
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
    description: "Full-stack engineer | Tech enthusiast",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${outfit.className} dark`}
            suppressHydrationWarning
        >
            <head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-icon-180x180.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/android-icon-192x192.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="96x96"
                    href="/favicon-96x96.png"
                />
                <link rel="icon" type="image/icon" href="/favicon.ico" />
                <link rel="manifest" href="/manifest.json" />
            </head>
            <body className="min-h-screen flex flex-col mx-auto max-w-2xl pt-12 md:pt-20 pb-8 px-8 antialiased">
                <main className="flex-grow">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
