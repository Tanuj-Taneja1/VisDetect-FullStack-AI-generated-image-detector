import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "VisDetect - Detect AI Generated Images",
	description:
		"A FullStack Next JS Project made by me to real looking AI images from various models like GPT-4.0, Midjourney etc",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
