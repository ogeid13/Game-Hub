import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { HStack, IconButton, Text, useColorMode } from "@chakra-ui/react";

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack padding="10px">
      <Text>Turn {colorMode === "dark" ? "Light Mode" : "Dark Mode"}</Text>
      <IconButton
        aria-label="theme-toggle"
        onClick={toggleColorMode}
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      />
    </HStack>
  );
}

export default ColorModeSwitch;
