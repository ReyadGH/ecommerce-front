import nextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      userName: string;
      email: string;
      role: string;
    };
    accessToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    refreshToken?: string;
    accessToken?: string;
    accessTokenExpires?: number;
  }
}
