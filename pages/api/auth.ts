import { withSessionRoute } from "@/config/withSession";

async function auth(req, res) {
    if (req.method === 'GET') {
        // Check if the user object exists in the session
        const user = req.session.user;

        if (user) {
            // The user is authenticated
            res.status(200).json({ isAuthenticated: true });
        } else {
            // The user is not authenticated
            res.status(200).json({ isAuthenticated: false });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

export default withSessionRoute(auth);
