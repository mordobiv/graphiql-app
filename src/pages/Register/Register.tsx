import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
} from "../../firebase";
import { getLocalizedText } from "../../services/localization-service";
import styles from './Register.module.scss';

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <div className={styles.register}>
      <div className={styles.register_header}>{getLocalizedText('signUp')}</div>
      <div className={styles.register__container}>
        <div className={styles.register__fields}>
          <input
            type="text"
            className={styles.register__textBox}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={getLocalizedText('fullName')}
          />
          <input
            type="text"
            className={styles.register__textBox}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={getLocalizedText('email')}
          />
          <input
            type="password"
            className={styles.register__textBox}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={getLocalizedText('password')}
          />
        </div>
        <button className={styles.register__btn} onClick={register} disabled={isPasswordCorrect(password)}>
          {getLocalizedText('signUp')}
        </button>
      </div>
      <div>
        <div>
          {getLocalizedText('alreadyHaveAccount')}
          <Link to="/">  {getLocalizedText('signIn')}</Link>
        </div>
      </div>
    </div>
  );
}

function isPasswordCorrect(password: string) {
  if (password.length < 9) return true;
  if (!password.match(/\W/)) return true;
  if (!password.match(/\d/)) return true;

  let isLetterFound = false;
  for (const char of password) {
    if (char.toUpperCase() != char.toLowerCase()) isLetterFound = false;
  }

  return isLetterFound;
}

export default Register;
