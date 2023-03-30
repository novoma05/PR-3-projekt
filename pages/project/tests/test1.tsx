import React, { useState } from 'react';
import { useGoogleLogin } from 'react-google-login';

const GoogleLoginButton = () => {
  const [user, setUser] = useState(null);

  const onSuccess = (response) => {
    setUser(response.profileObj);
  };

  const onFailure = (response) => {
    console.log('Login failed:', response);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId:
      '494226317056-ur1volq3it1pools291p8mub78u66a0r.apps.googleusercontent.com',
    isSignedIn: true,
    accessType: 'offline',
  });

  if (user) {
    return <p>Logged in as {user.name}</p>;
  }

  return <button onClick={signIn}>Log in with Google</button>;
};
