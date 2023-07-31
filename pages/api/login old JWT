// pages/api/login.js
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import cookie from 'cookie';
import {getUserByEmail, getUserById} from "@/ApiStuff/UserApi";

export default async function login(req, res) {
    if (req.method === 'POST') {
        const { password } = req.body;

        const user = await getUserByEmail(req.body.email)





        //TODO IDK modify this using the link below ig
        // https://github.com/vvo/iron-session/tree/main#nextjs-usage







        if (user) {
            const passwordMatch = await compare(password, user.password);
            if (passwordMatch) {
                const claims = { sub: user.IDuser, email: user.email };
                //const jwt = sign(claims, process.env.JWT_SECRET, { expiresIn: '1h' });
                const jwt = sign(claims, "very_secret_key", { expiresIn: '1h' });

                res.setHeader(
                    'Set-Cookie',
                    cookie.serialize('auth', jwt, {
                        httpOnly: true, // supposed to prevent cross-site scripting
                        secure: process.env.NODE_ENV !== 'development', // send over HTTPS only if NODE_ENV is not equal to "development"
                        sameSite: 'strict',
                        maxAge: 3600, // time until it expires, in seconds
                        path: '/', // need to read about this more
                    })
                );

                res.status(200).json({ message: 'Logged in' });
            } else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
