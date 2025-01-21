import Post from '../models/Posts.js';
import * as dotenv from 'dotenv';
import { createError } from '../error.js';
import { v2 as cloudinary } from 'cloudinary';

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Get all posts
export const getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find({});
        res.status(200).json({ success: true, data: posts });
    } catch (error) {
        next(createError(error.status, error?.message || "Something went wrong"));
    }
};

// Create Post
export const createPost = async (req, res, next) => {
    try {
        const { name, prompt, photo } = req.body;
        const photoUrl = await cloudinary.uploader.upload(photo);
        const newPost = await Post.create({
            name,
            prompt,
            photo: photoUrl?.secure_url,
        });
        return res.status(201).json({ success: true, data: newPost });
    } catch (error) {
        next(createError(error.status, error?.message || "Something went wrong"));
    }
};

// Delete Post
export const deletePost = async (req, res, next) => {
    try {
        const { id } = req.params;

        // Find the post by ID
        const post = await Post.findById(id);
        if (!post) {
            return next(createError(404, "Post not found"));
        }

        // Delete the photo from Cloudinary
        const photoPublicId = post.photo.split('/').slice(-1)[0].split('.')[0]; // Extract public ID from photo URL
        await cloudinary.uploader.destroy(photoPublicId);

        // Delete the post from the database
        await Post.findByIdAndDelete(id);

        return res.status(200).json({ success: true, message: "Post deleted successfully" });
    } catch (error) {
        next(createError(error.status, error?.message || "Something went wrong"));
    }
};
