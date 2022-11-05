import React from 'react'
import { useAuth0 } from "../utils/react-auth0-spa";

export default function Login() {

    const {isAuthenticated, loginWithRedirect} = useAuth0();

  return (
    <>
    {isAuthenticated ? (<p>Logged</p>) : (
        <h3>Not logged</h3>
    )}
    </>
  )
}
