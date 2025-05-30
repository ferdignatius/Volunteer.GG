import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      status?: string; // if applicable
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    name: string;
    email: string;
    status?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    name: string;
    email: string;
    status?: string;
  }
}