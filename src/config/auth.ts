import { betterAuth } from "better-auth";
import { createPool } from "mysql2/promise";
import { bearer  , jwt  } from "better-auth/plugins";


export const auth = betterAuth({
    database: createPool({
        host: "localhost",
        user: "root",
        password: "secretP4ss",
        database: "auth",
    }),
    plugins: [bearer() , jwt()],
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        },
    },

});