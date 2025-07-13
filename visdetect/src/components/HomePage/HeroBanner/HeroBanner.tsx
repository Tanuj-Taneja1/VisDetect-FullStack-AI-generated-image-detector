import React from "react";
import styles from "./HeroBanner.module.css";
import HeroImage from "@/components/HomePage/HeroImage/HeroImage";
import SignUpBut from "@/components/auth/SignUp/SignUp";

export default function HeroBanner() {
	return (
		<section className={styles.hero}>
			<div className={styles.left}>
				<h1 className={styles.title}>Detect AI-Generated Images Instantly</h1>
				<p className={styles.subtitle}>
					Empower your content with authenticity.
					<br />
					Use our API or manual tools to detect AI-generated images in seconds.
				</p>
				<ul className={styles.features}>
					<li>Fast & accurate AI detection</li>
					<li>Easy API integration</li>
					<li>No Credit Card Required</li>
				</ul>
				<SignUpBut buttonText="Get Started for free" className={styles.cta} />
			</div>
			<div className={styles.right}>
				<div className={styles.imageContainer}>
					<HeroImage />
				</div>
			</div>
		</section>
	);
}
