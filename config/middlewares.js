module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'http:', 'https:', "https://youngstar-backend.onrender.com"],
          "script-src":["'self'", 'http:', 'https:', "https://youngstar-backend.onrender.com"],
          upgradeInsecureRequests: null,
        }
      },
    },
  },
];
