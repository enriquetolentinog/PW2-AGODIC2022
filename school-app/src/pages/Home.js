import React from 'react'
import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const Home = () => {
  const { user } = useAuth0();

  return (
    <div>
      HOME
      <h2>{user.name}</h2>
    </div>
  )
}

//export default Home;

export default withAuthenticationRequired(Home, {
  onRedirecting: () => <Loading />,
});
