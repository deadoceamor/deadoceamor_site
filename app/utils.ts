export const prefixPath = (path: string): string => {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!base) return path;
  if (path.startsWith(base)) return path;
  return `${base}${path.startsWith("/") ? "" : "/"}${path}`;
};
