import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  priority?: boolean;
}

export function BrandLogo({ className = "", priority = false }: BrandLogoProps) {
  return (
    <span className={`brand brand--yellow-clicks ${className}`.trim()} aria-label="The Yellow Clicks home">
      <Image
        src="/images/logo-transparent.png"
        alt="The Yellow Clicks"
        width={260}
        height={175}
        priority={priority}
        className="brand__img brand__img--yellow-clicks"
      />
    </span>
  );
}
