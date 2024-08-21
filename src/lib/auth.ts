import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { connectToDb } from "./utils"
import { User } from "./models"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    })
  ],
  callbacks: {
    async signIn({user, account, profile}) {
      console.log(profile)
      if (account?.provider === "github") {
        connectToDb();
        try {
          const user = await User.findOne({email: profile?.email});
          console.log("i'm here")
          if (!user) {
            const newUser = new User({
              username: profile?.login,
              email: profile?.email,
              img: profile?.avatar_url,
            });

            await newUser.save();
          }

        } catch (error) {
          console.log(error)
          return false
        }
      }
      return true
    },
  }
})