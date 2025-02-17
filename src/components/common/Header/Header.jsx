import { InputGroup } from "@/components/ui/input-group";
import { Flex, Avatar, Input } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

function Header() {
  return (
    <Flex direction="row" gap="120px" padding="22px 64px">
      <InputGroup endElement={<LuSearch />} width="full">
        <Input
          placeholder="Search"
          size="lg"
          borderRadius="8px"
          fontFamily="Inter"
          fontSize="16px"
        />
      </InputGroup>

      <Avatar.Root colorPalette="blue" size="lg" cursor="pointer">
        <Avatar.Fallback />
        <Avatar.Image />
      </Avatar.Root>
    </Flex>
  );
}

export default Header;
