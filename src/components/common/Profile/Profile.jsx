// import { CloseButton } from "@chakra-ui/react"; Для возвращения обратно на MainView

import getUser from "../../../services/getUser";
import { useEffect, useState } from "react";

function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const data = await getUser("login");
      setUserData(data);
    };

    fetch();
  });

  // return <div>{userData ? userData.username : <div>Loading...</div>}</div>;
  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
}

export default Profile;
