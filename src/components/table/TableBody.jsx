import React from 'react';
import styled from 'styled-components';
import FilterName from '../../utilities/FilterName';

const Tbody = styled.tbody`
  font-size: smaller;
`

const Tr = styled.tr`
  :nth-child(even) {background-color: #F5F5F5;}
  padding: 10px;
  height: 50px;
`

const Td = styled.td`
  border-bottom: 1px  solid darkgray;
  padding: 0px 44px;
`

function TableBody({ data, body }) {
  let planets = data;
  planets = FilterName();
  return (
    <Tbody>
      {planets.map((planet) => (
        <Tr key={planet.name}> {
          body.map((item) => (
            <Td key={item}>
              {planet[item]}
            </Td>
          ))}
        </Tr>
      ))}
    </Tbody>
  );
}

export default TableBody;
