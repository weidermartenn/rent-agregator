"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Button,
} from "@/components/ui";
import { useAuthStore } from "@/store/auth.store";
import { MailIcon, PhoneIcon, MapPinIcon, PencilIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PAGES } from "@/config/pages-class.config";

export default function ProfilePage() {
  const { user } = useAuthStore();
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-6">
      {/* Основная карточка */}
      <Card className="w-full">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl font-bold">Профиль</CardTitle>
          <Button
            variant="outline"
            onClick={() => router.push(PAGES.PROFILE())}
            className="flex items-center gap-2"
          >
            <PencilIcon size={16} />
            Редактировать
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex gap-8 items-start">
            {/* Аватар */}
            <div className="flex flex-col items-center gap-3 shrink-0">
              {user?.avatarUrl ? (
                <Image
                  className="rounded-full object-cover"
                  priority
                  unoptimized={process.env.NODE_ENV === "development"}
                  src={user.avatarUrl}
                  alt="avatar"
                  width={120}
                  height={120}
                />
              ) : (
                <div className="w-30 h-30 rounded-full bg-zinc-800 flex items-center justify-center text-3xl font-bold text-zinc-400">
                  {user?.firstName?.[0] ??
                    user?.email?.[0]?.toUpperCase() ??
                    "?"}
                </div>
              )}
            </div>

            {/* Имя и фамилия */}
            <div className="flex flex-col gap-3 flex-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-zinc-400">Имя</p>
                  <Input
                    placeholder="Не указано"
                    readOnly
                    value={user?.firstName ?? ""}
                    disabled
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-zinc-400">Фамилия</p>
                  <Input
                    placeholder="Не указано"
                    readOnly
                    value={user?.lastName ?? ""}
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Контакты */}
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Контакты</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="bg-zinc-900/50">
              <CardContent className="pt-4">
                <div className="flex gap-3 items-start">
                  <MailIcon
                    size={20}
                    className="text-zinc-400 mt-0.5 shrink-0"
                  />
                  <div className="flex flex-col gap-1 min-w-0">
                    <p className="text-sm text-zinc-400">Email</p>
                    <p className="text-sm font-medium truncate">
                      {user?.email ?? "—"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/50">
              <CardContent className="pt-4">
                <div className="flex gap-3 items-start">
                  <PhoneIcon
                    size={20}
                    className="text-zinc-400 mt-0.5 shrink-0"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-sm text-zinc-400">Телефон</p>
                    <p className="text-sm font-medium">
                      {user?.phone ?? (
                        <span className="text-zinc-500">Не указан</span>
                      )}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/50">
              <CardContent className="pt-4">
                <div className="flex gap-3 items-start">
                  <MapPinIcon
                    size={20}
                    className="text-zinc-400 mt-0.5 shrink-0"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-sm text-zinc-400">Город</p>
                    <p className="text-sm font-medium">
                      {user?.city ?? (
                        <span className="text-zinc-500">Не указан</span>
                      )}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
