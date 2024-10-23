import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { LOGO } from '../utils/constants';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignOut = () =>{
        signOut(auth)
        .then(() => {
          }).catch((error) => {
            navigate("/error");
          });
    }

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid,email, displayName} = user;
              dispatch(
                addUser({
                   uid: uid, 
                   email: email, 
                   displayName: displayName
                })
            );
              navigate("/browse")
            } else {
                dispatch(removeUser());
                navigate("/")
            }
          });
          //unsubscribe when component unmount.
          return () => unsubscribe();
}, [])
  return (
    <div className="absolute flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
     <img
      className="w-44"
      src= {LOGO}
      alt="logo"
    />
    <div>
    <button 
    onClick={handleSignOut}
    className=" m-4 px-4 py-2 text-white bg-red-700 text-lg rounded-lg font-bold">
        Sign Out
        </button>
    </div>
    </div>
  )
}

export default Header