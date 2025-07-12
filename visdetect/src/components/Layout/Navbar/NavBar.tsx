import Logo from "@/components/Logo/Logo";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function NavBar() {
	return (
		<nav className={styles.navbar}>
			<div className={styles.logocontainer}>
				<Logo className={styles.logo} />
			</div>
			<ul className={styles.navlist}>
				<li>
					<Link href="/"> Home </Link>
				</li>
			</ul>
		</nav>
	);
}
