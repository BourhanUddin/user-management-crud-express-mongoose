import { Request, Response } from 'express';
import { UserServices } from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    console.log('Received request body:', req.body);

    const { user: userData } = req.body;

    console.log('Extracted user data:', userData);

    const result = await UserServices.createUserIntoDB(userData);

    console.log('Result from service:', result);

    res.status(200).json({
      success: true,
      message: 'user created successfully',
      data: result,
    });
  } catch (error: any) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message,
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsersFromDB();
    res.status(200).json({
      success: true,
      message: 'Users are retrieved successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getsingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await UserServices.getSingleUserFromDB(userId);
    res.status(200).json({
      success: true,
      message: 'user is retrieved successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const deletesingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await UserServices.deleteSingleUserFromDB(userId);
    res.status(200).json({
      success: true,
      message: 'user is deleted successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const updateSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await UserServices.updateSingleUserFromDB(
      Number(userId),
      req.body,
    );
    // Assuming req.body contains the updated data for the user

    if (result) {
      res.status(200).json({
        success: true,
        message: 'User is updated successfully',
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'User not found or no changes were made',
        data: null,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      data: null,
    });
  }
};

export const UserControllers = {
  createUser,
  getAllUsers,
  getsingleUser,
  deletesingleUser,
  updateSingleUser,
};
