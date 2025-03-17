import getUser from "../../../services/getUser";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Collapsible, Button } from "@chakra-ui/react";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const username = await sessionStorage.getItem("username");
      const data = await getUser(username);
      setUser(data);
    };

    fetch();
  }, []);

  function handleNewNote() {
    const newNote = prompt("какую заметку добавить?");
    if (!newNote) return;
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function handleNoteClick(note) {
    window.confirm(`удалить заметку "${note}"?`);
  }

  function handleNavigate() {
    navigate("/");
  }

  return user ? (
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
              {user.username}
            </p>
            {notes.map((note) => (
              <p key={note} onClick={() => handleNoteClick(note)}>
                <span style={{ fontWeight: "bold" }}>заметка: </span>
                {note}
              </p>
            ))}
          </div>
        </Box>
        <Button
          onClick={handleNavigate}
          marginBottom="14px"
          colorPalette="green"
          width="full"
        >
          главная
        </Button>
        <Button
          onClick={handleNewNote}
          marginBottom="14px"
          colorPalette="blue"
          width="full"
        >
          заметка
        </Button>
        <Button marginBottom="14px" colorPalette="red" width="full">
          лог аут
        </Button>
      </Collapsible.Content>
    </Collapsible.Root>
  ) : (
    <div style={{ marginTop: "100px" }}>загрузка...</div>
  );
}

export default Profile;
