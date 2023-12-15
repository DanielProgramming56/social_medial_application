import User from "../model/User";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const register = async (req, res) => {
    try {
        const { 
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation,
        } = req.body;
    } catch (error) {

    }
}