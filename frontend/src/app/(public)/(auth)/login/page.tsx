'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  FieldLabel,
  Input,
  Button
} from "@/components/ui";
import { PAGES } from "@/config/pages-class.config";
import { authService } from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";
import { ArrowLeftCircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import z from "zod";

const emailSchema = z.object({
  email: z.string().min(1, "Введите email"),
});

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [validationError, setValidationError] = useState<string | null>(null);

  const { mutate, isPending, error } = useMutation({
    mutationFn: async (email: string) => authService.sendOtp(email),
    onSuccess: () => {
      router.push(PAGES.VERIFY_OTP(email));
    },
  });

  const handleSendOtp = () => {
    setValidationError(null);

    const result = emailSchema.safeParse({ email });

    if (!result.success) {
      setValidationError(result.error.issues[0]?.message);
      return;
    }

    mutate(result.data.email);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendOtp();
    }
  };

  const errorMessage =
    validationError ??
    (error ? "Что-то пошло не так. Попробуйте еще раз." : null);

  return (
    <div className="max-w-xl mx-auto p-8">
      <Button
        variant="link"
        className="mb-4"
        onClick={() => router.push(PAGES.HOME())}
      >
        <ArrowLeftCircleIcon />
        Вернуться на главную страницу
      </Button>
      <Card className="bg-zinc-900/30">
        <CardHeader>
          <CardTitle className="border-b pb-4 text-center text-3xl font-bold mb-4">
            Вход
          </CardTitle>
          <CardDescription>
            Введите адрес электронной почты, чтобы продолжить. После нажатия на
            кнопку <b>&quot;Прислать код&quot;</b> проверочный код будет
            отправлен на вашу электронную почту.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <FieldLabel htmlFor="email">Электронная почта</FieldLabel>
          <Input
            id="email"
            placeholder="you@example.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isPending}
            aria-invalid={!!errorMessage}
          />
          {errorMessage && (
            <p className="text-sm text-red-500" role="alert">
              {errorMessage}
            </p>
          )}
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button
            variant="outline"
            onClick={handleSendOtp}
            disabled={isPending}
          >
            {isPending ? "Отправка..." : "Прислать код"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
