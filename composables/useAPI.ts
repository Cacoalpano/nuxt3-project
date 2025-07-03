import type { UseFetchOptions } from "#app"

type FetchOptions<T>  = UseFetchOptions<T> & { timeout?: number };

export function useAPI<T = unknown>(url: string | (() => string), options?: FetchOptions<T>) {
  const { $config } = useNuxtApp()
  const apiUrl = $config.public.apiUrl ;
  return ref()
}
