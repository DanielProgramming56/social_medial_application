import express from "express"
import { authUser } from "../middleware/auth.js"
import { addRemoveFriend, getUser, getUserFriends } from "../controller/user.js"

const route = express.Router()

// READ
route.get("/:id", authUser, getUser)
route.get("/:id/friends", authUser, getUserFriends)

// UPDATE
route.patch("/;id/:friendId", authUser, addRemoveFriend);

export default route
