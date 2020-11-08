import React, { useContext } from 'react';
import MyContext from '../../context/context';

const FilterName = ({ type, className, labelText }) => {
  const { setInputValue } = useContext(MyContext);
  return (
    <section className={className}>
      <label>
        {labelText}
        <input type={type} onChange={({ target }) => setInputValue(target.value)} />
      </label>
    </section>
  )
}

export default FilterName;
