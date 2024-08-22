import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils"
import { NextResponse } from "next/server";

export const GET = async (request: any) => {
  try {
    connectToDb();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!")
  }
}

// time stamp 3:28:19