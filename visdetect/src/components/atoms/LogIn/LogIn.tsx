"use client";
import React from "react";
import { SignInButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
export default function LogInBut({
	className,
	buttonText = "Log In",
}: {
	className?: string;
	buttonText?: string;
}) {
	const { isSignedIn } = useUser();
	const router = useRouter();

	if (isSignedIn) {
		return (
			<button className={className} onClick={() => router.push("/DashBoard")}>
				{buttonText}
			</button>
		);
	}

	return (
		<SignInButton mode="modal">
			<button className={className}> {buttonText}</button>
		</SignInButton>
	);
}
