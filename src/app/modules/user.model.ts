import { Schema, model } from 'mongoose';
import { IUser, address } from './user/user.interface';

const addressSchema = new Schema<address>({
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const userSchema = new Schema<IUser>({
  userId: {
    type: Number,
    unique: true,
  },
  username: {
    type: String,
    unique: true,
    required: [true, 'Username is required.'],
  },
  password: {
    type: String,
    required: [true, 'Password is required.'],
  },
  fullName: {
    firstName: {
      type: String,
      required: [true, 'First name is required.'],
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required.'],
    },
  },
  age: {
    type: Number,
    required: [true, 'Age is required.'],
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],

    unique: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  hobbies: {
    type: [String],
  },
  address: addressSchema,
});

export const UserModel = model<IUser>('User', userSchema);

//   orders: orderSchema,
// const orderSchema = new Schema<orders>({
//   productName: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   quantity: {
//     type: Number,
//     required: true,
//   },
// });
