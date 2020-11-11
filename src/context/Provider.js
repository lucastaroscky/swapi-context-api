import React, { useEffect, useState } from 'react';
import MyContext from './context';
import fetchSWAPI from '../services/api';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    fetchSWAPI()
      .then(
        (data) => {
          setData(data)
          setLoading(false)
        }
      )
  }, [])

   const tableContent = [
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

  const context = {
    data,
    setData,
    loading,
    setLoading,
    inputValue,
    setInputValue,
    tableContent,
  };

  return (
      <MyContext.Provider value={context}>
        {children}
      </MyContext.Provider>
  )
}

export default Provider;
