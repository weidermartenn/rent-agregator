import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <h2 className="text-2xl font-semibold mb-2">Страница не найдена</h2>
                <p className="mb-6">
                    Извините, страница, которую вы ищете, не существует.
                </p>
                <Link 
                    href="/" 
                >
                    На главную
                </Link>
            </div>
        </div>
    );
}