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
import zxcvbn from "zxcvbn";

import setSessionStorage from "../../../services/sessionStorage";
import setLocalStorage from "../../../services/localStorage";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [hasError, setHasError] = useState(false);

  const passwordStrength = zxcvbn(password).score;

  /* Нажатие чекбокса */
  const handleChange = (e) => {
    setIsChecked(e.target.checked); // Теперь состояние обновляется
    console.log(`Чекбокс ${e.target.checked ? "активен" : "неактивен"}`);
  };

  async function resetFormAndReload() {
    setUsername("");
    setPassword("");
    setIsChecked(false);
    console.log("reset form");

    location.reload();
  }

  /* Отправка сабмита */
  async function handleSubmit(event) {
    event.preventDefault();

    if (password && username) {
      const data = await formUser(username, password);
      const res = await registerRequest(data);
      console.log(res);
      await setSessionStorage(username, password);

      if (isChecked) {
        await setLocalStorage(username, password);
        console.log(`Отправил ${username} и ${password} с сохранением сессии`);
      }
      await resetFormAndReload();
    } else if (!password.length || !username.length) {
      alert("заполните все поля");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", rowGap: "14px" }}
    >
      <Input
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
          setHasError(e.target.value.trim().length === 0);
        }}
        placeholder="юзернейм"
        variant="filled"
        style={{
          border: hasError ? "1px solid #E82E2E" : null,
        }}
      />
      <Stack>
        <PasswordInput
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setHasError(e.target.value.trim().length === 0);
          }}
          placeholder="пароль"
          variant="filled"
          style={{
            border: hasError ? "1px solid #E82E2E" : null,
          }}
        />
        <PasswordStrengthMeter width="full" value={passwordStrength} />
      </Stack>
      <CheckboxCard
        label="запомнить вход"
        maxW="full"
        size="sm"
        variant="outline"
        onChange={handleChange}
        checked={isChecked}
      />
      <Button width="full" type="submit">
        подтвердить
      </Button>
    </form>
  );
}
