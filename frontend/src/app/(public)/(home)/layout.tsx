import { Header } from "@/components";
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Вход в приложение',
    description: 'Авторизация в приложении',
}

export default function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen">
            <Header />
            <div className="pt-32">{children}</div>
        </div>
    )
}