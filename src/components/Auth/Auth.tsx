import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import SignUp from "./SignUp";
import {useLocation} from 'react-router-dom';

export default function Auth() {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation().pathname;
  // let isLogin, isRegister, isForgotPassword, isWelcome, isGraphiQl = false;
  let isLogin = true;
  
  // switch (location) {
  //   case '/login':
  //     isLogin = true;
  //     break;
  //   case '/register':
  //     isRegister = true;
  //     break;
  //   case '/reset':
  //     isForgotPassword = true;
  //     break;
  //   case '/welcome':
  //     isWelcome = true;
  //     break;
  //   case '/':
  //     isGraphiQl = true;
  //     break;
  // }

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
