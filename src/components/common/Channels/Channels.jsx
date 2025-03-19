import styles from "./Channels.module.css";

import { Button, Dialog, Portal } from "@chakra-ui/react";

import { useState } from "react";

export default function Channels() {
  const [channels, setChannels] = useState([
    {
      name: "BetClub",
      description: `BetClub es un club para aquellos que no solo quieren hacer apuestas, sino también ganar.

✅ DM @leo_betclub_bot

📲 Para amigos: https://t.me/+LWwRBKxHgVI3ZGIy`,
    },
    {
      name: "Клатч! — новости CS2",
      description: `💰 Крутые розыгрыши и новости киберспорта. Тебе точно понравится!

Наши каналы - https://t.me/cybermediatg

🤝 Реклама/сотрудничество - @clutchnews_admin`,
    },
    {
      name: "Kick Off TV",
      description: `Kick Off TV – твой главный источник футбольных новостей и трансляций ⚽️. Прямые эфиры 🎥, аналитика 📊 и интервью 🎤 с ведущими 
игроками и тренерами. От локальных матчей до мировых турниров 🌍

Для друзей https://t.me/+g-CTlAaFf7wzZTU6`,
    },
  ]);

  function handleDeleteChannel(channelName) {
    setChannels((prevChannels) =>
      prevChannels.filter((channel) => channel.name !== channelName)
    );
    alert(`${channelName} был удалён`);
  }

  return (
    <div className={styles.container}>
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
  );
}
