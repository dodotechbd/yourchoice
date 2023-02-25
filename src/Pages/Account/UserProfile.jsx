import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const UserProfile = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="flex flex-col h-[40vh] justify-center items-center gap-3">
      <h3 className="text-xl font-medium">{user?.displayName}</h3>
      <button
        onClick={() => signOut(auth)}
        className="text-lg bg-blue-200 uppercase px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
