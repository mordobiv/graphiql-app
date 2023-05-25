import { logout } from "../../firebase";
import { useNavigate } from "react-router-dom";

export default function SignOut() {
  const navigate = useNavigate();
  return (
    <button 
      onClick={() => {
        logout();
        navigate('/welcome');
      }}
    >Sign out</button>
  );
}
