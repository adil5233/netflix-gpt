import React, { useRef, useState } from "react";
import Header from "./Header";
import Background from "./Background";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    // Only validate name if it's a Sign Up form
    const nameValue = isSignInForm ? "" : name.current.value;
    const message = checkValidData(
      nameValue,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    // Sign in / Sign up
    if (!isSignInForm) {
      // Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div className="relative">
      <Header />
      <Background />

      <div className="w-full max-w-[450px] mx-auto my-36 px-4 md:px-16 py-12 md:py-16 bg-black/75 rounded-md absolute right-0 left-0">
        <h1 className="text-3xl font-bold text-white mb-8">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <form onSubmit={(e) => e.preventDefault()} className="">
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="w-full bg-transparent text-white h-12 px-4 mb-4 outline-none text-base border-[1px] rounded-md border-gray-500"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email Address"
            className="w-full bg-transparent text-white h-12 px-4 outline-none text-base border-[1px] rounded-md border-gray-500"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full bg-transparent text-white h-12 px-4 mt-4 outline-none text-base border-[1px] rounded-md border-gray-500"
          />
          <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
          <button
            className="w-full h-12 text-center mt-4 text-white bg-red-700"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <div className="mt-16">
            <div className="text-[#b3b3b3] mb-4">
              <span>New to Netflix?</span>
              <span
                className="text-white hover:underline"
                onClick={toggleSignInForm}
              >
                Sign up now
              </span>
            </div>

            <p className="text-[#b3b3b3] text-xs">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
              <a
                href="https://www.netflix.com"
                className="text-[#0071eb] hover:underline"
              >
                {" "}
                Learn more.
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
