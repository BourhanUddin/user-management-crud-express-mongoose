import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import config from '../config';
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
//pre save middleware
userSchema.pre('save', async function (next) {
  // console.log(this, 'pre middleware will save the data ');
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  // hashin password and save into DB
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});
// post save middleware
userSchema.post('save', function (doc, next) {
  // console.log(this, 'post middleware saved the data ');
  doc.password = ''; //show password as empty string
  next();
});
export const UserModel = model<IUser>('User', userSchema);
