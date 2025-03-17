import { Heading, Image, Flex } from "@chakra-ui/react";

import logo from "../../../assets/icons/logo.png";

function Logo() {
  return (
    <Flex direction="row" gap="8px" align="center">
      <Image src={logo} height="20px" width="20px"></Image>
      <Heading size="2xl">прайзхаб</Heading>
    </Flex>
  );
}

export default Logo;
