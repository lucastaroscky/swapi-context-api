import React, { Fragment, useContext } from 'react';
import styled from 'styled-components';
import Filter from './components/filter/Filter';
import Header from './components/header/Header';
import MyContext from './context/context';
import Table from './pages/Table';

const LoadingContainer = styled.section`
  animation: loading 1s infinite linear;
  background-color: rgba(128, 128, 128, 0.165);
  border-left: 3px solid gray;
  border-radius: 50vh;
  border-top: 3px solid gray;
  height: 70px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25%;
  transition-timing-function: ease;
  width: 70px;
  @keyframes loading {
  100% {
    transform: rotate(360deg);
    }
  }
`

function App() {
  const { loading, setInputValue } = useContext(MyContext);
  return (
    loading ? <LoadingContainer /> :
      <Fragment>
        <Header />
        <Filter onChange={({ target }) => setInputValue(target.value)} />
        <Table />
      </Fragment>
  );
}

export default App;
