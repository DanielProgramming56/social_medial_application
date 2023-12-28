import User from "../model/User.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

export const register = async (req, res) => {
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

        const salt = await bcrypt.genSalt()
        const hashPassword = await bcrypt.hash(password, salt)

        // check if user already exist on the database
        const userExist = await User.findOne({ email })

        if (userExist) {
            res.status(400).json({ message: "account already created, you can sign up instead" });
            return;
        }

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashPassword,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile: Math.floor(Math.random() * 10000),
            impressions: Math.floor(Math.random() * 10000),
        })

        await newUser.save()

        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })

        if (!user) {
            res.status(400).json({ msg: "User does not exist. " });
            return;
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) return res.status(400).send('invalid credentials')

        const token = jwt.sign({ id: user._id }, process.env.JWT_KEY, { expiresIn: "1hr" })
        delete user.password;
        res.status(200).json({ token, user });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}