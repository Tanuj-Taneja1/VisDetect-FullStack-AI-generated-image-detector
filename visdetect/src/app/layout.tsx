import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import NavBar from "@/components/Layout/Navbar/NavBar";
import type { Viewport } from "next";
export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
};

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
				<body className="main-content">
					<NavBar />

					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
