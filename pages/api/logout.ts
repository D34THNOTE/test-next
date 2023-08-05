/*

FROM BING CHAT


import { withSessionRoute } from "@/config/withSession";

async function logout(req, res) {
    if (req.method === 'POST') {
        // Destroy the user's session to log them out
        req.session.destroy();
        res.status(200).json({ message: 'Logged out' });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

export default withSessionRoute(logout);



 */