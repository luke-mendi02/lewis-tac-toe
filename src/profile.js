import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <h2>You are logged in as: {user.name}</h2>
        <h2>Email: {user.email}</h2>
      </div>
    )
  );
};

export default Profile;