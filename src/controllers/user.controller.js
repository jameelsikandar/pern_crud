import { createUserService, deleteUserService, getAllUsersService, getUserByIdService, updateUserService } from "../models/user.model.js";
import { handleResponse } from "../utils/handleResponse.js";


export const createUser = async (req, res, next) => {
    const { name, email } = req.body;

    try {
        const newUser = await createUserService(name, email);
        handleResponse(res, 201, "User created successfully", newUser)
    } catch (error) {
        next(error)
    }
};

export const getAllUsers = async (req, res, next) => {
    try {
        const allUsers = await getAllUsersService();
        handleResponse(res, 200, "Users fetched successfully!", allUsers)

    } catch (error) {
        next(error)
    }
};



export const getUserById = async (req, res, next) => {
    try {
        const user = await getUserByIdService(req.params.id);
        if (!user) {
            return handleResponse(res, 404, "User not found!");
        }

        handleResponse(res, 200, "User fetched successfully!", user)

    } catch (error) {
        next(error)
    }
};



export const updateUser = async (req, res, next) => {
    const { name, email } = req.body;
    try {
        const updatedUser = await updateUserService(req.params.id, name, email);
        if (!updateUser) {
            return handleResponse(res, 404, "User not found");
        }
        handleResponse(res, 200, "User updated successfully!", updatedUser)
    } catch (error) {
        next(error);
    }
};


export const deleteUser = async (req, res, next) => {
    try {
        const user = await deleteUserService(req.params.id);
        if (!user) {
            return handleResponse(res, 404, "User not found")
        }
        handleResponse(res, 200, "User deleted successfully!", user);
    } catch (error) {
        next(error);
    }
}