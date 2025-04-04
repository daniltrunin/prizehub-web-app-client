/* Форма логина */

import { useState } from "react";
import { Input, Button } from "@chakra-ui/react";
import { PasswordInput } from "@/components/ui/password-input";
import { CheckboxCard } from "@/components/ui/checkbox-card";
import formUser from "../../../services/formUser";
import loginRequest from "@/services/loginRequest";
import {
  removeSessionStorage,
  setSessionStorage,
} from "../../../services/sessionStorage";
import {
  removeLocalStorage,
  setLocalStorage,
} from "../../../services/localStorage";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [hasError, setHasError] = useState(false);

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

    if (password && username) {
      const data = await formUser(username, password);
      const result = await loginRequest(data);
      if (result.status == "200") {
        await sessionStorage.setItem("token", result.token);
        await removeLocalStorage();
        await removeSessionStorage();
        await setSessionStorage(username, password);
        await resetFormAndReload();

        if (isChecked) {
          await setLocalStorage(username, password);
          await localStorage.setItem("token", result.token);
        }
      } else if (result.status == "401" || result.status == "500") {
        alert("Ошибка при логине");
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
