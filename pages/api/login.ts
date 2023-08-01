import { compare } from 'bcrypt';
import { getUserByEmail } from '@/ApiStuff/UserApi';
import { withSessionRoute } from "@/config/withSession";

async function login(req, res) {
    if (req.method === 'POST') {
        const { password } = req.body;
        const user = await getUserByEmail(req.body.email);

        if (user) {
            const passwordMatch = await compare(password, user.password);
            if (passwordMatch) {
                // Store information about the user's authentication status in the session
                //req.session.set('user', { id: user.IDuser, email: user.email });

                req.session.user =  { id: user.IDuser, email: user.email, isAuthorized: true };
                await req.session.save();

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

export default withSessionRoute(login);
