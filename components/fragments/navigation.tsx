import React from "react"
import Link from "next/link"


function Navigation() {

    return (
        <nav>
            <ul>
                <li><Link href="/" >Main page</Link></li>
                <li><Link href="/products" >Products</Link></li>
                <li><Link href="/order" >Orders</Link></li>
                <li><Link href="/orderedProducts" >Ordered products</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;

/*

FROM BING CHAT


import React, { useState, useEffect } from "react";
import Link from "next/link";

function Navigation() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Fetch the user's authentication state from the server
        fetch('/api/auth')
            .then(response => response.json())
            .then(data => setIsAuthenticated(data.isAuthenticated));
    }, []);

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



 */