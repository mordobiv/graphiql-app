import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import SignUp from "./SignUp";
import {useLocation} from 'react-router-dom';

export default function Auth() {
  const [user] = useAuthState(auth);
  const location = useLocation().pathname;

  return (
    <>
      { location === '/login' && <SignUp /> }
      { location === '/register' && <SignIn /> }
      { location === '/reset' &&
        <>
          <SignIn />
          <SignUp /> 
        </>
      }
      { location === '/' && <SignOut />}
      { 
        (location === '/welcome' && user && <SignOut />) || 
        (location === '/welcome' && !user && 
          <>
            <SignIn />
            <SignUp /> 
          </>
        )
      }
    </>
  );
}
