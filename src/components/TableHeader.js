import React, { Component } from 'react';

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
