'use client';
import { cn } from '@/lib/utils';
import { House } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  const pathName = usePathname();

  return (
    <section className="container mx-auto min-h-screen py-10">
      <nav className="mb-10 h-16 rounded-md bg-indigo-200/50 shadow-lg">
        <ul className="flex h-full text-xs font-bold">
          <li
            className={cn(
              'content-center px-4 transition-all duration-300 hover:bg-indigo-400 hover:text-white'
            )}
          >
            <Link href="/" className="inline-flex h-full items-center">
              <House />
            </Link>
          </li>
          <li
            className={cn(
              'content-center px-4 transition-all duration-300 hover:bg-indigo-400 hover:text-white',
              { 'bg-indigo-500 text-white': pathName === '/sample/form' }
            )}
          >
            <Link
              href="/sample/form"
              className="inline-flex h-full items-center"
            >
              Validação de formulário
            </Link>
          </li>

          <li
            className={cn(
              'content-center px-4 transition-all duration-300 hover:bg-indigo-400 hover:text-white',
              { 'bg-indigo-500 text-white': pathName === '/sample/url-state' }
            )}
          >
            <Link
              href="/sample/url-state"
              className="inline-flex h-full items-center"
            >
              URL State
            </Link>
          </li>
        </ul>
      </nav>

      <div>{children}</div>
    </section>
  );
}
