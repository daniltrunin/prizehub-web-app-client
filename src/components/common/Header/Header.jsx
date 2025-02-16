import { Flex, Avatar } from "@chakra-ui/react";

function Header() {
  return (
    <Flex direction="row" justify="flex-start">
      <Avatar.Root colorPalette="blue">
        <Avatar.Fallback />
        <Avatar.Image />
      </Avatar.Root>
      <Avatar.Root colorPalette="blue">
        <Avatar.Fallback />
        <Avatar.Image />
      </Avatar.Root>
    </Flex>
  );
}

export default Header;
