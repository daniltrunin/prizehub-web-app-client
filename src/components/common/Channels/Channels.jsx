import styles from "./Channels.module.css";

import { Button, Card } from "@chakra-ui/react";

import { useState } from "react";

export default function Channels() {
  const [channels, setChannels] = useState([
    {
      name: "Канал 1",
      description: "Описание канала 1",
    },
    {
      name: "Канал 2",
      description: "Описание канала 2",
    },
    {
      name: "Канал 3",
      description: "Описание канала 3",
    },
    {
      name: "Канал 4",
      description: "Описание канала 4",
    },
    {
      name: "Канал 5",
      description: "Описание канала 5",
    },
    {
      name: "Канал 6",
      description: "Описание канала 6",
    },
    {
      name: "Канал 1",
      description: "Описание канала 1",
    },
    {
      name: "Канал 2",
      description: "Описание канала 2",
    },
    {
      name: "Канал 3",
      description: "Описание канала 3",
    },
    {
      name: "Канал 4",
      description: "Описание канала 4",
    },
    {
      name: "Канал 5",
      description: "Описание канала 5",
    },
    {
      name: "Канал 6",
      description: "Описание канала 6",
    },
  ]);
  return (
    <div className={styles.container}>
      {channels.map((channel) => (
        <Card.Root key={channel.name} variant="subtle" minW="300px">
          <Card.Body gap="2">
            <Card.Title mt="2">{channel.name}</Card.Title>
            <Card.Description>{channel.description}</Card.Description>
          </Card.Body>
          <Card.Footer justifyContent="flex-end">
            <Button colorPalette="red" width="full">
              Удалить
            </Button>
          </Card.Footer>
        </Card.Root>
      ))}
    </div>
  );
}
