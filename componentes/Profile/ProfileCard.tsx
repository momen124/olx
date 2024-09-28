import React from 'react';
import { useAuth } from '../../hooks/useAuth';

const ProfileCard: React.FC = () => {
    const { currentUser } = useAuth();

    if (!currentUser) return null;

    return (
        <div className="profile-card">
            <h2>{currentUser.displayName || currentUser.email}</h2>
            <p>Email: {currentUser.email}</p>
        </div>
    );
};

export default ProfileCard;
