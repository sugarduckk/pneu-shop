import React from 'react';

const TableCSV = ({ data }) => {
  const [headers, ...body] = data;
  return <table>
    <thead>
      <tr>
        {headers.map(header => <th key={header}>{header}</th>)}
      </tr>
    </thead>
    <tbody>
      {body.map((row, rowIndex) => {
        return <tr key={rowIndex}>
          {row.map(value => <td key={value}>{value}</td>)}
        </tr>;
      })}
    </tbody>
  </table>;
};

export default TableCSV;