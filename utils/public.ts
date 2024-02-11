export function formatPublic(path: string): string {
  if (path.startsWith("/public/")) {
    return path.slice(7);
  }
  return path;
}
