import Image from "next/image";
type HeroProp = { className?: string };
export default function HeroImage({ className }: HeroProp) {
	return (
		<Image
			src="/images/Hero_Image.webp"
			alt="Hero Image for Home Page"
			fill={true}
			className={className}
		/>
	);
}
