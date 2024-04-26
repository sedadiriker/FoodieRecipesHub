import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../auth/firebase";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { json, useNavigate, useParams } from "react-router-dom";
import { toastSuccessNotify,toastErrorNotify, toastWarnNotify } from "../helper/ToastNotify";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("curentUser")) || false
  );
  const navigate = useNavigate();

  
  //!register
  const createUser = async (email, password, displayName) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      //! kullanıcı profilini güncellemek için kullanılan firebase metodu
        await updateProfile(auth.currentUser, {
          displayName,
        })
      navigate("/")
      toastSuccessNotify("Registered successfully");
    } catch (err) {
      toastErrorNotify(err.message);

    }
  };
//!sign in
  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential)
      navigate(`/recipes`);
      toastSuccessNotify("Registered successfully");
      // console.log(userCredential);
    } catch (error) {
      toastErrorNotify(error.message);

    }
  };
//! logout
  const logOut = () => {
    signOut(auth)
      .then(() => {
        toastSuccessNotify("Logged out successfully");
        navigate("/")
      })
      .catch((error) => {
        // An error happened.
      });
  };

//! google ile giriş
const googleProvider = () => {
  
  const provider = new GoogleAuthProvider()

  signInWithPopup(auth,provider)
  .then((result) => {
    navigate("/recipes")
    toastSuccessNotify("Logged in successfully")
  })
  .catch((error) => {
    toastErrorNotify(error.message)
  })
}
//! auto state control
const userServer = ()=> {
  onAuthStateChanged(auth, (user) => {
    if(user){
      const{email,displayName,photoURL} = user
      setCurrentUser({email,displayName,photoURL})
      localStorage.setItem(
        "currentUser", JSON.stringify({email,displayName,photoURL})
      )
    }else{
      setCurrentUser(false)
      localStorage.removeItem("currentUser")
    }
  })
}
useEffect(() => {
  userServer()
}, []);
//!forgotpasword
const forgotPassword = (email) => {
  sendPasswordResetEmail(auth,email)
  .then(()=>{
    toastWarnNotify("Please check your mail box")
  })
  .catch((error)=> {
    toastErrorNotify(error.message)
  })
}

  const values = { currentUser, createUser, signIn, logOut, googleProvider,forgotPassword };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
export default AuthProvider;
