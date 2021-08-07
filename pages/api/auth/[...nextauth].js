import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: "721410201251-vtk80cucop8060d2fl9rauh24koajvbj.apps.googleusercontent.com",
      clientSecret: "wUqASnRf2VZCqjvZ-v2a_64v",
    }),
  ],
});
