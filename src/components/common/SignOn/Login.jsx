/* Форма логина */

import { useState } from "react";
import { Input, Button } from "@chakra-ui/react";
import { PasswordInput } from "@/components/ui/password-input";
import { Checkbox } from "@/components/ui/checkbox";
import loginRequest from "../../../services/loginRequest";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    /* Сделать проверку на отсутствие пробелов и сделать нижний регистр, также вынести в отдельную функцию */
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
      <Checkbox variant="subtle">Запомнить вход</Checkbox>
      <Button width="full" type="submit">
        Подтвердить
      </Button>
    </form>
  );
}
