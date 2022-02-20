import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from '../../../utils/mongodb';
import crypto from 'crypto'
import User from '../../../models/user.model'
import { IUser } from "../../../interfaces/user.interface";



export default async function userHandler(req: NextApiRequest, res: NextApiResponse) {
    const { method, query } = req
    let account = query.account as string
    account = account.toLowerCase()

    await dbConnect()
    switch (method) {
        case 'GET':
            try {
                let user;

                if (account !== "undefined") {
                    user = await User.findOne({ account })
                }
                if (!user) {
                    const nonce = crypto.randomBytes(8).toString('hex');
                    const newUser = await User.create<IUser>({ account, nonce })
                    res.status(200).json({ user: newUser })
                }
                res.status(200).json({ user })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;

        default:
            res.status(400).json({ success: false })
            break;
    }
}