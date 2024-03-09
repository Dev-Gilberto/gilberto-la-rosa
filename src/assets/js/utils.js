export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}
export function formatpubDate(pubDate) {
  return new Date(pubDate).toLocaleDateString("es", {
    timeZone: "UTC",
  });
}
