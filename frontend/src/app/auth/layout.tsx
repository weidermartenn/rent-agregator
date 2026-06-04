import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Авторизация",
  description: "Авторизация в приложении",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col ">
      <div className="grow">{children}</div>
    </div>
  );
}
