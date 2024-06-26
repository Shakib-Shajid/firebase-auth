import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebase/firebase.config'

// 1. 
export const AuthContext = createContext(null)

const auth = getAuth(app);



// 3. 
const AuthProvider = ({ children }) => {

    // 5. 
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);   //by default the loading is true



    // i) who is user. It will save the user info {onAuthStateChanged}
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("Current user", currentUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    // ii) create user
    const createUser =(email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // iii) sign in (login)
    const signIn =(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    const authInfo = {
        // 6. 
        user,
        loading,
        createUser,
        signIn

    }

    return (
        // 2. 4.value
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

/**
 * 
 * 1. Since we will use it more place we declire it outside. 
 *  
 * 2. since we use context we need a provider. 
 * 
 * 3. Those use this context there children, we will use this "children" here.
 * 
 * 4. We will set a value, those will we use in context.
 * 
 * 5. make a "user" context.
 * 
 * 6. we will use this user from different places.
 * 
 * */ 