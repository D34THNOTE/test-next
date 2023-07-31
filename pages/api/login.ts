import { compare } from 'bcrypt';
import { withIronSessionApiRoute } from 'iron-session/next';
import { getUserByEmail } from '@/ApiStuff/UserApi';

async function login(req, res) {
    if (req.method === 'POST') {
        const { password } = req.body;
        const user = await getUserByEmail(req.body.email);

        if (user) {
            const passwordMatch = await compare(password, user.password);
            if (passwordMatch) {
                // Store information about the user's authentication status in the session
                //req.session.set('user', { id: user.IDuser, email: user.email });

                req.session.user =  { id: user.IDuser, email: user.email };
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

export default withIronSessionApiRoute(login, {
    cookieName: 'MY_APP_COOKIE',
    password: 'complex_password_at_least_32_characters_long',
    cookieOptions: {
        secure: process.env.NODE_ENV === 'production',
    },
});
