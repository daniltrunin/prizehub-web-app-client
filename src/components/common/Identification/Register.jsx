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

import {
  removeSessionStorage,
  setSessionStorage,
} from "../../../services/sessionStorage";
import {
  removeLocalStorage,
  setLocalStorage,
} from "../../../services/localStorage";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [hasError, setHasError] = useState(false);

  const passwordStrength = zxcvbn(password).score;

  /* Нажатие чекбокса */
  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  async function resetFormAndReload() {
    setUsername("");
    setPassword("");
    setIsChecked(false);
    location.reload();
  }

  /* Отправка сабмита */
  async function handleSubmit(event) {
    event.preventDefault();
    console.log("Форма отправлена");

    if (password && username) {
      const data = await formUser(username, password);
      const result = await registerRequest(data);
      await sessionStorage.setItem("token", result.token);
      await removeLocalStorage();
      await removeSessionStorage();
      await setSessionStorage(username, password);
      await resetFormAndReload();

      if (isChecked) {
        await setLocalStorage(username, password);
        await localStorage.setItem("token", result.token);
      }
    } else if (!password.length || !username.length) {
      alert("Заполните все поля");
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
        placeholder="Имя пользователя"
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
          placeholder="Пароль"
          variant="filled"
          style={{
            border: hasError ? "1px solid #E82E2E" : null,
          }}
        />
        <PasswordStrengthMeter width="full" value={passwordStrength} />
      </Stack>
      <CheckboxCard
        label="Запомнить вход"
        maxW="full"
        size="sm"
        variant="outline"
        onChange={handleChange}
        checked={isChecked}
      />
      <Button width="full" type="submit">
        Подтвердить
      </Button>
    </form>
  );
}
