import Image from "next/image";
type LogoProp = { className?: string };
export default function Logo({ className }: LogoProp) {
	return (
		<Image
			src="/images/logo.png"
			alt="VisDetect Logo"
			width={1393}
			height={287}
			className={className}
		/>
	);
}
