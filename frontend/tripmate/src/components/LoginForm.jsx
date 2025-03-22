import React from "react";

const LoginForm = () => {
  return (
    <form className="p-6">
      <input type="email" placeholder="Email" className="border p-2 w-full mb-4" />
      <input type="password" placeholder="Password" className="border p-2 w-full mb-4" />
      <button className="bg-black text-white px-4 py-2 w-full">Sign In</button>
    </form>
  );
};

export default LoginForm;
