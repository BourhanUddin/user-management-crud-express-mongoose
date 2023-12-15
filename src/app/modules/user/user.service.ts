import { UserModel } from '../user.model';
import { IUser } from './user.interface';

const createUserIntoDB = async (user: IUser) => {
  try {
    const result = await UserModel.create(user);
    return result;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const UserServices = {
  createUserIntoDB,
};
