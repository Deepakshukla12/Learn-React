import { useState } from 'react';

let idx = 0;

function ItemArray() {
  const [name, setName] = useState('');
  const [value, setValue] = useState([]);

  return (
    <>
      <h1>Item List</h1>
      <input
        type="text"
        placeholder="Enter the item here"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          setValue([
            ...value,
            {
              id: idx++,
              name: name
            }
          ]);
          setName(''); // Optional: clears the input
        }}
      >
        Add Item
      </button>

      <br /><br />

      <ul>
        {value.map((item) => (
          <li key={item.id}>
            {item.name}
            <button
              onClick={() => {
                setValue(value.filter((val) => val.id !== item.id));
              }}
              style={{ marginLeft: '10px' }}
            >
              Remove Item
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ItemArray;
