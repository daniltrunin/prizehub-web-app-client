import getUser from "../../../services/getUser";
import getNotes from "../../../services/getNotes";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Collapsible, Button, Spinner } from "@chakra-ui/react";

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

  useEffect(() => {
    if (!user) return;
    const fetch = async () => {
      const notes = await getNotes(user.username);
      setNotes(notes.notes);
    };

    fetch();
  }, [user]);

  function handleNewNote() {
    const newNote = prompt("какую заметку добавить?");
    if (!newNote) return;
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function handleDeleteNote(noteToDelete) {
    const result = window.confirm(`удалить заметку "${noteToDelete}"?`);
    if (result) {
      setNotes((prevNotes) =>
        prevNotes.filter((note) => note !== noteToDelete)
      );
    } else {
      return;
    }
  }

  function handleNavigate() {
    navigate("/");
  }

  function handleLogout() {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("password");

    localStorage.removeItem("username");
    localStorage.removeItem("password");

    location.reload();
  }
  // console.log("📌 Тип данных notes:", typeof notes, Array.isArray(notes));
  return user ? (
    <Collapsible.Root
      maxW="400px"
      width="400px"
      paddingY="100px"
      display="flex"
      flexDir="column"
    >
      <Collapsible.Trigger marginBottom="24px">Профиль</Collapsible.Trigger>
      <Collapsible.Content>
        <Box
          justifyContent="center"
          alignItems="center"
          borderWidth="0px"
          marginBottom="24px"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <p>
              <span style={{ fontWeight: "bold" }}>Имя: </span>
              {user.username}
            </p>
            {Array.isArray(notes) &&
              notes.map((note) => (
                <p key={note} onClick={() => handleDeleteNote(note)}>
                  <span style={{ fontWeight: "bold" }}>Заметка: </span>
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
          Главная
        </Button>
        <Button
          onClick={handleNewNote}
          marginBottom="14px"
          colorPalette="blue"
          width="full"
        >
          Новая заметка
        </Button>
        <Button
          onClick={handleLogout}
          marginBottom="14px"
          colorPalette="red"
          width="full"
        >
          Лог аут
        </Button>
      </Collapsible.Content>
    </Collapsible.Root>
  ) : (
    <div style={{ marginTop: "100px" }}>
      <Spinner size="sm" />
    </div>
  );
}

export default Profile;
