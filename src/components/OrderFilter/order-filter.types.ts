import { useOrderFilterModel } from './order-filter.model';

export type Filter = {
  search: string;
  status: string;
};

export type OrderFilterProps = ReturnType<typeof useOrderFilterModel>;
