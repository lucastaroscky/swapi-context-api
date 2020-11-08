import React, { Fragment, useContext } from 'react';
import { TableHeader } from '../components/TableHeader';
import TableBody from '../components/TableBody';
import MyContext from '../context/context';
import '../components/table.css'

function Table() {
  const { data } = useContext(MyContext);
  return (
    <Fragment>
      <TableHeader />
      <TableBody data={data} />
    </Fragment>
  )
}

export default Table;


