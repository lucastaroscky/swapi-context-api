import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './pages/Table';

function App() {
  return (
    <section>
      <Provider>
        <Table />
      </Provider>
    </section>
  );
}

export default App;
