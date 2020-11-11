import React, { Component } from 'react';
import styled from 'styled-components';

const Thead = styled.thead`
  font-size: large;
  background-color: #1C1C1C;
  color: white;
`

const Th = styled.th` 
  padding: 5px; 
  margin: 10px;
  height: 60px;
  border-bottom: 1px solid darkgray;
  padding: 0px 44px; 
`

export class TableHeader extends Component {
  render() {
    return (
      <Thead>
        {this.props.header.map((item) => <Th key={item}>{item}</Th>)}
      </Thead>
    );
  }
}
