import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";


const Header = () => {
    const Button = styled.button`
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    position: relative;
    background-color: ${(props) => (props.isSelected ? '#DFAF67' : '#424242')};
    color: ${(props) => (props.isSelected ? 'white' : '#DFAF67')};
    
    
  `;
  
  const Carro = styled.a`
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  position: relative;
  background-color: ${(props) => (props.isSelected ? '#DFAF67' : '#424242')};
  color: ${(props) => (props.isSelected ? 'white' : '#DFAF67')};
  
  
`;

  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };
  return (

    <div className="wrapper">
        <header className="header-mobile">
          <h1 className="logo">Xclusive</h1>
          <button className="open-menu" id="open-menu" >
            
          </button>
        </header>
        <aside >
          <button
            className="close-menu"
            id="close-menu"
          >
            
          </button>
          <header>
            <h1 className="logo">Xclusive</h1>
            <img className="logo-crear-productos" src="src/assets/img/logo-pagina (2).png" alt="" />
          </header>
          <nav>
            <ul className="menu">
              <li>
                <Button isSelected={selectedButton === 1} onClick={() => handleButtonClick(1)}
                  id="todos"
                  className="boton-menu boton-categoria active"
                >
                productos
                </Button>
              </li>
              <li>
                <Link to={"/Productos"} isSelected={selectedButton === 5} onClick={() => handleButtonClick(5)} className="boton-menu boton-categoria">
                Crear Productos 
                </Link>
              </li>
              <li>
                <Link to={"/Carrito"}><Carro isSelected={selectedButton === 6} onClick={() => handleButtonClick(6)} className="boton-menu boton-carrito">
                   Carrito{" "}
                  <span id="numerito" className="numerito">
                    0
                  </span>
                </Carro></Link>

              </li>
            </ul>
          </nav>
          <footer>
            <p className="texto-footer">© 2023 Xclusive</p>
          </footer>
        </aside>
        <Menu/>
    </div>
  );
};

export default Header;
