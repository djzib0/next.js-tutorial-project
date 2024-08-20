import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [ 
    GitHub({
      // if it won't work, copy .env.local variables to .env and check if this is a problem.
      clientId: process.env.GITHUB_ID, 
      clientSecret: process.env.GITHUB_ID
    })
  ],
})