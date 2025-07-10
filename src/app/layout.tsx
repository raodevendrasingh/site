import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";
import { Footer } from "@/components/footer";
import "./globals.css";

const satoshi = localFont({
	src: [
		{
			path: "../assets/font/Satoshi-Light.woff",
			weight: "300",
			style: "normal",
		},
		{
			path: "../assets/font/Satoshi-Regular.woff",
			weight: "400",
			style: "normal",
		},
		{
			path: "../assets/font/Satoshi-Medium.woff",
			weight: "500",
			style: "normal",
		},
		{
			path: "../assets/font/Satoshi-Bold.woff",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-satoshi",
});

const instrument = Instrument_Serif({
	variable: "--font-instrument",
	subsets: ["latin"],
	weight: "400",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://raodevendrasingh.com"),
	alternates: {
		canonical: "/",
	},
	title: {
		default: "Devendra Singh Rao",
		template: "%s | Devendra Singh Rao",
	},
	description: "programmer • systems thinker • generalist",
	openGraph: {
		title: "Devendra Singh Rao",
		description: "programmer • systems thinker • generalist",
		url: "https://raodevendrasingh.com",
		siteName: "Devendra Singh Rao",
		images: [
			{
				url: "/api/og?title=Devendra%20Singh%20Rao&subtitle=programmer%20%E2%80%A2%20systems%20thinker%20%E2%80%A2%20generalist&type=portfolio",
				width: 1200,
				height: 630,
				alt: "Devendra Singh Rao - programmer • systems thinker • generalist",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Devendra Singh Rao",
		description: "programmer • systems thinker • generalist",
		images: [
			"/api/og?title=Devendra%20Singh%20Rao&subtitle=programmer%20%E2%80%A2%20systems%20thinker%20%E2%80%A2%20generalist&type=portfolio",
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${instrument.variable} ${satoshi.className} dark`}
			suppressHydrationWarning
		>
			<head>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
				<link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
				<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
				<link rel="icon" type="image/icon" href="/favicon.ico" />
				<link rel="manifest" href="/manifest.json" />
			</head>
			<body className="min-h-screen flex flex-col mx-auto max-w-2xl pt-12 md:pt-16 px-6 antialiased">
				<main className="grow">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
