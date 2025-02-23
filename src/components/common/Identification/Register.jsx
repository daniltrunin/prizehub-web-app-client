/* Форма регистрации */

import { Input, Stack, Button } from "@chakra-ui/react";
import {
  PasswordInput,
  PasswordStrengthMeter,
} from "@/components/ui/password-input";
import { CheckboxCard } from "@/components/ui/checkbox-card";
import { useState } from "react";
import formUser from "../../../services/formUser";
import registerRequest from "../../../services/registerRequest";
import setSessionStorage from "../../../services/sessionStorage";
import zxcvbn from "zxcvbn";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const passwordStrength = zxcvbn(password).score;

  async function handleSubmit(event) {
    event.preventDefault();

    const data = await formUser(username, password);
    const res = await registerRequest(data);
    console.log(res);
    setSessionStorage(username, password);

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
      <CheckboxCard
        label="Запомнить вход"
        maxW="full"
        size="sm"
        variant="outline"
      />
      <Button width="full" type="submit">
        Подтвердить
      </Button>
    </form>
  );
}
