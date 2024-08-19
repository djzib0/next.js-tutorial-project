"use server";

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";

export const addPost = async (formData) => {

    const {title, desc, slug, userId} = Object.fromEntries(formData)

    console.log(title, desc, slug, userId)

    try {
        connectToDb();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId,
        })

        await newPost.save();
        console.log("saved to db")
        revalidatePath("/blog")
    } catch (error) {
        console.log(error)
        return {error: "Something went wrong"}
    }
}

export const deletePost = async (formData) => {

    const {postId} = Object.fromEntries(formData);

    try {
        connectToDb();
        await Post.findByIdAndDelete(postId);
        console.log("deleted from db")
        revalidatePath("/blog")
    } catch (error) {
        console.log(error)
        return {error: "Something went wrong"}
    }
}