import NextAuth from "next-auth";
import { DefaultJWT, JWT } from "next-auth/jwt";
import KeycloakProvider from "next-auth/providers/keycloak";
const options = NextAuth({
  // Configure one or more authentication providers
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_ID || "",
      clientSecret: process.env.KEYCLOAK_SECRET || "",
      issuer: process.env.KEYCLOAK_ISSUER,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token.accessToken as string;
      session.user.id = token.sub as string;
      return session;
    },

    async jwt({ token, account, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account && user) {
        token.accessToken = account.access_token as string;
        token.id = user.id;
        token.accessTokenExpires = (account?.expires_at as number) * 1000;
        token.refreshToken = account?.refresh_token as string;
      }
      console.log(token.accessTokenExpires);

      if (Date.now() > (token.accessTokenExpires as number)) {
        console.log(`User ${token.id} is timed out`);
        return refreshAccessToken(token);
      }
      return token;
    },
    async redirect({}) {
      return "/";
    },
  },
  session: {
    strategy: "jwt",
  },
});

async function refreshAccessToken(token: JWT | DefaultJWT) {
  try {
    const url = process.env.KEYCLOAK_ISSUER + "/protocol/openid-connect/token";

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
      body: new URLSearchParams({
        client_id: process.env.KEYCLOAK_ID || "",
        client_secret: process.env.KEYCLOAK_SECRET || "",
        grant_type: "refresh_token",
        refresh_token: token.refreshToken as string,
      }),
    });

    const refreshedTokens = await response.json();

    if (!response.ok) {
      throw refreshedTokens;
    }

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
    };
  } catch (error) {
    console.log(error);

    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export default options;
