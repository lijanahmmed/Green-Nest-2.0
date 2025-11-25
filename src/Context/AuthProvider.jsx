"use client";

import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/Firebase/firebase.config";
import { AuthContext } from "./AuthContext";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUserWithEmailAndPasswordFunc = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInWithEmailAndPasswordFunc = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logInWithGoogleFunc = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const updateProfileFunc = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const emailVerificationFunc = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const logOutFunc = () => {
    return signOut(auth);
  };

  const forgetPasswordFunc = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    createUserWithEmailAndPasswordFunc,
    logInWithEmailAndPasswordFunc,
    logInWithGoogleFunc,
    updateProfileFunc,
    emailVerificationFunc,
    logOutFunc,
    forgetPasswordFunc,
    loading,
    setLoading,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
