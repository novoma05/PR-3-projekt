import {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { redirect } from 'react-router-dom';

function LoginPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (loggedIn && userProfile) {
      redirect(true);
    }
  }, [loggedIn, userProfile]);

  const handleGoogleLogin = (googleUser: {
    getAuthResponse: () => { (): any; new (): any; id_token: any };
  }) => {
    // Get the Google ID token.
    const { id_token } = googleUser.getAuthResponse();

    // Build Firebase credential with the Google ID token.
    const credential = GoogleAuthProvider.credential(id_token);

    // Sign in with credential from the Google user.
    const auth = getAuth();
    signInWithCredential(auth, credential)
      .then((userCredential) => {
        // Set the logged in state to true.
        setLoggedIn(true);

        // Get user profile information.
        const { displayName, photoURL, email } = userCredential.user;
        setUserProfile({ displayName, photoURL, email });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const { email } = error;
        console.error(error);
      });
  };

  const handleGoogleLoginFailure = (error) => {
    console.error(error);
  };

  return (
    <div>
      {shouldRedirect ? (
        <redirect to="/project" />
      ) : loggedIn ? (
        <div>
          <p>You are logged in!</p>
          <p>Welcome, {userProfile.displayName}!</p>
          <img src={userProfile.photoURL} alt={userProfile.displayName} />
        </div>
      ) : (
        <GoogleLogin
          clientId="494226317056-ur1volq3it1pools291p8mub78u66a0r.apps.googleusercontent.com"
          buttonText="Log in with Google"
          onSuccess={handleGoogleLogin}
          onFailure={handleGoogleLoginFailure}
          cookiePolicy={'single_host_origin'}
        />
      )}
    </div>
  );
}

export default LoginPage;
