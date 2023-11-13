import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import User from "@/public/models/User";
import connectDB from "@/public/utils/connectDB";
import Profile from "@/public/models/Profile";
import { Types } from "mongoose";

export async function GET() {
  try {
    await connectDB();

    const profiles = await Profile.find({published: true}).select("-userId");
    return NextResponse.json({
      data: profiles
    },
    {status: 200}
    )
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "There is a problem with the server" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await connectDB();

    const {
      title,
      description,
      location,
      phone,
      price,
      realState,
      constructionDate,
      category,
      rules,
      amenities,
    } = await req.json();

    const session = await getServerSession(req);
    console.log(session);

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

    if (
      !title ||
      !description ||
      !location ||
      !phone ||
      !price ||
      !realState ||
      !constructionDate ||
      !category ||
      !rules ||
      !amenities
    ) {
      return NextResponse.json(
        { error: "Please enter valid information" },
        { status: 400 }
      );
    }

    const newProfile = await Profile.create({
      title,
      description,
      location,
      phone,
      price: +price,
      realState,
      constructionDate,
      amenities,
      rules,
      category,
      userId: new Types.ObjectId(user._id),
    });
    console.log(newProfile);
    return NextResponse.json(
      {
        message: "A new ad has been added",
      },
      {
        status: 201,
      }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "" },
      { status: 500 }
    );
  }
}

export async function PATCH(req) {
  try {
    await connectDB();

    const {
      _id,
      title,
      description,
      location,
      phone,
      price,
      realState,
      constructionDate,
      category,
      rules,
      amenities,
    } = await req.json();

    const session = await getServerSession(req);
    console.log(session);

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

    if (
      !_id ||
      !title ||
      !description ||
      !location ||
      !phone ||
      !price ||
      !realState ||
      !constructionDate ||
      !category ||
      !rules ||
      !amenities
    ) {
      return NextResponse.json(
        { error: "Please enter valid information" },
        { status: 400 }
      );
    }

    const profile = await Profile.findOne({ _id });
    if (!user._id.equals(profile.userId)) {
      return NextResponse.json(
        { error: "Your access to this ad is limited" },
        { status: 403 }
      );
    }

    profile.title = title;
    profile.description = description;
    profile.location = location;
    profile.phone = phone;
    profile.realState = realState;
    profile.price = price;
    profile.constructionDate = constructionDate;
    profile.amenities = amenities;
    profile.rules = rules;
    profile.category = category;
    profile.save();

    return NextResponse.json(
      { message: "The ad has been successfully edited, thank you" },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "There is a problem with the server" },
      { status: 500 }
    );
  }
}
