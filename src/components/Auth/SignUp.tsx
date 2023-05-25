import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  
  return (
    <button onClick={() => navigate('/register')}>Sign Up</button>
  );
}
