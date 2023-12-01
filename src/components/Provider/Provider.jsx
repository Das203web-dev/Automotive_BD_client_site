import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../../Firebase/firebase.config';



export const ContextProvider = createContext();
// const provider = new GoogleAuthProvider()

const Provider = ({ children }) => {
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider();


    const googleSignUp = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const userCreationWithEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginWithEmailPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
    }, [])
    const context = { googleSignUp, userCreationWithEmailPassword, user, loginWithEmailPass, logOut };
    return (
        <ContextProvider.Provider value={context}>
            {children}
        </ContextProvider.Provider>
    );
};

export default Provider;