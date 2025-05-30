import { User } from "@/db/models";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string
          password: string
        }

        const user = await User.findOne({
          attributes: {
            exclude: ['password','createdAt','updatedAt']
          },
          where: {
            email: email,
            password: password
          }
        })

        if (!user || !(await bcrypt.compare(password, user.password))) {
          return null
        }

        // 🔐 Replace this with real DB lookup
        // if (email === "user@example.com" && password === "password123") {
        //   return {
        //     id: "1",
        //     name: "Demo User",
        //     email: "user@example.com",
        //   }
        // }
        if(user){
          return user.get({ plain: true })
        }

        // ❌ Invalid login
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin", // custom sign-in page (optional)
  },
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.status = token.status;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.status = user.status; // if exists
      }
      return token;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
