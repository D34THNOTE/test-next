import React, {createContext, useContext, useState, useCallback, useEffect} from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Define a callback function to fetch the user's authentication state from the server
    const refetch = useCallback(() => {
        fetch('/api/auth')
            .then(response => response.json())
            .then(data => setIsAuthenticated(data.isAuthenticated));
    }, []);

    // Fetch the user's authentication state from the server when the component is mounted
    useEffect(() => {
        refetch();
    }, [refetch]);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, refetch }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
