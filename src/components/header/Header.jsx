import React from 'react';
import styled from 'styled-components';

const logo = require('../../assets/star-wars.png');

const HeaderContainer = styled.header`
  align-items: center;
  background-color: #1C1C1C;
  display: flex;
  flex-direction: row;
  height: 10vh;
  justify-content: start;
`

const Subtitle = styled.span `
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: xx-large;
`

const Img = styled.img `
  heigh: 50px;
  padding: 0 10px;
  width: auto;
`

function Header() {
  return (
    <HeaderContainer>
      <Img src={logo} alt="star wars logo" width="auto" height="40"/>
      <Subtitle>| API </Subtitle>
    </HeaderContainer>
  )
}

export default Header;
