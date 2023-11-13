import { NextResponse } from "next/server";
import connectDB from "@/public/utils/connectDB";
import { getServerSession } from "next-auth";
import User from "@/public/models/User";
import Profile from "@/public/models/Profile";

export async function DELETE(req,context){
    try {
        await connectDB();

        const session = await getServerSession(req);
        const id = context.params.deleteId;

        if(!session) {
           return NextResponse.json({error: "Create an account!!"},{status: 401})
        }

        const user = await User.findOne({email: session.user.email});
        if(!user) {
            return NextResponse.json(
              { error: "User account not found!!" },
              { status: 404 }
            );
        }

        const profile = await Profile.findOne({_id: id})

        if(!user._id.equals(profile.userId)) {
            return NextResponse.json(
              { error: "Your access to this ad is limited" },
              { status: 403 }
            );
        }

        await Profile.deleteOne({_id: id})
            return NextResponse.json(
              { message: "The ad was deleted" },
              { status: 200 }
            );

    }catch(error){
        return NextResponse.json(
          { error: "There is a problem with the server" },
          { status: 500 }
        );
    }
}