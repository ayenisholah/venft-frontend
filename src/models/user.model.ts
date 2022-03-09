import mongoose, { Schema, model } from 'mongoose';
import { IUser } from '../interfaces/user.interface';

const UserSchema = new Schema<IUser>({
    account: { type: String, required: true, unique: true },
    nonce: { type: String, required: true, unique: true },
});

const User = mongoose.models.User || model<IUser>('User', UserSchema);

export default User