import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const hasTitle = searchParams.has("title");
	const title = hasTitle ? searchParams.get("title")?.slice(0, 30) : "Devendra Singh Rao";
	const subtitle = searchParams.get("subtitle") || "programmer • systems thinker • generalist";
	const type = searchParams.get("type") || "portfolio";

	// Load custom fonts using readFileSync
	const satoshiBold = readFileSync(join(process.cwd(), "src/assets/font/Satoshi-Bold.woff"));

	const satoshiMedium = readFileSync(join(process.cwd(), "src/assets/font/Satoshi-Medium.woff"));

	const satoshiRegular = readFileSync(join(process.cwd(), "src/assets/font/Satoshi-Regular.woff"));

	return new ImageResponse(
		<div
			style={{
				height: "100%",
				width: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				background: "#000000",
				position: "relative",
				overflow: "hidden",
			}}
		>
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					zIndex: -10,
					height: "100%",
					width: "100%",
					background:
						"linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
					backgroundSize: "120px 70px",
				}}
			/>

			{/* Subtle white dotted background pattern */}
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundImage:
						"radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)",
					backgroundSize: "40px 40px",
				}}
			/>

			{/* Gradient overlay for depth */}
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					background:
						"linear-gradient(to bottom right, transparent, rgba(0,0,0,0.2), rgba(0,0,0,0.4))",
				}}
			/>

			{/* Main content container */}
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					textAlign: "center",
					padding: "64px",
					background: "#090909",
					borderRadius: "24px",
					boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)",
					backdropFilter: "blur(20px)",
					border: "1px solid rgba(255, 255, 255, 0.1)",
					maxWidth: "800px",
					margin: "40px",
					position: "relative",
					zIndex: 10,
				}}
			>
				{/* Type badge */}
				<div
					style={{
						background: "linear-gradient(to right, #ffffff, #e5e7eb)",
						color: "#000000",
						padding: "8px 16px",
						borderRadius: "20px",
						fontSize: "14px",
						fontWeight: 500,
						marginBottom: "32px",
						textTransform: "uppercase",
						letterSpacing: "0.5px",
					}}
				>
					{type}
				</div>

				{/* Main title with Instrument Serif */}
				<h1
					style={{
						fontSize: "72px",
						fontWeight: 700,
						color: "#ffffff",
						margin: "0 0 24px 0",
						lineHeight: 1.2,
						letterSpacing: "-0.02em",
						fontFamily: "serif",
					}}
				>
					{title}
				</h1>

				{/* Subtitle */}
				<p
					style={{
						fontSize: "30px",
						fontWeight: 400,
						color: "#d1d5db",
						margin: "0 0 40px 0",
						lineHeight: 1.4,
						maxWidth: "600px",
					}}
				>
					{subtitle}
				</p>

				{/* Decorative line */}
				<div
					style={{
						width: "80px",
						height: "4px",
						background: "linear-gradient(to right, #ffffff, #9ca3af)",
						borderRadius: "2px",
						marginBottom: "32px",
					}}
				/>

				{/* Footer text */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "12px",
						fontSize: "20px",
						color: "#9ca3af",
						fontWeight: 400,
					}}
				>
					<span style={{ color: "#ffffff", fontWeight: 500, fontFamily: "monospace" }}>
						raodevendrasingh.com
					</span>
				</div>
			</div>
		</div>,
		{
			width: 1200,
			height: 630,
			fonts: [
				{
					name: "Satoshi",
					data: satoshiBold,
					style: "normal",
					weight: 700,
				},
				{
					name: "Satoshi",
					data: satoshiMedium,
					style: "normal",
					weight: 500,
				},
				{
					name: "Satoshi",
					data: satoshiRegular,
					style: "normal",
					weight: 400,
				},
			],
		},
	);
}
