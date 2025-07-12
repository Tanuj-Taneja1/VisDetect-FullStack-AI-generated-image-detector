"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { SignUpButton, useUser } from "@clerk/nextjs";
export default function SignUpBut({
	className,
	buttonText = "Sign Up",
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
		<SignUpButton mode="modal">
			<button className={className}> {buttonText}</button>
		</SignUpButton>
	);
}
