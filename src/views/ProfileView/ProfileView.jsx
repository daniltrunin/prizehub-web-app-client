import LoginWindow from "@/components/common/LoginWindow/LoginWindow";
import Profile from "@/components/common/Profile/Profile";

function Login() {
  return (
    <div>
      {sessionStorage.getItem("username") ? <Profile /> : <LoginWindow />}
    </div>
  );
}

export default Login;
