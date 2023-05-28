import { useNavigate } from "react-router-dom";
import { getLocalizedText } from "../../services/localization-service";

export default function SignUp() {
  const navigate = useNavigate();
  
  return (
    <button onClick={() => navigate('/register')}>{getLocalizedText('signUp')}</button>
  );
}
