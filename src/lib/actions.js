"use server";

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";

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

export const handleGithubLogin = async () => {
    "use server";
    await signIn("github")
}

export const handleGithubLogout = async () => {
    "use server";
    await signOut();
}

// timestamp 3:37:34 I got an error when I try to log in. Why? Check it