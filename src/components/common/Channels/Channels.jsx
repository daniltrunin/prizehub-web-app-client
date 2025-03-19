import styles from "./Channels.module.css";

import { Button, Dialog, Portal } from "@chakra-ui/react";
import { useState } from "react";

import Empty from "../Empty/Empty.jsx";

export default function Channels() {
  const [channels, setChannels] = useState([
    {
      name: "Канал",
      description: "Описание",
    },
  ]);

  function handleDeleteChannel(channelName) {
    setChannels((prevChannels) =>
      prevChannels.filter((channel) => channel.name !== channelName)
    );
  }

  return (
    <div className={styles.container}>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button variant="subtle" size="md">
            Добавить канал
          </Button>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Dialog Title</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body></Dialog.Body>
              <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </Dialog.ActionTrigger>
                <Button>Save</Button>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>

      {channels.length > 0 ? (
        <div className={styles.channels}>
          {channels.map((channel) => (
            <Dialog.Root key={channel.name}>
              <Dialog.Trigger asChild>
                <Button height="80px" variant="subtle" size="md">
                  {channel.name}
                </Button>
              </Dialog.Trigger>
              <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                  <Dialog.Content>
                    <Dialog.Header>
                      <Dialog.Title>{channel.name}</Dialog.Title>
                    </Dialog.Header>
                    <Dialog.Body>
                      <p>{channel.description}</p>
                    </Dialog.Body>
                    <Dialog.Footer>
                      <Dialog.ActionTrigger asChild>
                        <Button variant="outline">Закрыть</Button>
                      </Dialog.ActionTrigger>
                      <Button
                        onClick={() => handleDeleteChannel(channel.name)}
                        colorPalette="red"
                      >
                        Удалить
                      </Button>
                    </Dialog.Footer>
                  </Dialog.Content>
                </Dialog.Positioner>
              </Portal>
            </Dialog.Root>
          ))}
        </div>
      ) : (
        <Empty />
      )}
    </div>
  );
}
