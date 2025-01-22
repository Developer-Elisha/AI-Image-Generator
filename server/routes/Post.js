import express from "express";
import { createPost, getAllPosts, deletePost } from "../controllers/Post.js";

const router = express.Router();

router.get("/", getAllPosts);
router.delete('/delete/:id', deletePost);
router.post("/post", createPost);

export default router;
