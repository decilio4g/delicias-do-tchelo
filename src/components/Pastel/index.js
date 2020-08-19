import React, { useState } from "react";
import Select from "react-select";
import { navigate } from "@reach/router";

import MenuListPastel from "./MenuList";
import {
  Carne,
  Pernil,
  Palmito,
  Queijo,
  Frango,
  Pizza,
  Calabresa,
  Brocolis,
} from "./content";

import {
  Container,
  MenuList,
  Menu,
  MenuTitle,
  Header,
  SelectInput,
} from "./styles";

const options = [
  { value: "Carne", label: "Carne" },
  { value: "Pernil", label: "Pernil" },
  { value: "Palmito", label: "Palmito" },
  { value: "Queijo", label: "Queijo" },
  { value: "Frango", label: "Frango" },
  { value: "Pizza", label: "Pizza" },
  { value: "Calabresa", label: "Calabresa" },
  { value: "Brocolis", label: "Brócolis" },
];

function Pastel() {
  function getPastel(pastel) {
    switch (pastel) {
      case "Carne":
        setSelectedPastel(pastel);
        navigate("#carne");
        break;
      case "Pernil":
        setSelectedPastel(pastel);
        navigate("#pernil");
        break;
      case "Palmito":
        setSelectedPastel(pastel);
        navigate("#palmito");
        break;
      case "Queijo":
        setSelectedPastel(pastel);
        navigate("#queijo");
        break;
      case "Frango":
        setSelectedPastel(pastel);
        navigate("#frango");
        break;
      case "Pizza":
        setSelectedPastel(pastel);
        navigate("#pizza");
        break;
      case "Calabresa":
        setSelectedPastel(pastel);
        navigate("#calabresa");
        break;
      case "Brócolis":
        setSelectedPastel(pastel);
        navigate("#brocolis");
        break;
      default:
        setSelectedPastel(pastel);
        navigate("#carne");
        break;
    }
  }

  const [selectedPastel, setSelectedPastel] = useState("");

  return (
    <Container>
      <MenuList>
        <Header>
          <MenuTitle>Pastéis</MenuTitle>
          <p>Favor pedir pelo número do pastel</p>
        </Header>
        <SelectInput>
          <Select
            className="select"
            placeholder="Escolha um tipo de pastel"
            defaultValue={selectedPastel}
            onChange={(e) => getPastel(e.label)}
            options={options}
          />
        </SelectInput>

        <a href="#" id="carne" />
        <h1>Pastel de Carne</h1>
        <Menu>
          <MenuListPastel Pasteis={Carne} />
        </Menu>

        <a href="#" id="pernil" />
        <h1>Pastel de Pernil</h1>
        <Menu>
          <MenuListPastel Pasteis={Pernil} />
        </Menu>

        <a href="#" id="palmito" />
        <h1>Pastel de Palmito</h1>
        <Menu>
          <MenuListPastel Pasteis={Palmito} />
        </Menu>

        <a href="#" id="queijo" />
        <h1>Pastel de queijo</h1>
        <Menu>
          <MenuListPastel Pasteis={Queijo} />
        </Menu>

        <a href="#" id="frango" />
        <h1>Pastel de frango</h1>
        <Menu>
          <MenuListPastel Pasteis={Frango} />
        </Menu>

        <a href="#" id="pizza" />
        <h1>Pastel de pizza</h1>
        <Menu>
          <MenuListPastel Pasteis={Pizza} />
        </Menu>

        <a href="#" id="calabresa" />
        <h1>Pastel de calabresa</h1>
        <Menu>
          <MenuListPastel Pasteis={Calabresa} />
        </Menu>

        <a href="#" id="brocolis" />
        <h1>Pastel de Brócolis</h1>
        <Menu>
          <MenuListPastel Pasteis={Brocolis} />
        </Menu>
      </MenuList>
    </Container>
  );
}

export default Pastel;
