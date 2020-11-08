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

  const context = {
    data,
    setData,
    loading,
    setLoading,
    inputValue,
    setInputValue
  };

  return (
    loading ? <p>Loading</p> :
      <MyContext.Provider value={context}>
        {children}
      </MyContext.Provider>
  )
}

export default Provider;
