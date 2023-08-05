import { useState } from 'react';
import { useRouter } from 'next/router';
import {useAuth} from "@/Auth/authStuff";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const { refetch } = useAuth();


    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        if (res.ok) {
            refetch();
            router.push('/');
        } else {
            // handle error
            console.log("THERE WAS AN ERROR IN login.tsx FILE BUT IDK WHAT BECAUSE I AM WRITING THIS IN AN \"ELSE\" SO THERE IS NO ERROR TO DISPLAY");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input
                    type="text"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </label>
            <br />
            <button type="submit">Log in</button>
        </form>
    );
}
