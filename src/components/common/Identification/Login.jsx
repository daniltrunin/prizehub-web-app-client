/* Форма логина */

import { useState } from "react";
import { Input, Button } from "@chakra-ui/react";
import { PasswordInput } from "@/components/ui/password-input";
import { CheckboxCard } from "@/components/ui/checkbox-card";
import formUser from "../../../services/formUser";
import loginRequest from "@/services/loginRequest";
import setSessionStorage from "../../../services/sessionStorage";
import setLocalStorage from "../../../services/localStorage";

export default function LoginForm({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [hasError, setHasError] = useState(false);

  /* Нажатие чекбокса */
  const handleChange = (e) => {
    setIsChecked(e.target.checked);
    console.log(`Чекбокс ${e.target.checked ? "активен" : "неактивен"}`);
  };

  async function resetForm() {
    setUsername("");
    setPassword("");
    setIsChecked(false);
    console.log("reset form");
  }

  /* Отправка сабмита */
  async function handleSubmit(event) {
    event.preventDefault();

    if (password && username) {
      const data = await formUser(username, password);
      const res = await loginRequest(data);
      console.log(res);
      await setSessionStorage(username, password);

      if (isChecked) {
        await setLocalStorage(username, password);
        console.log(`Отправил ${username} и ${password} с сохранением сессии`);
      }
      await resetForm();
      setIsLoggedIn(true);
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
