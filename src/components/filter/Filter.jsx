import React from 'react';
import styled from 'styled-components';

const space = require('../../assets/space.jpg');

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-image: url(${space});
  background-position-x: center;
  background-position-y: center;
  background-repeat: no-repeat;
  height: 50vh;
`

const Section = styled.section`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: start;
  align-items: start;
`

const Label = styled.label`
  font-family: 'Roboto', san-serif;
  ${'' /* color: #1c1c1ce0; */}
  color: whitesmoke;
  padding: 2px;
`

const Input = styled.input`
  font-family: 'Roboto', san-serif;
  border-color: #1c1c1c85;
  border-radius: 3px;
  border-style: groove;
  border-width: thin;
  margin-left: 0;
  height: 4.5vh;
`

const Select = styled.select`
  font-family: 'Roboto', san-serif;
  border-color: #1c1c1c85;
  border-radius: 3px;
  border-style: groove;
  border-width: thin;
  margin-left: 0;
  padding: 5px;
  width: 25vh;
  height: 5vh;
`

const Filter = () => {
  return (
    <Container>
      <Section direction="column">
        <Label>Search:</Label>
        <Input />
      </Section>
      <Section direction="column">
        <Label>Selecione:</Label>
        <Section direction="row">
          <Select>
            <option value="rotation_period">rotation period</option>
            <option value="orbital_period">orbital period</option>
            <option value="diameter">diameter</option>
            <option value="surface_water">surface water</option>
          </Select>
          <Select>
            <option value="menor que"> menor que</option>
            <option value="igual a">igual a</option>
            <option value="maior que">maior que</option>
          </Select>
          <Input type="number" min="0" width="10" />
        </Section>
      </Section>
    </Container>
  )
}


export default Filter;

