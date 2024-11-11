import React, {createContext, useEffect, useState} from 'react'
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebase.init'
import { GoogleAuthProvider } from 'firebase/auth/web-extension';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider(); 

function AuthProviders({children}) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

 const createUser = (email, password) =>{
  setLoading(true);
  return createUserWithEmailAndPassword(auth, email, password);
 }


 const signInUser = (email, password) =>{
  setLoading(true);
  return signInWithEmailAndPassword(auth, email, password)
 }


 const signInWithGoogle = () =>{
  return signInWithPopup(auth, googleProvider)
 }


 const signOutUser = () =>{
  return signOut(auth);
 }


 useEffect(() =>{
 const unSubscribe = onAuthStateChanged(auth, currentUser =>{
    console.log('current User', currentUser)
    setUser(currentUser)
    setLoading(false)
  })

  return () =>{
    unSubscribe()
  }
 }, [])

 const authInfo = {
  user,
  loading,
  createUser,
  signInUser,
  signOutUser,
  signInWithGoogle
 }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProviders
