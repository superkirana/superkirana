// src/config/configuration.ts
export default () => ({
    port: parseInt(process.env.PORT || '3000', 10),
    jwt: {
      secret: process.env.JWT_SECRET || 'c3155d574253357ee06137d1914f446e34b5725ed9d835c13de720a8dcd7e9b7d985b7f1b81cb53aa6ecf14ef6a145e8e577d5cb176d7c504ee8db7c66493556',
      expiresIn: process.env.JWT_EXPIRES_IN || '3600s',
    },
    google: {
      clientID: process.env.GOOGLE_CLIENT_ID || '94467199751-6hgfrvq50ptkqjmckmivdrn360ft4fv7.apps.googleusercontent.com',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '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',
      callbackURL: process.env.GOOGLE_CALLBACK_URL || 'http://localhost:3000/auth/google/callback',
    },
    database: {
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432', 10) || 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'gaurav',
      database: process.env.DB_NAME || 'superkiranaDDBB',
    },
  });
  