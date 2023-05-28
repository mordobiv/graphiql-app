import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { getLocalizedText } from "../../services/localization-service";
import styles from './Login.module.scss';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/");
  }, [user, loading]);

  return (
    <div className={styles.login}>
      <div className={styles.login_header}>{getLocalizedText('signIn')}</div>
      <div className={styles.login__container}>
        <div className={styles.login_fields}>
          <input
            type="text"
            className={styles.login__textBox}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={getLocalizedText('email')}
          />
          <input
            type="password"
            className={styles.login__textBox}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={getLocalizedText('password')}
          />
        </div>
        <button
          className={styles.login__btn}
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          {getLocalizedText('login')}
        </button>
      </div>
      <div className={styles.controls}>
        <div className={styles.forgot}>
          <Link to="/reset">{getLocalizedText('forgotPassword')}</Link>
        </div>
        <div className={styles.register}>
          {getLocalizedText('noAccount')} <Link to="/register">{getLocalizedText('signUp')}</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
