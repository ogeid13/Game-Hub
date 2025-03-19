import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Catalog from "./components/Catalog";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const swapGenre = (genre: Genre) => {
    setSelectedGenre(genre);
  };

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
        lg: "200px 1fr",
      }}
      h="100vh"
      gap="1"
    >
      <GridItem area={"nav"}>
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GenreList
          selectedGenre={selectedGenre}
          onSelectGenre={(genre) => {
            swapGenre(genre);
          }}
        />
      </Show>
      <GridItem area={"main"}>
        <PlatformSelector />
        <Catalog selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
