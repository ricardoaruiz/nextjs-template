import { useRouteHandler } from '@/hooks/useRouteHandler';
import { ChangeEvent, useCallback, useRef } from 'react';
import { useDebounceCallback } from 'usehooks-ts';
import { Filter } from './order-filter.types';

export const useOrderFilterModel = () => {
  const filterFormRef = useRef<HTMLFormElement>(null);
  const { replaceUrl, pushUrl, searchParams } = useRouteHandler();

  const filter: Filter = {
    search: searchParams.get('search') ?? '',
    status: searchParams.get('status') ?? ''
  };

  const handleClearFilter = useCallback(() => {
    filterFormRef.current?.reset();

    pushUrl({
      search: [
        { name: 'search', value: '' },
        { name: 'status', value: '' }
      ]
    });
  }, [pushUrl]);

  const handleSearchChanbe = useDebounceCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const search = event.target.value;

      replaceUrl({
        search: { name: 'search', value: search }
      });
    },
    500
  );

  const handleStatusChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const status = event.currentTarget.value;

      replaceUrl({
        search: { name: 'status', value: status }
      });
    },
    [replaceUrl]
  );

  return {
    filter,
    filterFormRef,
    handleSearchChanbe,
    handleStatusChange,
    handleClearFilter
  };
};
