import PokemonList from "components/_Home/PokemonList";
import pokeball from "img/pokeball.png";
import React from "react";
import { Button, Circle, Container, Search, Title, Wrapper } from "./style";

const Home = () => {
  return (
    <Container>
      <Circle />
      <Wrapper>
        <Title className="flex_cs">
          <h1>Pokedex</h1>
        </Title>
        <Search className="flex_cs">
          <input type="text" placeholder="Digite o nome do seu pokemon!" />
          <Button className="flex_cc">
            <img src={pokeball} alt="" />
          </Button>
        </Search>
        <PokemonList></PokemonList>
      </Wrapper>
    </Container>
  );
};

export default Home;
