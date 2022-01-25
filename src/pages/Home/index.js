import React from "react";
import { Container, Wrapper, Title, Search, Button } from "./style";
import pokeball from "img/pokeball.png";

const Home = () => {
  return (
    <Container>
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
      </Wrapper>
    </Container>
  );
};

export default Home;
