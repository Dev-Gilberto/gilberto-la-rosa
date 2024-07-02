globalThis.process ??= {}; globalThis.process.env ??= {};
const robotsTxt = `
User-agent: *
Allow: /
Sitemap: ${new URL("sitemap-index.xml", "https://gilberto-la-rosa.xyz/").href}
`.trim();
const GET = () => {
  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
};

export { GET };
