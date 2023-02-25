import React, { useState } from "react";
import ForgotPass from "./ForgotPass";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Account = () => {
  const [authPreview, setAuthPreview] = useState("signin");

  const handleAuthPreview = (preview) => {
    setAuthPreview(preview);
  };

  console.log(authPreview);
  return (
    <div className="my-6 lg:flex items-start justify-start container px-4">
      <ForgotPass
        authPreview={authPreview}
        handleAuthPreview={handleAuthPreview}
      />
      <SignIn authPreview={authPreview} handleAuthPreview={handleAuthPreview} />
      <SignUp authPreview={authPreview} handleAuthPreview={handleAuthPreview} />
    </div>
  );
};

export default Account;
