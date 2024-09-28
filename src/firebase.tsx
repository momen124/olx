import firebase from 'firebase/app';
import 'firebase/auth';

// Define the structure of the Firebase configuration
interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

// Firebase configuration object, replace values with your Firebase project details
const firebaseConfig: FirebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase app
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // If already initialized, use that one
}

// Export Firebase authentication service and providers for Google and Facebook
export const auth = firebase.auth(); // Firebase auth instance
export const googleProvider = new firebase.auth.GoogleAuthProvider(); // Google authentication provider
export const facebookProvider = new firebase.auth.FacebookAuthProvider(); // Facebook authentication provider
