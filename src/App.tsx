import * as React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Button colorScheme="teal" variant="solid">
        Button
      </Button>
      <Button colorScheme="teal" variant="outline">
        Button
      </Button>
      <Button colorScheme="teal" variant="ghost">
        Button
      </Button>
      <Button colorScheme="teal" variant="link">
        Button
      </Button>
    </div>
  );
}

export default App;
