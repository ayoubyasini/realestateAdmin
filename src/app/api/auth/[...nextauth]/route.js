import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/public/models/User";
import { verifyPassword } from "@/public/utils/auth";
import connectDB from "@/public/utils/connectDB";



const authOptions = {
    session: {strategy: "jwt"},
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                const {email, password} = credentials;

                try {
                    await connectDB();
                }catch(error) {
                    throw new Error("A problem has occurred on the server");
                }

                if(!email || !password) {
                    throw new Error("Please enter valid information");
                }

                const user = await User.findOne({email});

                if(!user) throw new Error("Create an account");

                const isValid = await verifyPassword(password, user.password)

                if(!isValid) {
                    throw new Error("Email or password is incorrect");
                }

                return {email};
            },     
        }),
    ],
};


const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
