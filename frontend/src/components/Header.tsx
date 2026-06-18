"use client";
import { PAGES } from "@/config/pages-class.config";
import Image from "next/image";
import Link from "next/link";
import { SearchBar } from "@/components";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui";
import { useRouter } from "next/navigation";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { useAuthStore } from "@/store/auth.store";
import { Bell, Calendar, Heart, MessageSquare } from "lucide-react";
import { deleteAuthCookies } from "@/app/actions/auth";
import { toast } from "sonner";

export default function Header() {
  const router = useRouter();
  const { isAuth, user, clearAuth } = useAuthStore();

  const actions = [
    {
      Icon: MessageSquare,
      label: "Сообщения",
      onClick: () => router.push(PAGES.MESSAGES()),
    },
    {
      Icon: Bell,
      label: "Уведомления",
      onClick: () => console.log("Уведомления"),
    },
    {
      Icon: Heart,
      label: "Избранное",
      onClick: () => router.push(PAGES.FAVORITES()),
    },
    {
      Icon: Calendar,
      label: "Запросы на просмотр",
      onClick: () => router.push(PAGES.VIEWING_REQUESTS()),
    },
  ];

  const handleLogout = async () => {
    await deleteAuthCookies();
    clearAuth();
    router.push(PAGES.HOME());
    router.refresh();
    toast.success("Вы успешно вышли из аккаунта");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border flex items-center px-4 md:px-8 py-3 justify-between shadow-md">

      <Link href={PAGES.HOME()} className="shrink-0">
        <Image
          src="/header-logo.svg"
          alt="Meter+"
          width={100}
          height={100}
          loading="eager"
          className="w-24 md:w-32 h-auto"
        />
      </Link>

      <div className="hidden md:flex flex-1 max-w-xl mx-6">
        <SearchBar />
      </div>

      <nav>
        <ul className="flex items-center gap-2 md:gap-4">

          {isAuth && actions.map(({ Icon, label, onClick }) => (
            <li key={label} className="hidden md:flex">
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    className="flex p-2 rounded-md transition-colors hover:bg-accent"
                    aria-label={label}
                    onClick={onClick}
                  >
                    <Icon size={22} />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{label}</p>
                </TooltipContent>
              </Tooltip>
            </li>
          ))}

          {isAuth ? (
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    aria-label="Меню пользователя"
                  >
                    <Avatar>
                      <AvatarImage
                        src={user?.avatarUrl ?? undefined}
                        alt="avatar"
                      />
                      <AvatarFallback>
                        {user?.firstName?.[0] ?? 'M'}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 mt-2" align="end">
                  {(user?.firstName || user?.email) && (
                    <>
                      <div className="px-2 py-1.5">
                        <p className="text-sm font-medium">
                          {user.firstName ?? user.email}
                        </p>
                        {user.firstName && (
                          <p className="text-xs text-muted-foreground truncate">
                            {user.email}
                          </p>
                        )}
                      </div>
                      <DropdownMenuSeparator />
                    </>
                  )}
                  <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => router.push(PAGES.PROFILE())}>
                      Профиль
                    </DropdownMenuItem>
                    <DropdownMenuItem >
                      Мои объявления
                    </DropdownMenuItem>
                    {/* На мобильных показываем действия в меню */}
                    <div className="md:hidden">
                      <DropdownMenuSeparator />
                      {actions.map(({ label, onClick }) => (
                        <DropdownMenuItem key={label} onClick={onClick}>
                          {label}
                        </DropdownMenuItem>
                      ))}
                    </div>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive" onClick={handleLogout}>
                    Выйти
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          ) : (
            <li className="flex gap-2">              
              <Button
                variant="outline"
                onClick={() => router.push(PAGES.LOGIN())}
              >
                Войти
              </Button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}