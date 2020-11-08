import React, { Component } from 'react';

// nome das colunas

export const tableHeader = [
  'name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'gravity',
  'terrain',
  'surface_water',
  'population',
  'films',
  'created',
  'edited',
  'url',
];

// componente de classe que renderiza estrutura html 
// através da função map que pega cada valor do array de nome das colunas e gera o head da table

export class TableHeader extends Component {
  render() {
    return (
      <thead className="table-head">
        <tr className="table-tr">
          {tableHeader.map((item) => <th key={item}>{item}</th>)}
        </tr>
      </thead>
    );
  }
}
