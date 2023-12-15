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
export const UserControllers = {
  createUser,
  getAllUsers,
};
