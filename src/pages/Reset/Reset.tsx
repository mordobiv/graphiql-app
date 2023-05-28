import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "../../firebase";
import { getLocalizedText } from "../../services/localization-service";
import styles from './Reset.module.scss';
import isEmailIncorrect from "../../helpers/email-validation";

function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/welcome");
  }, [user, loading]);

  return (
    <div className={styles.reset}>
      <div className={styles.reset__header}>{getLocalizedText('resetHeader')}</div>
      <div className={styles.reset__container}>
        <input
          type="text"
          className={styles.reset__textBox}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={getLocalizedText('email')}
        />
        <button
          className={styles.reset__btn}
          onClick={() => sendPasswordReset(email)}
          disabled={isEmailIncorrect(email)}
        >
          {getLocalizedText('resetHint')}
        </button>
      </div>
      <div className={styles.controls}>
        <div className={styles.register}>
          {getLocalizedText('noAccount')} <Link to="/register">{getLocalizedText('signUp')}</Link>
        </div>
      </div>
    </div>
  );
}
export default Reset;
