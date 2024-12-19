import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';

type SearchParam = {
  name: string;
  value: string;
};

type RouteHandlerParams = {
  search: SearchParam | SearchParam[];
  options?: NavigateOptions;
};

/**
 * Provides a set of methods to handle client-side routing and
 * URLSearchParams manipulation.
 *
 * @returns an object with the following methods:
 *
 * - `getUrl`: takes a `Search` object (or an array of `Search` objects)
 *   and returns a URL string with the search parameters applied.
 * - `replaceUrl`: takes a `Search` object (or an array of `Search` objects)
 *   and replaces the current URL with the new one.
 * - `pushUrl`: takes a `Search` object (or an array of `Search` objects)
 *   and pushes a new URL to the browser's history stack.
 * - `pathName`: the current URL pathname.
 * - `searchParams`: the current URLSearchParams.
 * - `router`: the Next.js `useRouter` hook.
 */
export const useRouteHandler = () => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams]
  );

  const updateSearchParams = useCallback(
    (search: SearchParam) => {
      if (!search.value) {
        params.delete(search.name);
        return;
      }
      params.set(search.name, search.value.toLowerCase());
    },
    [params]
  );

  const getUrl = useCallback(
    ({ search }: RouteHandlerParams) => {
      if (Array.isArray(search)) {
        search.forEach((item) => updateSearchParams(item));
        return `${pathName}?${params.toString()}`;
      }

      updateSearchParams(search);
      return `${pathName}?${params.toString()}`;
    },
    [params, pathName, updateSearchParams]
  );

  const replaceUrl = useCallback(
    ({ search, options }: RouteHandlerParams) => {
      router.replace(getUrl({ search }), options);
    },
    [getUrl, router]
  );

  const pushUrl = useCallback(
    ({ search, options }: RouteHandlerParams) => {
      router.push(getUrl({ search }), options);
    },
    [getUrl, router]
  );

  return {
    getUrl,
    replaceUrl,
    pushUrl,
    pathName,
    searchParams,
    router
  };
};
