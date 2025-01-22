import express from "express";
import { createPost, getAllPosts, deletePost } from "../controllers/Post.js";

const router = express.Router();

// Change the get route to be '/api/get'
router.get("/get", getAllPosts);  // This will now be accessible at /api/get
router.delete('/delete/:id', deletePost);
router.post("/post", createPost);

export default router;
