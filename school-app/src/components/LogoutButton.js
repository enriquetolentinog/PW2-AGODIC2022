import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return <button class="btn btn-secondary btn-small" onClick={logoutWithRedirect}>Logout</button>;
};

export default LogoutButton;
