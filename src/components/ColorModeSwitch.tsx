import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import React from "react";

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log(colorMode);

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode == "dark"}
        onChange={toggleColorMode}
      />
    </HStack>
  );
}

export default ColorModeSwitch;
