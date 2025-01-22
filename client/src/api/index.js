import axios from "axios";

const API = axios.create({
    baseURL: "https://genai-api.vercel.app/",
});

export const GetPosts = async () => await API.get("/");
export const CreatePost = async (data) => await API.post("/post/", data);
export const GenerateAIImage = async (data) => await API.post("/generateImage/", data);
