import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import styled from 'styled-components';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from '../../theme';
import { Link } from 'react-router-dom';

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const ColorPrimary = '#1E90FF';
const ColorSecondary = '#393939';


function Header() {

  const [cor, setCor] = useState('white');

  function mudaCor(e){
    e.preventDefault();
    setCor(cor==='#393939'?'white':'#393939');
  }

  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const [show, setShow] = useState(false)

  const toggleMenu = () => {
    setShow(!show)
  }
  
  return (
    <HeaderStyled>

      <LogoStyled>
        <Link to="/">
          <img alt="Logo Marvel" width="36px" src={'https://i.pinimg.com/originals/6b/b7/36/6bb736b16f5c541047342306fade5098.png'} />
        </Link>
      </LogoStyled>

      <MenuContentStyled >
        <MenuIconStyled
        onClick={toggleMenu}
        width="24px"
        > 
        <AiOutlineMenu onClick={mudaCor} style= {{fill: cor}}/>
        
        </MenuIconStyled>
      </MenuContentStyled>

      <MenuStyled show={show}>
        <li>
          <Link to="/noticias">Notícias</Link>
        </li>
        <li>
          <Link to="/midia">Mídia</Link>
        </li>
        <li>
          <a href="#comics">Comics</a>
        </li>
        <li>
          <a href="#games">Jogos</a>
        </li>
        <li>
          <a href="#heroes">Heróis</a>
        </li>

        <ContainerButton>
          <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <StyledApp>
              <Button onClick={()=> themeToggler()}>Dark Mode</Button>
            </StyledApp>
          </ThemeProvider>
        </ContainerButton>

      </MenuStyled>
    </HeaderStyled>
  )
}

export default Header;

const HeaderStyled = styled.header`
  width: 100%;
  background-color: ${ColorPrimary};
  z-index: 9999;
  position: fixed;
  border-bottom: 1px solid #fff;
`
const LogoStyled = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 40px;
`
const MenuContentStyled = styled.div`
  position: absolute;
  z-index: 4;
  width: 100%;
  padding: 10px;
  font-size: 18pt;
  height: 40px;
  background-color: ${ColorPrimary};
  overflow: hidden;

  display: none;

  @media (max-width: 780px){
    display: flex;
    align-items: center;
    position: fixed;
  }
`
const MenuIconStyled = styled.div`
  cursor: pointer;
  color: #FFF;
`
const MenuStyled  = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 10%;
  overflow: hidden;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
 
  li a {
    display: block;
    color: #FFF;
    text-align: center;
    padding: 16px;
    outline: none;
    text-decoration: none;
  }

  li:hover{
    cursor: pointer;
    background-color: ${ColorSecondary};
    transition: all ease .3s;
  }


  @media (max-width: 780px){
    display: ${({ show }) => show ? 'block' : 'none'};
    position: fixed;
    z-index: 4;
    background-color: ${ColorPrimary};
    top: 40px;
    overflow: hidden;
    height: 100%;
    width: 100%;
    padding: 0;

    li{
      width: 100%;
    }

    li:hover{
      cursor: pointer;
      background-color: ${ColorSecondary};

      a{
        color:#FFF;
      }
    }
  }

`
const ContainerButton = styled.div`
`

const Button = styled.span`
    color: #FFF;
    font-size: 1.5rem;
    display: block;
    text-align: center;
    padding: 16px;
    outline: none;

  &:hover{
    cursor: pointer;
    background-color: ${ColorSecondary};
  }
  
`




