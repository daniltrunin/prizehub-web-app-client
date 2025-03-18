import { Flex } from "@chakra-ui/react";
import { LuFolder, LuGift } from "react-icons/lu";

import SidebarButton from "../SidebarButton/SidebarButton";

function SidebarButtons() {
  const handleRafflesClick = () => {
    console.log("Клик по 'Розыгрыши'");
  };

  const handleChannelsClick = () => {
    console.log("Клик по 'Каналы'");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Flex direction="column" gap="20px" width="200px">
        <SidebarButton
          onClick={handleRafflesClick}
          icon={LuGift}
          text="Розыгрыши"
        />
        <SidebarButton
          onClick={handleChannelsClick}
          icon={LuFolder}
          text="Каналы"
        />
      </Flex>
    </div>
  );
}

export default SidebarButtons;
