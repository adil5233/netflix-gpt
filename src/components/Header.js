import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { taggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleGptSearchClick = () => {
    dispatch(taggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // Handle error if needed
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when components unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex flex-row items-center justify-between px-4 md:px-8 py-1 md:py-4 bg-gradient-to-b from-black to-transparent w-full fixed top-0 left-0 z-30">
      <img className="w-20 md:w-40" src={LOGO} alt="Netflix Logo" />

      {user && (
        <div className="flex gap-4 items-center">
          {showGptSearch && (
            <select
              className="px-2 rounded bg-gray-900 text-white m-2"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearchClick}
            className="py-1 px-2 mt-1 md:py-2 md:px-4 text-white rounded bg-blue-700 hover:bg-blue-800 font-semibold"
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img
            src={USER_AVATAR}
            alt="usericon"
            className="w-10 h-10 md:w-12 md:h-12"
          />
          <button
            onClick={handleSignOut}
            className="bg-red-700 text-white py-1 px-2 md:px-4 md:py-2 rounded hover:bg-red-800 font-semibold"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
