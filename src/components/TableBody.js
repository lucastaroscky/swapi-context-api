import React, { Component } from 'react';
import { tableHeader } from '../components/TableHeader';

class TableBody extends Component {
  render() {
    const { data } = this.props;
    return (
      <tbody className="table-body">
        {data.map((planet) => (
          <tr key={planet.name}>
            {
              tableHeader.map((item) => (
                <td key={item}>
                  {planet[item]}
                </td>
              ))
            }
          </tr>
        ))}
      </tbody>
    )
  }
}

export default TableBody;
