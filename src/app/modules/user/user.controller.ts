import { Request, Response } from 'express';
import { UserServices } from './user.service';
import userValidationSchema from './user.validation';
const createUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;

    const { error } = userValidationSchema.validate(userData);
    const result = await UserServices.createUserIntoDB(userData);
    if (error) {
      res.status(500).json({
        success: false,
        message: 'something went wrong',
        error: error.details,
      });
    }
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

    if (result && result.matchedCount > 0) {
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
