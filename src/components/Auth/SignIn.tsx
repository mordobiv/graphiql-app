import { getLocalizedText } from "../../services/localization-service";
import { useNavigate } from "react-router-dom";
import styles from './Auth.module.scss';

export default function SignIn() {
  const navigate = useNavigate();

  return (
    <button className={styles.auth_btn} onClick={() => navigate('/login')}>{getLocalizedText('signIn')}</button>
  );
}
