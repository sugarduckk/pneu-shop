import React from 'react';
import Table from './Table';
import Td from './Td';

const KeyValueTable = ({ data }) => {
  return <Table>
    <tbody>
      {data.map((row, rowIndex) => {
        return <tr key={rowIndex}>
          {row.map(value => <Td key={value}>{value}</Td>)}
        </tr>;
      })}
    </tbody>
  </Table>;
};

export default KeyValueTable;