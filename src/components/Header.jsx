import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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
}, []);

const handleGptSearchClick =() => {
    // Toggle GPT search 
    dispatch(toggleGptSearchView());
};
const handleLanguageChange = (e) =>{
    dispatch(changeLanguage(e.target.value));
};
  return (
    <div className="absolute flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
     <img
      className="w-44"
      src= {LOGO}
      alt="logo"
    />
    <div>
   {showGptSearch && (<select 
    className=" bg-gray-800 text-white m-2 p-1"
     onChange={handleLanguageChange}>
      {SUPPORTED_LANGUAGES.map((lang) => ( 
           <option key={lang.identifier} value={lang.identifier}>
            {lang.name}
           </option>
        ))}
    </select>
   )}
    <button className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
     onClick={handleGptSearchClick}
        >
        {showGptSearch ? "Homepage" : "  GPT Search"}
    </button>
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