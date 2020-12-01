import React from 'react';
import Table from './Table';
import Td from './Td';

const KeyValueTable = ({ data }) => {
  if (!data) return <div>No data</div>;
  return <Table>
    <tbody>
      {data.map((row, rowIndex) => {
        return <tr key={rowIndex}>
          {row.map((value, index) => <Td key={index}>{value}</Td>)}
        </tr>;
      })}
    </tbody>
  </Table>;
};

export default KeyValueTable;