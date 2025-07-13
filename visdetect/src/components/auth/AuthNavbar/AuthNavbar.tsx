"use client";
import LogInBut from "../LogIn/LogIn";
import LogOutBut from "../LogOut/LogOut";
import SignUpBut from "../SignUp/SignUp";
import styles from "./AuthNavbar.module.css";
import { useUser } from "@clerk/nextjs";
export default function AuthNavbar() {
	let authComponent;
	const { isSignedIn } = useUser();
	if (!isSignedIn) {
		authComponent = (
			<div className={styles.authButtonList}>
				<LogInBut className={styles.authButtons} />

				<SignUpBut className={styles.authButtons} />
			</div>
		);
	} else {
		authComponent = <LogOutBut className={styles.authButtons} />;
	}
	return authComponent;
}
