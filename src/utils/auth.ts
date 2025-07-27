import { betterAuth } from 'better-auth';
import { createPool } from 'mysql2/promise';
import { bearer, jwt } from 'better-auth/plugins';

const createAuth = () =>
  betterAuth({
    database: createPool({
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '3306'),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    }),
    plugins: [jwt(), bearer()],
    emailAndPassword: {
      enabled: true,
    },
    trustedOrigins: ['terminalbus://*', 'terminalbus://'],
    socialProviders: {
      google: {
        clientId: process.env.GOOGLE_OAUTH_ID as string,
        clientSecret: process.env.GOOGLE_OAUTH_SECRET as string,
      },
    },
  });

export const auth: ReturnType<typeof betterAuth> = createAuth();
