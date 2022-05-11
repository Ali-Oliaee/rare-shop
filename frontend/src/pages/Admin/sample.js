import React from 'react';
import MyTable from '../../components/Admin/Table';

const Sample = () => {
  return (
    <div>
  <MyTable goods={products} column={column} rowsCell={rowsCell}/>
    </div>
  );
}

export default Sample;
