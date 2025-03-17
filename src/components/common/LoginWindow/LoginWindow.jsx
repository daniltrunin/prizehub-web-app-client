/* Главное окно логина */

import { Tabs } from "@chakra-ui/react";
import LoginForm from "../Identification/Login";
import RegisterForm from "../Identification/Register";

function LoginWindow() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "40px",
        width: "500px",
        height: "100vh",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <Tabs.Root width="full" defaultValue="loginwindow" variant="subtle">
        <Tabs.List width="full" justifyContent="center">
          <Tabs.Trigger value="login">логин</Tabs.Trigger>
          <Tabs.Trigger value="register">регистрация</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="login">
          <LoginForm />
        </Tabs.Content>
        <Tabs.Content value="register">
          <RegisterForm />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}

export default LoginWindow;
