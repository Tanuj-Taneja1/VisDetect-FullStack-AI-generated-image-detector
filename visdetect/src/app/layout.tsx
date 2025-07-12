import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import NavBar from "@/components/Layout/Navbar/NavBar";

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
		<ClerkProvider>
			<html lang="en">
				<NavBar />
				<body className="main-content">{children}</body>
			</html>
		</ClerkProvider>
	);
}
