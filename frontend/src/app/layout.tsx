import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import { Header } from "@/components";

export const metadata: Metadata = {
  title: "Meter+",
  description: "Агрегатор аренды недвижимости",
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={inter.className}>
      <body className="h-full px-2 md:px-5">
        <div className="flex flex-col">
          <Header />
          <div className="grow">{children}</div>
        </div>
      </body>
    </html>
  );
}