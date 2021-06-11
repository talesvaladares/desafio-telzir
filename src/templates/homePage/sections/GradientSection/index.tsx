import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import {Banner, Gradient, Header, Text, DropDownMenu} from './styles';

export function GradientSection() {

  const [isVisibleMenu, setIsVisibleMenu] = useState(false);
  
  return (
    <Gradient>

      <DropDownMenu>
        {!isVisibleMenu && <FiMenu size={40} onClick={() => setIsVisibleMenu(!isVisibleMenu) }/> }

        {
          isVisibleMenu && (
            <div>
              <FiX size ={40} onClick={() => setIsVisibleMenu(!isVisibleMenu) }/>
              <nav onClick={() => setIsVisibleMenu(!isVisibleMenu) }>
                <a href="#vantagens" target="_self">Vantagens</a>
                <a href="#calculo" target="_self">Cálculo</a>
                <button type="button" >Contratar</button>
              </nav>
            </div>
          )
        }
      </DropDownMenu>

      <Header>
        <img src="/assets/logo.svg" alt="logo" />
        <nav>
          <a href="#vantagens" target="_self">Vantagens</a>
          <a href="#calculo" target="_self">Cálculo</a>
          <button type="button" >Contratar</button>
        </nav>
      </Header>

      <Banner>
        <Text>
          <h1>
            Pague menos,
          </h1>
          <h2>
            <strong>Fale Mais</strong>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>

          <button type="button">Saiba mais</button>

        </Text>

        <img src="assets/calling.svg" alt="mulher negra" />
      </Banner>

    </Gradient>
  );
};