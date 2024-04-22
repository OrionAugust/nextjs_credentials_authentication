import { connectMongoDb } from "@/lib/mongodb";
import { hashPassword } from "@/lib/utils";
import Users from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    const hashedPassword = await hashPassword(password);

    await connectMongoDb();
    await Users.create({ name:name, email:email, password: hashedPassword });

    return NextResponse.json({ message: "User Registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
