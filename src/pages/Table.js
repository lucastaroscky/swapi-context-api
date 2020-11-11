import React, { useContext } from 'react';
import { TableHeader } from '../components/table/TableHeader';
import TableBody from '../components/table/TableBody';
import MyContext from '../context/context';
import styled from 'styled-components'

const TableContainer = styled.table`
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin-left: auto;
  margin-right: auto;
  overflow-x: scroll ;
  text-align: center;
  width: 100%;
  border-spacing: 0;
`
function Table() {
  const { data, tableContent } = useContext(MyContext);
  return (
    <TableContainer>
      <TableHeader header={tableContent} />
      <TableBody data={data} body={tableContent} />
    </TableContainer>
  )
}

export default Table;
