import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Вход в приложение",
  description: "Авторизация в приложении",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <header className="flex flex-col items-center justify-center space-y-4 pt-22">
        <Image
          src="/header-logo.svg"
          alt="logo"
          width={150}
          height={150}
          loading="eager"
          className="w-52 h-auto"
        />
      </header>
      <div className="pt-12">{children}</div>
    </div>
  );
}
