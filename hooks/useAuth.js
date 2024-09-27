// src/hooks/useAuth.js
import { useState, useEffect } from 'react';
import { auth, googleProvider, facebookProvider } from '../firebase';

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const loginWithEmail = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const registerWithEmail = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const loginWithGoogle = () => {
    return auth.signInWithPopup(googleProvider);
  };

  const loginWithFacebook = () => {
    return auth.signInWithPopup(facebookProvider);
  };

  const logout = () => {
    return auth.signOut();
  };

  return {
    currentUser,
    loginWithEmail,
    registerWithEmail,
    loginWithGoogle,
    loginWithFacebook,
    logout,
    loading
  };
};
