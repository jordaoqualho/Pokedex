import PokemonList from "components/_Home/PokemonList";
import PokemonSelecionado from "components/_Home/PokemonSelecionado";
import pokeball from "img/pokeball.png";
import React, { useState } from "react";
import { Button, Container, Search, Title, Wrapper, Box } from "./style";

const Home = () => {
  const [termoDeBusca, setTermoDeBusca] = useState("");
  const [clicou, setClicou] = useState(false);
  const [pokemonSelecionado, setPokemonSelecionado] = useState({});

  const handleInput = (input) => {
    setTermoDeBusca(input.target.value);
  };

  const handleSubmit = (teste) => {
    teste.preventDefault();
    setClicou(true);
  };

  return (
    <Container>
      <Wrapper>
        <Title className="flex_cs">
          <h1>Pokedex</h1>
        </Title>
        <Box>
          <div className="holder">
            <Search className="flex_cs" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Digite o nome do seu pokemon!"
                onChange={handleInput}
              />
              <Button className="flex_cc" type="submit" onClick={handleSubmit}>
                <img src={pokeball} alt="" />
              </Button>
            </Search>
            <PokemonList
              termoDeBusca={termoDeBusca}
              clicou={clicou}
              setClicou={setClicou}
              setPokemonSelecionado={setPokemonSelecionado}
            />
          </div>
          <PokemonSelecionado
            pokemonSelecionado={pokemonSelecionado}
            setPokemonSelecionado={setPokemonSelecionado}
          />
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Home;
