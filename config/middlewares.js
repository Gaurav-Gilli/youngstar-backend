module.exports = [
  "strapi::errors",
  /* Beginning of snippet */
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "https://youngstar-backend.onrender.com",
            "youngstar-backend.onrender.com",
            "s3.ap-south-1.amazonaws.com",
            "market-assets.strapi.io",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "skoliko.s3.ap-south-1.amazonaws.com",
            "s3.ap-south-1.amazonaws.com",
            "market-assets.strapi.io",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  /* End of snippet */
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
