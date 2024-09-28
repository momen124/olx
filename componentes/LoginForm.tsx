import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

const LoginForm: React.FC = () => {
    const { loginWithEmail, loginWithGoogle, loginWithFacebook } = useAuth();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await loginWithEmail(email, password);
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <div className="login-form">
            <h2>Login</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            <button onClick={loginWithGoogle}>Login with Google</button>
            <button onClick={loginWithFacebook}>Login with Facebook</button>
        </div>
    );
};

export default LoginForm;
