import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/"); // Redirect to login page after sign out
      })
      .catch((error) => {
        // Handle error if needed
        navigate("/error");
      });
  };

  return (
    <div className="flex items-center justify-between px-8 py-4 bg-gradient-to-b from-black to-transparent w-full fixed top-0 left-0 z-20">
      <img
        className="w-40"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />

      {user && (
        <div className="flex gap-4">
          <img
            src="https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg"
            alt="usericon"
            className="w-12 h-12"
          />
          <button
            onClick={handleSignOut}
            className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 font-semibold"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
