import Link from "next/link";
import Image from "next/legacy/image";

const Logo = ({ width = 90, height = 34, textSize = "text-xl" }) => {
  return (
    <Link
      className="prevent-select flex w-fit items-center gap-2 mb-4"
      href="/"
    >
      <Image
        src="/logo-text.svg"
        alt="Logo"
        width={width}
        height={height}
        className="m-2"
      />
    </Link>
  );
};

export default Logo;
