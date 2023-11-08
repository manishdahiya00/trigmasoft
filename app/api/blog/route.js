import dbConnect from "@/db";
import Blog from "@/model";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  const blogs = await Blog.find();
  return NextResponse.json(blogs);
}
