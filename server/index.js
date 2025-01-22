import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import PostRouter from './routes/Post.js';
import GenerateImageRouter from "./routes/GenerateImage.js";
import { getAllPosts } from "./controllers/Post.js"; // ✅ Import getAllPosts

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

// Error handler middleware
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({
        success: false,
        status,
        message,
    });
});

// Use routers
app.use("/api", PostRouter);
app.use("/api/generateImage", GenerateImageRouter);

// Default get: Return all posts
app.get("/", getAllPosts); // ✅ Corrected to call getAllPosts function

// Connect to MongoDB
const connectDB = () => {
    mongoose.set("strictQuery", true);
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => console.log("MongoDB Connected..."))
        .catch((err) => {
            console.error("Failed to connect to DB");
            console.error(err);
        });
};

// Start server
const startServer = async () => {
    try {
        connectDB();
        app.listen(8080, () => console.log("Server started on port 8080"));
    } catch (error) {
        console.log(error);
    }
};

startServer();
