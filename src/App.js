import React, { useEffect, useState } from 'react';
import './App.css';
import wineData from './data/WineData';
import FlavanoidsTable from './components/FlavanoidsTable';
import GammaTable from './components/GammaTable';
import { calculateClassStatistics, calculateGamma } from './utils';

function App() {
  console.log(wineData)

  const flavanoidsStatistics = calculateClassStatistics(wineData, 'Flavanoids');
  const gammaStatistics = calculateGamma(wineData);
  return (
    <div>
      <h2>Flavanoids Statistics</h2>
      <FlavanoidsTable statistics={flavanoidsStatistics} />

      <h2>Gamma Statistics</h2>
      <GammaTable statistics={gammaStatistics} />
    </div>
  );
}

export default App;
