import React from 'react';

import './App.css';
import { CitiesList } from './components/citiesList';

function App() {
 return (
    <div className="App">
      <div id='top'> <h1 >תחזית מסביב לעולם</h1></div>
     
      <CitiesList />
    </div>
  );
}

export default App;
