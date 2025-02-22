/* Форма логина */

import { useState } from "react";
import { Input, Button } from "@chakra-ui/react";
import { PasswordInput } from "@/components/ui/password-input";
import loginRequest from "../../../services/loginRequest";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      username: username,
      password: password,
    };
    console.log(loginRequest(data));

    /* Очистить строку */
    setUsername("");
    setPassword("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", rowGap: "14px" }}
    >
      <Input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Юзернейм"
        variant="subtle"
      />
      <PasswordInput
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Пароль"
        variant="subtle"
      />
      <Button width="full" type="submit">
        Подтвердить
      </Button>
    </form>
  );
}
