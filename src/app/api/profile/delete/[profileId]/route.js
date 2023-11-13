import { NextResponse } from "next/server";
import connectDB from "@/public/utils/connectDB";
import { getServerSession } from "next-auth";
import Profile from "@/public/models/Profile";
import User from "@/public/models/User";

export async function DELETE(req, context) {
  try {
    await connectDB();

    const id = context.params.profileId;

    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        {
          error: "Please log in to your account",
        },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        { error: "User account not found" },
        { status: 404 }
      );
    }

    const profile = await Profile.findOne({ _id: id });
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
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "A problem has occurred on the server" },
      { status: 500 }
    );
  }
}
