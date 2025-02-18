import { InputGroup } from "@/components/ui/input-group";
import { Avatar, Input } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <InputGroup endElement={<LuSearch />} width="full">
        <Input
          className={styles.input}
          placeholder="Поиск"
          size="lg"
          borderRadius="8px"
          fontFamily="Inter"
          fontSize="16px"
        />
      </InputGroup>

      <Avatar.Root colorPalette="blue" size="lg" cursor="pointer">
        <Avatar.Fallback />
        <Avatar.Image />
      </Avatar.Root>
    </div>
  );
}

export default Header;
