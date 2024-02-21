import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { emailLogin, emailLogout } from "@/services/auth";

export const authOptions = {
  callbacks: {
    async signIn({ account, profile, user, credentials }) {
      if (credentials) {
        const login = await emailLogin(credentials.email, credentials.password);
        if (login) {
          user.id = login.data._id;
          user.firstName = login.data.firstName;
          user.lastName = login.data.lastName;
          user.name = login.data.firstName + " " + login.data.lastName;
          user.email = login.data.email;
          user.active = login.data.active;
          user.createDate = login.data.createDate;
          return true;
        }
      }
      return true;
    },
    jwt: async ({ token, user, trigger, session }) => {
      if (user) {
        return {
          ...token,
          jwt: user.jwt,
          id: user.id ? user.id : null,
          firstName: user.firstName ? user.firstName : null,
          lastName: user.lastName ? user.lastName : null,
          name: user.name ? user.name : user.firstName + " " + user.lastName,
          email: user.email,
          active: user.active ? user.active : true,
          createDate: user.createDate ? user.createDate : new Date(),
        };
      }
      if(trigger === 'update'){
        return {...token, ...session.user}
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.jwt = token.jwt;
        session.user.userId = token.id;
        session.user.firstName = token.firstName;
        session.user.lastName = token.lastName;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.active = token.active;
        session.user.createDate = token.createDate;
        session.user.image = null;
      }
      return session;
    },
  },
  events: {
    async signOut(message) {
      const token = message.token;
      await emailLogout(token);
    },
  },
};

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith@gmail.com" },
        password: { label: "Contraseña", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const res = await emailLogin(credentials?.email, credentials?.password);

          if (!res.data?.access_token) {
            console.log('Error during login process');
            return null;
          }
          
          const jwt = res.data?.access_token

          return {
            ...res.data[0],
            jwt,
          };
        } catch (e) {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 80,
  },
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/register",
    error: "/auth/error",
  },
  ...authOptions,
});
