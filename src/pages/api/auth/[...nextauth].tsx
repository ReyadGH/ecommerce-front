import NextAuth from "next-auth";
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
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.

      session.accessToken = token.accessToken;
      session.user.id = token.sub;
      return session;
    },
    async jwt({ token, account, profile }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        token.id = profile.id;
      }
      return token;
    },
    async redirect({ url, baseUrl }) {
      return "/";
    },
  },
  session: {
    strategy: "jwt",
  },
});

export default options;
