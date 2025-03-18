import { Button } from "@chakra-ui/react";

function SidebarButton({ text, icon: Icon, onClick }) {
  return (
    <Button
      size="xl"
      variant="solid"
      rounded="lg"
      width="full"
      onClick={onClick}
    >
      {Icon && <Icon size={24} />}
      {text}
    </Button>
  );
}

export default SidebarButton;
