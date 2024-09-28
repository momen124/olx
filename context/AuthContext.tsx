import React, { createContext, useContext } from 'react';
import { useAuth } from '../hooks/useAuth';

interface AuthContextProps {
    currentUser: any;
    loginWithEmail: (email: string, password: string) => Promise<any>;
    registerWithEmail: (email: string, password: string) => Promise<any>;
    logout: () => Promise<void>;
    loading: boolean;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC = ({ children }) => {
    const auth = useAuth();

    return (
        <AuthContext.Provider value={auth}>
            {!auth.loading && children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = (): AuthContextProps => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuthContext must be used within an AuthProvider');
    }
    return context;
};
