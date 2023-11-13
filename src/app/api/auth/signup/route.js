import { NextResponse } from "next/server";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { hashPassword } from "@/utils/auth";

export async function POST(req) {
  try {
    await connectDB();

    const { email, password } = await req.json();
    console.log({ email, password });

    if (!email || !password) {
      return NextResponse.json(
        { error: "Please enter valid information" },
        { status: 422 }
      );
    }

    const existingUser = await User.findOne({ email });
    console.log(existingUser);

    if (existingUser) {
      return NextResponse.json(
        { error: "This account exists" },
        { status: 422 }
      );
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await User.create({
      email: email,
      password: hashedPassword,
    });
    console.log(newUser);

    return NextResponse.json({ message: "Create an account!" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "A problem has occurred on the server" },
      {
        status: 500,
      }
    );
  }
}