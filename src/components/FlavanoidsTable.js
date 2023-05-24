import React from 'react';

const FlavanoidsTable = ({ statistics }) => {
  console.log('statistics',statistics)
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
          <td>Flavanoids Mean</td>
          {Object.keys(statistics).map((alcoholClass) => (
            <td key={alcoholClass}>{statistics[alcoholClass].mean.toFixed(3)}</td>
          ))}
        </tr>
        <tr>
          <td>Flavanoids Median</td>
          {Object.keys(statistics).map((alcoholClass) => (
            <td key={alcoholClass}>{statistics[alcoholClass].median.toFixed(3)}</td>
          ))}
        </tr>
        <tr>
          <td>Flavanoids Mode</td>
          {Object.keys(statistics).map((alcoholClass) => (
            <td key={alcoholClass}>{statistics[alcoholClass].mode.toFixed(3)}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default FlavanoidsTable;
