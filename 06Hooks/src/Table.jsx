import React from 'react';

function Table({ calculateTable }) {
  const tableData = calculateTable();

  return (
    <div>
      <style>{`
        .basic-table {
          list-style: none;
          padding: 0;
          margin: 10px 0;
          width: 200px;
          font-family: Arial, sans-serif;
        }
      `}</style>

      <ul className="basic-table">
        {tableData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(Table);
