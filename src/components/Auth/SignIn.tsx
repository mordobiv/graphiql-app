import { getLocalizedText } from "../../services/localization-service";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/login')}>{getLocalizedText('signIn')}</button>
  );
}
