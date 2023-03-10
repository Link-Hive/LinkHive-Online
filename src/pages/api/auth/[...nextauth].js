import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

export const authenticationOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
};

export default NextAuth(authenticationOptions);
