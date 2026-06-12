"use client";
import { PAGES } from "@/config/pages-class.config";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Bell, Calendar, Heart, MessageSquare } from "@deemlol/next-icons";
import { Button } from ".";
import { useRouter } from "next/navigation";
import Tooltip from "./Tooltip";

export default function Header() {
  const router = useRouter();

  const actions = [
    {
      Icon: MessageSquare,
      label: "Сообщения",
      onClick: () => console.log("Сообщения"),
    },
    {
      Icon: Bell,
      label: "Уведомления",
      onClick: () => console.log("Уведомления"),
    },
    {
      Icon: Heart,
      label: "Избранное",
      onClick: () => console.log("Избранное"),
    },
    {
      Icon: Calendar,
      label: "Запросы на просмотр",
      onClick: () => console.log("Запросы на просмотр"),
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-background flex items-center px-6 py-4 justify-between shadow-md">
      <Link href={PAGES.HOME()}>
        <Image
          src="/header-logo.svg"
          alt="logo"
          width={100}
          height={100}
          loading="eager"
          className="w-32 h-auto"
        />
      </Link>

      <SearchBar />

      <nav>
        <ul className="flex items-center space-x-6">
          {actions.map(({ Icon, label, onClick }) => (
            <li key={label}>
              <Tooltip text={label}>
                <button
                  className="flex transition-transform hover:scale-105"
                  area-label={label}
                  onClick={onClick}
                >
                  <Icon />
                </button>
              </Tooltip>
            </li>
          ))}

          <li>
            <Button
              text="Войти"
              onClick={() => router.push(PAGES.LOGIN())}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}
