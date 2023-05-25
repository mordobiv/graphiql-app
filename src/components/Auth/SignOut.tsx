import { logout } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { getLocalizedText } from "../../services/localization-service";

export default function SignOut() {
  const navigate = useNavigate();
  
  return (
    <button 
      onClick={() => {
        logout();
        navigate('/welcome');
      }}
    >{getLocalizedText('signOut')}</button>
  );
}
