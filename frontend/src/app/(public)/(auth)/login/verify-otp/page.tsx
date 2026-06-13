"use client";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  FieldLabel,
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui";
import { PAGES } from "@/config/pages-class.config";
import { authService } from "@/services/auth.service";
import { useAuthStore } from "@/store/auth.store";
import { ArrowLeftCircle } from "@deemlol/next-icons";
import { useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function VerifyOtpPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const [code, setCode] = useState("");
  const [validationError, setValidationError] = useState<string | null>(null);

  const { setAuth } = useAuthStore();

  const { mutate, isPending, error } = useMutation({
    mutationFn: async () => authService.verifyOtp(email ?? '', code),
    onSuccess: async (data) => {
      const res = await fetch(`/api/auth/me`, { credentials: "include" });
      const { user } = await res.json();
      setAuth(user, data.expiresAt)
      router.push(PAGES.HOME());
      router.refresh();
    },
  });

  const handleVerify = () => {
    setValidationError(null);

    if (code.length !== 6) {
      setValidationError("Код должен состоять из 6 цифр");
      return;
    }

    mutate();
  };

  const handleComplete = () => {
    mutate();
  };

  const errorMessage =
    validationError ??
    (error ? "Что-то пошло не так. Попробуйте еще раз." : null);

  return (
    <div className="max-w-xl mx-auto p-8">
      <Button
        variant="link"
        className="mb-4"
        onClick={() => router.push(PAGES.LOGIN())}
      >
        <ArrowLeftCircle />
        Изменить почту
      </Button>
      <Card className="bg-zinc-900/30">
        <CardHeader>
          <CardTitle className="border-b pb-4 text-center text-3xl font-bold mb-4">
            Введите код
          </CardTitle>
          <CardDescription>
            Мы отправили код на{" "}
            <strong className="text-gray-300">{email}</strong>. Введите его в
            поле ниже и нажмите &quot;Подтвердить код&quot;. <br />
            Если вы не видите письмо - проверьте папку &quot;Спам&quot;
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 flex flex-col items-center">
          <FieldLabel htmlFor="otp" className="self-start">
            Введите одноразовый код
          </FieldLabel>
          <InputOTP
            maxLength={6}
            pattern="\d*"
            id="otp"
            inputMode="numeric"
            value={code}
            onChange={(v) => setCode(v.replace(/\D/g, ""))}
            onComplete={handleComplete}
            disabled={isPending}
          >
            <InputOTPGroup>
              {[...Array(6)].map((_, index) => (
                <InputOTPSlot
                  key={index}
                  index={index}
                  className="w-18 h-18 text-2xl font-semibold"
                />
              ))}
            </InputOTPGroup>
          </InputOTP>
          {errorMessage && (
            <p className="text-sm text-red-500" role="alert">
              {errorMessage}
            </p>
          )}
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="outline" onClick={handleVerify} disabled={isPending}>
            {isPending ? "Проверка" : "Подтвердить код"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
