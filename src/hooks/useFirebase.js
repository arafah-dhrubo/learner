import { useEffect, useState } from "react";

import { Navigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import initFirebaseAuth from "../Firebase/firebase.init";

// Initializing firebase authentication 
initFirebaseAuth();

// Creating hook to access from any file
const useFirebase = () => {
    const redirect_url = window.location;
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                <Navigate to="/login" replace state={redirect_url} />
            })
            .catch(err => {
                setError(err.message);
            })
    }

    const signInUsingGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user);
                <Navigate to="/login" replace state={redirect_url} />
            })
            .catch(err => {
                setError(err.message);
            })
        }

    const handleCreateUser = (displayName, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result)
                setUserName(displayName)
            })
            .catch(err => {
                setError(err.message);
            });
            < Navigate to = "/login" replace state = { '/login' } />
    }
    
    const setUserName = displayName => {
        updateProfile(auth.currentUser, { displayName: displayName }).then(result => { })
    }

    const handleSignInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        signOut(auth)
            .then(()=>setUser({}));
    }
    
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                <Navigate to="/login" replace state={redirect_url} />
            }
        })
    });

    return {
        user,
        error,
        signInUsingGoogle,
        signInUsingGithub,
        handleCreateUser,
        handleSignInUser,
        logout
    }
    
}

export default useFirebase;