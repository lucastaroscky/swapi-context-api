import React from 'react';
import styled from 'styled-components';

const darth = require('../../assets/darth.png');

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: black;
  background-image: url(${darth});
  background-position-x: center;
  background-position-y: center;
  background-repeat: no-repeat;
  height: 35vh;
`

const Section = styled.section`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: start;
  align-items: start;
`

const Label = styled.label`
  font-family: 'Roboto', san-serif;
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
  margin: 5px;
  width: ${props => props.width}
`

const Button = styled.button`
  background-color: whitesmoke;
  border-color: #1c1c1c85;
  border-radius: 3px;
  border-style: groove;
  border-width: thin;
  height: 5vh;
  margin-left: 0;
  margin: 5px;
  width: ${props => props.width}
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
  margin: 5px;
`

const Filter = ({ onChange }) => {
  return (
    <Container className="filter-container">
      <Section direction="column">
        <Label>Search:</Label>
        <Input onChange={onChange} />
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
          <Input type="number" width="2rem" min="0" placeholder="0" />
          <Button width="4rem">Filter</Button>
        </Section>
      </Section>
    </Container>
  )
}


export default Filter;

