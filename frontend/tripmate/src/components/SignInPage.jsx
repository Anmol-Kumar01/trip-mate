import React from 'react';

const SignInPage = () => {
  return (
    <div className="sign-in-page">
      <h1>Welcome back</h1>
      <button>Continue with Google</button>
      <button>Continue with Apple</button>
      <hr />
      <form>
        <input type="email" placeholder="Enter your email" required />
        <input type="password" placeholder="Enter your password" required />
        <label>
          <input type="checkbox" /> Remember me
        </label>
        <button type="submit">Sign in</button>
      </form>
      <p>Don't have an account? sign up</p>
    </div>
  );
};

export default SignInPage;