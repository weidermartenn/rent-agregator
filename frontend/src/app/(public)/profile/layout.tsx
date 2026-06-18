import { Header } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Профиль",
  description: "Профиль пользователя Meter+",
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-32">{children}</div>
    </div>
  );
}
