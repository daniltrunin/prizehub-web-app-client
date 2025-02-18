import { Button } from "@chakra-ui/react";

function SidebarButton({ text, icon: Icon, color }) {
  return (
    <Button
      size="xl"
      variant="solid"
      rounded="lg"
      width="full"
      colorPalette={color}
    >
      {Icon && <Icon size={24} />}
      {text}
    </Button>
  );
}

export default SidebarButton;
