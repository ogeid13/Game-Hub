import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      gridTemplateRows={{
        base: "50px 1fr",
        lg: "50px 1fr",
      }}
      gridTemplateColumns={{
        base: "1fr",
        lg: "300px 1fr",
      }}
      h="100vh"
      gap="1"
    >
      <GridItem area={"nav"}>
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}>Aside</GridItem>
      </Show>
      <GridItem area={"main"}>Main</GridItem>
    </Grid>
  );
}

export default App;
