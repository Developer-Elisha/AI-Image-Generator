import express from "express"
import { createPost, getAllPosts, deletePost } from "../controllers/Post.js"

const router = express.Router();

router.delete('/delete/:id', deletePost);
router.get("/", getAllPosts);
router.post("/", createPost);

export default router;