import { installGlobals } from "@remix-run/node";

process.env.SESSION_SECRET_KEY = "secret";
process.env.AUTH0_CLIENT_ID = "testClient";
process.env.AUTH0_CLIENT_SECRET = "testSecret";
process.env.AUTH0_DOMAIN = "https://test.auth0.com";
process.env.PUBLIC_HOST = "http://localhost:3000";

installGlobals();
