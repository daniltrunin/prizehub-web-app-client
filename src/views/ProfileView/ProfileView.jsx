import LoginWindow from "@/components/common/LoginWindow/LoginWindow";
import Profile from "@/components/common/Profile/Profile";

import { useState } from "react";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return <div>{isLoggedIn ? <Profile /> : <LoginWindow />}</div>;
}

export default Login;
