/* Форма регистрации */

import { Input, Stack, Button } from "@chakra-ui/react";
import {
  PasswordInput,
  PasswordStrengthMeter,
} from "@/components/ui/password-input";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import registerRequest from "../../../services/registerRequest";
import zxcvbn from "zxcvbn";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const passwordStrength = zxcvbn(password).score;

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      username: username,
      password: password,
    };
    console.log(registerRequest(data));

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
      <Stack>
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
          variant="subtle"
        />
        <PasswordStrengthMeter width="full" value={passwordStrength} />
      </Stack>
      <Checkbox variant="subtle">Запомнить вход</Checkbox>
      <Button width="full" type="submit">
        Подтвердить
      </Button>
    </form>
  );
}
