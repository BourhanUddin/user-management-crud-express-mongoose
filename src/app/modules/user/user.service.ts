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

const getAllUsersFromDB = async () => {
  const result = await UserModel.find();
  return result;
};

const getSingleUserFromDB = async (userId: string) => {
  const result = await UserModel.findOne({ userId });
  return result;
};
const deleteSingleUserFromDB = async (userId: string) => {
  try {
    const result = await UserModel.deleteOne({ userId });
    if (result.deletedCount === 1) {
      console.log('User deleted successfully');
      return result;
    } else {
      console.log(userId, 'User not found');
      return null;
    }
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};
const updateSingleUserFromDB = async (
  userId: number,
  updatedData: Partial<IUser>,
) => {
  try {
    const result = await UserModel.updateOne(
      { userId: userId },
      { $set: updatedData },
      { upsert: true },
    );

    console.log('Update Result:', result);

    if (result && result.modifiedCount === 1) {
      console.log('User updated successfully');
      return result;
    } else {
      console.log(userId, 'User not found or no changes were made');
      return null;
    }
  } catch (error: any) {
    console.error('Error updating user:', error.message);
    console.error('Error details:', error);
    throw error;
  }
};

export const UserServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  deleteSingleUserFromDB,
  updateSingleUserFromDB,
};
