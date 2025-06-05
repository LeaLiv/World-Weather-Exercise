import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CitiesList } from './components/citiesList';

function App() {
 return (
    <div className="App">
      <h1>מזג האוויר בעולם</h1>
      <CitiesList />
    </div>
  );
}

export default App;
