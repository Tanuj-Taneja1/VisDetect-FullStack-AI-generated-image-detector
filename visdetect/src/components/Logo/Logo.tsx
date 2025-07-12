import Image from "next/image";
type LogoProp = { className?: string };
export default function Logo({ className }: LogoProp) {
	return (
		<Image
			src="/images/logo.png"
			alt="VisDetect Logo"
			fill={true}
			className={className}
		/>
	);
}
