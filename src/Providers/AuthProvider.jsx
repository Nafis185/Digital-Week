import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();

const auth = getAuth(app);
// const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      const userEmail = currentuser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentuser);
      // console.log("current user", currentuser);
      setLoading(false);
      // if user exists then issue a token
      if (currentuser) {
        axios
          .post("https://digital-week-server-updated.vercel.app/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            // console.log("token response ", res.data);
          });
      } else {
        axios
          .post("https://digital-week-server-updated.vercel.app/logout", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("token response ", res.data);
          });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
