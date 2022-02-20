import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../utils/mongodb'
import crypto from 'crypto'
import User from '../../../models/user.model'
import { IUser } from '../../../interfaces/user.interface'
import { bufferToHex } from 'ethereumjs-util';
import { recoverPersonalSignature } from 'eth-sig-util';

export default async function authHandler(req: NextApiRequest, res: NextApiResponse) {
    const { method, body } = req
    const { account, signature } = body

    await dbConnect()

    switch (method) {
        case 'POST':
            try {
                const user: IUser | null = await User.findOne({ account })

                if (!user) {
                    res.status(401).json({
                        error: `User with account ${account} is not found in database`,
                    });
                }

                const msg = `I am signing my one-time nonce: ${user?.nonce}`;

                const msgBufferHex = bufferToHex(Buffer.from(msg, 'utf8'));

                const address = recoverPersonalSignature({
                    data: msgBufferHex,
                    sig: signature,
                });

                if (address.toLowerCase() !== account.toLowerCase()) {
                    res.status(401).json({
                        error: 'Signature verification failed',
                    });
                }

                const newNonce = crypto.randomBytes(8).toString('hex');

                await User.findOneAndUpdate({ account }, { nonce: newNonce })


                res.status(200).json({ success: true })

            } catch (error) {
                throw error
            }

            break;

        default:
            res.status(400).json({ success: false })
            break;
    }
}