'use client';
import { PAGES } from '@/config/pages-class.config';
import Image from 'next/image';
import Link from 'next/link';
import SearchBar from './SearchBar';
import { Bell, Calendar, Heart, MessageSquare } from '@deemlol/next-icons';
import { Button } from '.';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
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
          <li>
            <button className="flex transition-transform hover:scale-105" area-label="Сообщения">
              <MessageSquare />
            </button>
          </li>
          <li>
            <button className="flex transition-transform hover:scale-105" area-label="Уведомления">
              <Bell />
            </button>
          </li>
          <li>
            <button className="flex transition-transform hover:scale-105" area-label="Избранное">
              <Heart />
            </button>
          </li>
          <li>
            <button className="flex transition-transform hover:scale-105" area-label="Заявки на просмотр">
              <Calendar />
            </button>
          </li>
          <li>
            <Button text="Войти" onClick={() => router.push(PAGES.LOGIN())}/>
          </li>
        </ul>
      </nav>
    </header>
  );
}
