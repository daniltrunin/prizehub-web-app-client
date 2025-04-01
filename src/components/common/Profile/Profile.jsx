import getUser from "../../../services/getUser";
import getNotes from "../../../services/getNotes";
import addNote from "../../../services/addNote";
import deleteNote from "../../../services/deleteNote";
import { removeSessionStorage } from "../../../services/sessionStorage";
import { removeLocalStorage } from "../../../services/localStorage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Collapsible,
  Button,
  Spinner,
  Popover,
  Portal,
} from "@chakra-ui/react";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const username = await sessionStorage.getItem("username");
        const data = await getUser(username);
        if (!data) return;
        setUser(data);
      } catch (error) {
        console.error("Ошибка при получении пользователя:", error);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, []);

  useEffect(() => {
    if (!user) return;
    if (!sessionStorage.getItem("token")) {
      setUser(null);
      return;
    }
    const fetch = async () => {
      const data = {
        username: user.username,
        token: sessionStorage.getItem("token"),
      };
      const notes = await getNotes(data);
      if (notes.notes) {
        setNotes(notes.notes);
      } else {
        setUser(notes.notes);
      }
    };

    fetch();
  }, [user]);

  async function handleNewNote() {
    const newNote = prompt("Какую заметку добавить?");
    const data = {
      username: user.username,
      note: newNote,
      token: sessionStorage.getItem("token"),
    };
    if (!newNote) return;
    const res = await addNote(data);
    if (res.status == "200") {
      setNotes((prevNotes) => [...prevNotes, newNote]);
    } else {
      return;
    }
  }

  function handleDeleteNote(noteToDelete) {
    const data = {
      username: user.username,
      note: noteToDelete,
    };
    if (noteToDelete) {
      deleteNote(data);
      setNotes((prevNotes) =>
        prevNotes.filter((note) => note !== noteToDelete)
      );
    }
  }

  function handleNavigate() {
    navigate("/");
  }

  function handleLogout() {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("password");
    sessionStorage.removeItem("token");

    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("token");

    location.reload();
  }

  if (loading) {
    return (
      <div style={{ marginTop: "100px" }}>
        <Spinner size="sm" />
      </div>
    );
  }

  if (!user) {
    return (
      <div
        style={{
          marginTop: "100px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        Такого пользователя не существует или вы допустили ошибку в логине или
        пароле
        <Button
          onClick={() => {
            removeSessionStorage();
            removeLocalStorage();
            sessionStorage.removeItem("token");
            localStorage.removeItem("token");
            location.reload();
          }}
        >
          Перезагрузить страницу
        </Button>
      </div>
    );
  }

  return (
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
                <div key={note}>
                  <Popover.Root size="lg">
                    <Popover.Trigger asChild>
                      <div style={{ cursor: "pointer" }}>
                        <span style={{ fontWeight: "bold", color: "#2563eb" }}>
                          Заметка:{" "}
                        </span>
                        {note}
                      </div>
                    </Popover.Trigger>
                    <Portal>
                      <Popover.Positioner>
                        <Popover.Content>
                          <Popover.Arrow />
                          <Popover.Body
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              rowGap: "14px",
                              alignItems: "center",
                            }}
                          >
                            <Popover.Title fontWeight="medium">
                              {note}
                            </Popover.Title>
                            <Button
                              onClick={() => handleDeleteNote(note)}
                              colorPalette="red"
                              width="full"
                            >
                              Удалить
                            </Button>
                          </Popover.Body>
                        </Popover.Content>
                      </Popover.Positioner>
                    </Portal>
                  </Popover.Root>
                </div>
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
  );
}

export default Profile;
