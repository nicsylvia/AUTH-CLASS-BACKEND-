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
        const users = await userModels.find();
        return res.status(200).json({
            status: "Successfully got all users",
            data: users
        })
    } catch (error) {
        return res.status(401).json({
            status: "Failed to get all users",
            data: error
        })
    }
}