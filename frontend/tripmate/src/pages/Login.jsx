import React from "react";
import OAuthButtons from "../components/OAuthButtons"; 
import LoginForm from "../components/LoginForm"; 


const Login = () => {
  return (
    <div className="p-6">
      <OAuthButtons />
      <LoginForm />
    </div>
  );
};

export default Login;
