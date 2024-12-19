import { OrderFilter } from '@/components/OrderFilter';
import { Suspense } from 'react';

export default async function UrlStatePage() {
  return (
    <Suspense>
      <OrderFilter />
    </Suspense>
  );
}
