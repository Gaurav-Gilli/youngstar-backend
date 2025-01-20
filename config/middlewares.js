module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:", "wss://youngstar-backend.onrender.com"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "youngstar-backend.onrender.com",
            "https://youngstar-backend.onrender.com",
            "s3.ap-south-1.amazonaws.com",
            "market-assets.strapi.io",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "youngstar-backend.onrender.com",
            "https://youngstar-backend.onrender.com",
            "skoliko.s3.ap-south-1.amazonaws.com",
            "s3.ap-south-1.amazonaws.com",
            "market-assets.strapi.io",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
