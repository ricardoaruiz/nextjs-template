import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <Text as="h1" className="mb-4 text-6xl font-light">
        Next Template
      </Text>

      <Button className="min-w-52" asChild>
        <Link href="/sample">Exemplos</Link>
      </Button>

      <Text size="sm" className="mt-4">
        Clique no botão acima e veja exemplos
      </Text>
    </main>
  );
}
