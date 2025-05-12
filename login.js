import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_PROJECT.firebaseapp.com",
};

initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export default function Login() {
const navigate = useNavigate();

const handleLogin = async () => {
    try {
    await signInWithPopup(auth, provider);
    navigate('/dashboard');
    } catch (err) {
    console.error(err);
    }
};

return <button onClick={handleLogin}>Login with Google</button>;
}
