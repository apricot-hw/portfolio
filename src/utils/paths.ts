const baseUrl = import.meta.env.BASE_URL.replace(/\/?$/, '/');

export function withBase(path = ''): string {
  return `${baseUrl}${path.replace(/^\//, '')}`;
}
