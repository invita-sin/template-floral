export const withBase = (path: string) =>
  `/template-floral${path.startsWith("/") ? path : "/" + path}`;
