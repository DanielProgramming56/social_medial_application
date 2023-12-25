import express from "express"
import { upload } from "../config/storage.js"
import { authUser } from "../middleware/auth.js";
import { createPost, getFeedPosts, getUserPosts, likePost } from "../controller/post.js";

const route = express.Router()

// CREATE POST
route.post("/", authUser, upload.single("picture"), createPost);
// READ POST
route.get("/", authUser, getFeedPosts);
route.get("/:userId/post", authUser, getUserPosts);
// UPDATE
route.patch("/:id/like", authUser, likePost);

export default route;