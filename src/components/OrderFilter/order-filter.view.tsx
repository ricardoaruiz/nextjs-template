'use client';

import { Text } from '../ui/text';
import { OrderFilterProps } from './order-filter.types';

export const OrderFilterView = (props: OrderFilterProps) => {
  const {
    filter,
    filterFormRef,
    handleSearchChanbe,
    handleStatusChange,
    handleClearFilter
  } = props;

  return (
    <form
      ref={filterFormRef}
      className="mx-auto flex w-full max-w-[1040px] flex-col gap-4 rounded-lg border border-slate-200 p-4 shadow-lg shadow-indigo-200/50"
    >
      <Text as="h1" size="lg">
        Filtro de pedidos
      </Text>

      <div className="grid grid-cols-[1fr_1fr_auto] gap-2">
        <input
          type="search"
          name="search"
          placeholder="Termo de busca"
          className="w-full rounded-lg px-4 py-3 ring-1 ring-indigo-200"
          defaultValue={filter.search}
          onChange={handleSearchChanbe}
        />

        <select
          name="status"
          className="w-full rounded-lg bg-transparent px-4 py-3 ring-1 ring-indigo-200"
          defaultValue={filter.status}
          onChange={handleStatusChange}
        >
          <option value="">Status</option>
          <option value="opened">Aberto</option>
          <option value="closed">Fechado</option>
        </select>

        <button
          type="button"
          className="rounded-md border border-indigo-400 bg-indigo-400 px-4 py-2 text-slate-100 transition-all duration-300 hover:bg-indigo-500 active:bg-indigo-600"
          onClick={handleClearFilter}
        >
          Limpar
        </button>
      </div>
    </form>
  );
};
