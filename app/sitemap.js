export default function sitemap() {
    return [
      {
        url: process.env.baseURL,
        lastModified: new Date(),
      },
      {
        url: `${process.env.baseURL}/trending`,
        lastModified: new Date(),
      },
      {
        url: `${process.env.baseURL}/mobile-games`,
        lastModified: new Date(),
      },
      {
        url: `${process.env.baseURL}/pc-games`,
        lastModified: new Date(),
      },
      {
        url: `${process.env.baseURL}/apps`,
        lastModified: new Date(),
      },
    ];
  }