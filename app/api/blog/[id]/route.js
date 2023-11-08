import dbConnect from "@/db";
import Blog from "@/model";
import { NextResponse } from "next/server";
export async function GET(request, { params }) {
  dbConnect();
  const id = params.id;
  const blog = await Blog.findById(id);
  return NextResponse.json({ success: "true", blog });
}
