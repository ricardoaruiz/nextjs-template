'use client';

import { useOrderFilterModel } from './order-filter.model';
import { OrderFilterView } from './order-filter.view';

export const OrderFilterViewModel = () => {
  const model = useOrderFilterModel();

  return <OrderFilterView {...model} />;
};
