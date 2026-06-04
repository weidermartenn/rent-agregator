import Image from "next/image";
import logo from "../../../public/header-logo.svg";

export default function Header() {
  return (
    <header className="flex items-center px-6 py-4">
      <Image src={logo} loading="eager" alt="Meter+" height={100} />
    </header>
  );
}
