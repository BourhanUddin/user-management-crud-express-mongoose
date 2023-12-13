import { Schema, model, connect } from 'mongoose';

export type fullName = {
  firstName: string;
  lastName: string;
};
export type address = {
  street: string;
  city: string;
  country: string;
};
export type orders = {
  productName: string;
  price: number;
  quantity: number;
}[];

export type IUser = {
  userId: number;
  username: string;
  password: string;
  fullName: fullName;
  age: number;
  email: string;
  isActive: 'active' | 'inActive';
  hobbies: string[];
  address: address;
  orders: orders;
};