import { EmptyState, VStack } from "@chakra-ui/react";
import { LuFolderOpen } from "react-icons/lu";

export default function Empty() {
  return (
    <EmptyState.Root>
      <EmptyState.Content>
        <EmptyState.Indicator>
          <LuFolderOpen />
        </EmptyState.Indicator>
        <VStack textAlign="center">
          <EmptyState.Title>Нет добавленных каналов</EmptyState.Title>
          <EmptyState.Description>Нажмите кнопку выше</EmptyState.Description>
        </VStack>
      </EmptyState.Content>
    </EmptyState.Root>
  );
}
