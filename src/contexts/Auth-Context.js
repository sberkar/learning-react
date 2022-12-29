import { useContext, createContext, useEffect, useState } from "react";
import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../firebase_config";
import { redirect } from "react-router-dom";

const AuthContext = createContext({});

export function useAuth () {
    return useContext(AuthContext)
}

export function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);

    function signIn() {
        signInWithPopup(auth, provider).then(() => {
            window.location.href = "/"
            console.log("sign in successful");
        }).catch(e => {
            console.log(e.msg)
        })
    }
    const logout = () => {
        auth.signOut().then(() => {
            console.log("logout successful")
            window.location.href = "/user/login"
        })
    }

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setAuthLoading(false)
            const unsubscribe = setCurrentUser(user)
            return unsubscribe;
        })
    }, []);
    const value = {
        useAuth,
        signIn,
        currentUser,
        logout
    }
    return <AuthContext.Provider value={value}>
        {!authLoading && children}
    </AuthContext.Provider>
}