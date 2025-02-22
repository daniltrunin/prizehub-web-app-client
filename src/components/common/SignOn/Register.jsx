/* Форма регистрации */

import { Input, Stack } from "@chakra-ui/react";
import {
  PasswordInput,
  PasswordStrengthMeter,
} from "@/components/ui/password-input";

export default function RegisterForm() {
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "14px" }}>
      <Input placeholder="Юзернейм" variant="subtle" />
      <Stack>
        <PasswordInput placeholder="Пароль" variant="subtle" />
        <PasswordStrengthMeter />
      </Stack>
    </div>
  );
}
