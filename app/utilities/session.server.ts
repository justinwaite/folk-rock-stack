import { createCookieSessionStorage } from "@remix-run/node";
import { getRequiredEnvVariable } from "~/utilities/environment"; // or "@remix-run/cloudflare"

const secretKey = getRequiredEnvVariable("SESSION_SECRET_KEY");

const { getSession, commitSession, destroySession } = createCookieSessionStorage({
  // a Cookie from `createCookie` or the CookieOptions to create one
  cookie: {
    name: "__session",
    expires: new Date(Date.now() + 60_000 * 60 * 24 * 7 * 365),
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7 * 365,
    path: "/",
    sameSite: "lax",
    secrets: [secretKey],
    secure: true,
  },
});

export { getSession, commitSession, destroySession };
