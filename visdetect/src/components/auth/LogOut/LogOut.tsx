import { SignOutButton } from "@clerk/nextjs";

export default function LogOutBut({
	className = " ",
	buttonText = "Log Out",
}: {
	className?: string;
	buttonText?: string;
}) {
	return (
		<SignOutButton>
			<button className={className}> {buttonText}</button>
		</SignOutButton>
	);
}
