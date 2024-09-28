import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

const ProfileForm: React.FC = () => {
    const { currentUser, updateProfile } = useAuth();
    const [name, setName] = useState<string>(currentUser?.displayName || '');
    const [email, setEmail] = useState<string>(currentUser?.email || '');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Logic to update profile
        await updateProfile({ displayName: name, email });
    };

    return (
        <form className="profile-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <button type="submit">Update Profile</button>
        </form>
    );
};

export default ProfileForm;
