// import { CloseButton } from "@chakra-ui/react"; Для возвращения обратно на MainView

import getUser from "../../../services/getUser";
import { useEffect, useState } from "react";
import { Box, Collapsible, Button } from "@chakra-ui/react";

function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const data = await getUser("login");
      setUserData(data);
    };

    fetch();
  }, []);
  return userData ? (
    <Collapsible.Root
      maxW="400px"
      width="400px"
      paddingY="100px"
      display="flex"
      flexDir="column"
    >
      <Collapsible.Trigger marginBottom="24px">профиль</Collapsible.Trigger>
      <Collapsible.Content>
        <Box
          justifyContent="center"
          alignItems="center"
          borderWidth="0px"
          marginBottom="24px"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <p>
              <span style={{ fontWeight: "bold" }}>юзернейм: </span>
              {userData.username}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>заметки: </span>позже добавлю
            </p>
          </div>
        </Box>
        <Button colorPalette="red" width="full">
          лог аут
        </Button>
      </Collapsible.Content>
    </Collapsible.Root>
  ) : (
    <div style={{ marginTop: "100px" }}>загрузка...</div>
  );
}

export default Profile;
