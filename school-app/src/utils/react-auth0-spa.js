import React, { useEffect, useContext, useState } from "react";
import {createAuth0Client} from "@auth0/auth0-spa-js";
import propTypes from "prop-types";

const DEFAULT_REDIRECT_CALLBACK = () =>
  window.history.replaceState({}, document.title, window.location.pathname);

export const Auth0Context = React.createContext();

export const useAuth0 = () => useContext(Auth0Context);

const Auth0Provider = ({
  children,
  onRedirecrCallback = DEFAULT_REDIRECT_CALLBACK,
  ...initOptions
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [user, setUser] = useState();
  const [auth0Client, setAuth0Client] = useState();
  const [loading, setLoading] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);
  useEffect(() => {
    const initAuth0 = async () => {
      const auth0FromHook = await createAuth0Client(initOptions);
      setAuth0Client(auth0FromHook);
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get("code")) {
        /**Delete all cookies */
        try {
          const cookies = document.cookie.split(";");

          for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            let name = cookie.split("=")[0];
            document.cookie =
              name + "=; expires=expires=Thu, 01 Jan 1970 00:00:00 GMT";
          }

          // eslint-disable-next-line
          const { appState } = await auth0FromHook.handleRedirectCallback();
        } catch (error) {
          console.log(error);
        }
        onRedirecrCallback();
      }

      const isAuthenticated = await auth0FromHook.isAuthenticated();
      setIsAuthenticated(isAuthenticated);

      if (isAuthenticated) {
        let user = await auth0FromHook.getUser();
        setUser(user);
      }

      setLoading(false);
    };
    initAuth0();
    // eslint-disable-next-line
  }, []);

  const loginWithPopup = async (params = {}) => {
    setPopupOpen(true);
    try {
      await auth0Client.loginWithPopup(params);
    } catch (error) {
      console.error(error);
    } finally {
      setPopupOpen(false);
    }
    const user = await auth0Client.getUser();
    setUser(user);
    setIsAuthenticated(true);
  };

  const handleRedirectCallback = async () => {
    setLoading(true);
    await auth0Client.handleRedirectCallback();
    const user = await auth0Client.getUser();
    setLoading(false);
    setIsAuthenticated(true);
    setUser(user);
  };

  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        popupOpen,
        loginWithPopup,
        handleRedirectCallback,
        getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
        loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
        getTokenWithPopup: (...p) => auth0Client.getTokenWithPopup(...p),
        getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
        logout: (...p) => auth0Client.logout(...p),
      }}
    >
      {children}
    </Auth0Context.Provider>
  );
};

Auth0Provider.propTypes = {
  children: propTypes.object.isRequired,
  onRedirecrCallback: propTypes.func.isRequired,
};

export { Auth0Provider };
