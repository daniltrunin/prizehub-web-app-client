/* Главное окно логина */

import { Tabs } from "@chakra-ui/react";
import LoginForm from "../SignOn/Login";
import RegisterForm from "../SignOn/Register";

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
          <Tabs.Trigger value="login">Логин</Tabs.Trigger>
          <Tabs.Trigger value="register">Регистрация</Tabs.Trigger>
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
