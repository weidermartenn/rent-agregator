import { CircleSlash, SquareArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center flex flex-col items-center space-y-4">
                <CircleSlash size={50}/>
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <h2 className="text-2xl font-semibold mb-2">Страница не найдена</h2>
                <p className="mb-6">
                    Извините, страница, которую вы ищете, не существует.
                </p>
                <Link 
                    href="/" 
                    className="flex items-center gap-2 text-sm hover:scale-105 transition-transform duration-200 ease-in-out"
                >
                    <SquareArrowLeft size={20}/>
                    На главную
                </Link>
            </div>
        </div>
    );
}