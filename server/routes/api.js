import express from "express";
import auth from "./auth.js";
import user from "./user.js";
import post from "./post.js";

const app = express();

app.use("/auth", auth);
app.use("/user", user);
app.use("/post", post);

export default app