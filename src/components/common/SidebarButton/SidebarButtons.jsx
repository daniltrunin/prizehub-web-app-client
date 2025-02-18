import { Flex } from "@chakra-ui/react";
import { LuFolder, LuGift, LuLogOut } from "react-icons/lu";

import SidebarButton from "../SidebarButton/SidebarButton";

function SidebarButtons() {
  function onClick(event) {
    console.log(event.currentTarget.textContent);
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Flex direction="column" gap="20px" width="200px">
        <SidebarButton onClick={onClick} icon={LuGift} text="Розыгрыши" />
        <SidebarButton onClick={onClick} icon={LuFolder} text="Каналы" />
      </Flex>
      <div style={{ marginTop: "auto" }}>
        <SidebarButton
          onClick={onClick}
          data-type="logout"
          color="red"
          icon={LuLogOut}
          text="Лог аут"
        />
      </div>
    </div>
  );
}

export default SidebarButtons;
