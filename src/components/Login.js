import React, { useState } from "react";
import {
  auth,
  googleProvider,
  outlookProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google User:", result.user);
      navigate("/profile");
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  const handleOutlookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, outlookProvider);
      console.log("Outlook User:", result.user);
      navigate("/profile");
    } catch (error) {
      console.error("Outlook login error:", error);
    }
  };

  const handleEmailLogin = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log("Email User:", result.user);
      navigate("/profile");
    } catch (error) {
      console.error("Email login error:", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <button onClick={handleGoogleLogin}>Login with Google</button>
        <button onClick={handleOutlookLogin}>Login with Outlook</button>
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleEmailLogin}>Login with Email</button>
      </div>
    </div>
  );
};

export default Login;
