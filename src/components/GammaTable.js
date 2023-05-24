import React from 'react';

const GammaTable = ({ statistics }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Measure</th>
          {Object.keys(statistics).map((alcoholClass) => (
            <th key={alcoholClass}>Class {alcoholClass}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Gamma Mean</td>
          {Object.keys(statistics).map((alcoholClass) => (
            <td key={alcoholClass}>{statistics[alcoholClass].mean.toFixed(3)}</td>
          ))}
        </tr>
        <tr>
          <td>Gamma Median</td>
          {Object.keys(statistics).map((alcoholClass) => (
            <td key={alcoholClass}>{statistics[alcoholClass].median.toFixed(3)}</td>
          ))}
        </tr>
        <tr>
          <td>Gamma Mode</td>
          {Object.keys(statistics).map((alcoholClass) => (
            <td key={alcoholClass}>{statistics[alcoholClass].mode.toFixed(3)}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default GammaTable;
