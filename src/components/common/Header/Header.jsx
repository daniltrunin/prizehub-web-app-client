import { InputGroup } from "@/components/ui/input-group";
import { Avatar, Input } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { Link } from "react-router-dom"

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <InputGroup
        className={styles["input-group"]}
        endElement={<LuSearch />}
        width="full"
      >
        <Input
          className={styles.input}
          placeholder="поиск"
          size="lg"
          borderRadius="8px"
          fontFamily="Inter"
          fontSize="16px"
        />
      </InputGroup>

      <Link to="/profile">
        <Avatar.Root colorPalette="blue" size="lg" cursor="pointer">
          <Avatar.Fallback />
          <Avatar.Image />
        </Avatar.Root>
      </Link>
    </div>
  );
}

export default Header;
