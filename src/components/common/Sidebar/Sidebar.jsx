import Logo from "../Logo/Logo";

import { Flex } from "@chakra-ui/react";
import { LuFolder, LuGift, LuLogOut } from "react-icons/lu";

import SidebarButton from "../SidebarButton/SidebarButton";

function Sidebar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "40px",
        height: "100vh",
        cursor: "pointer",
      }}
    >
      <div style={{ marginBottom: "75px" }}>
        <Logo mb="20px" />
      </div>
      <Flex direction="column" gap="20px" width="full">
        <SidebarButton icon={LuGift} text="Розыгрыши" />
        <SidebarButton icon={LuFolder} text="Каналы" />
      </Flex>
      <div style={{ marginTop: "auto" }}>
        <SidebarButton color="red" icon={LuLogOut} text="Лог аут" />
      </div>
    </div>
  );
}

export default Sidebar;
