export const mediaSrc = (file: string) =>
  file?.startsWith("/") ? file : `/media/logos/${file || "logosiluet.png"}`;
