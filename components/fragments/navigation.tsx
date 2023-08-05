import React, { useState, useEffect } from "react";
import Link from "next/link";
import {useAuth} from "@/Auth/authStuff";

function Navigation() {
    const { isAuthenticated, setIsAuthenticated } = useAuth();

    const handleLogout = () => {
        // Log out the user
        fetch('/api/logout', { method: 'POST' })
            .then(() => setIsAuthenticated(false));
    };

    return (
        <nav>
            <ul>
                <li><Link href="/">Main page</Link></li>
                <li><Link href="/products">Products</Link></li>
                <li><Link href="/order">Orders</Link></li>
                <li><Link href="/orderedProducts">Ordered products</Link></li>
                <li>
                    {isAuthenticated
                        ? <button onClick={handleLogout}>Logout</button>
                        : <Link href="/login">Log in</Link>}
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
