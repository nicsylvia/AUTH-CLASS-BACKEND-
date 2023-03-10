import userModels from "../Models/user.model";
import {Request, Response} from "express"

export const register = async(req: Request, res: Response): Promise<Response> => {
    try {
        const {email, password, fullname, stack} = req.body;
        const user = await userModels.create({
            email,
            password,
            fullname,
            stack,
        })
        return res.status(201).json({
            status: "Successfully registered this user",
            data: user
        })
    } catch (error) {
        return res.status(401).json({
            status: "Failed to register user",
            data: error
        })
    }
};

// Get users:
export const getUsers = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const users = await userModels.find().sort({createdAt: -1});
        return res.status(200).json({
            status: `Successfully got ${users.length} user(s)`,
            data: users
        })
    } catch (error) {
        return res.status(401).json({
            status: "Failed to get all users",
            data: error
        })
    }
};

// Sign in:
export const login = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const {email} = req.body;
        if (!email) {
            return res.status(401).json({
                status: "Please enter an email",
                data: email
               })
        }
        const oneUser = await userModels.findOne({email})
        if (!oneUser) {
           return res.status(401).json({
            status: "Please enter with the email you registered with, user not found!",
            data: oneUser
           })
        }
        return res.status(200).json({
            status: "LOGIN SUCCESSFUL",
            data: oneUser
        })
    } catch (error) {
        return res.status(401).json({
            status: "Couldn't login",
            data: error
        })
    }
}