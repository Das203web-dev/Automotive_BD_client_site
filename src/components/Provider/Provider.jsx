import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../../Firebase/firebase.config';



export const ContextProvider = createContext();
// const provider = new GoogleAuthProvider()

const Provider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();


    const googleSignUp = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
    const userCreationWithEmailPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginWithEmailPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
    }, [])
    const context = { googleSignUp, userCreationWithEmailPassword, user, loginWithEmailPass, logOut, loading };
    return (
        <ContextProvider.Provider value={context}>
            {children}
        </ContextProvider.Provider>
    );
};

export default Provider;