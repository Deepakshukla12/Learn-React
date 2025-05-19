import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [pass, setPass] = useState('');

  const passRef = useRef();

  const passwordGenerator = useCallback(() => {
    let password = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()_+';

    for (let i = 0; i < length; i++) {
      password += str.charAt(Math.floor(Math.random() * str.length));
    }

    setPass(password);
  }, [length, numAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  const handleCopy = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(pass);
  }, [pass]);

  return (
    <>
  <h1 className="text-center text-3xl text-white my-6">Password Generator</h1>

  <div className="w-full max-w-xl h-auto	 mx-auto shadow-md rounded-lg px-4 py-6 text-gray-200 bg-gray-700">
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input
        type="text"
        value={pass}
        className="outline-none w-full py-1 px-3 text-black"
        placeholder="Password"
        readOnly
        ref={passRef}
      />
      <button
        className="bg-gray-800 text-white px-4 py-2 shrink-0 hover:bg-black hover:text-xl"
        onClick={handleCopy}
      >
        Copy
      </button>
    </div>

    {/* 👇 Combined range and checkboxes in one horizontal row */}
    <div className="flex flex-wrap items-center justify-between text-sm gap-x-4">
      {/* Range */}
      <div className="flex items-center gap-x-2">
        <input
          type="range"
          min={6}
          max={50}
          value={length}
          className="cursor-pointer"
          onChange={(e) => setLength(Number(e.target.value))}
        />
        <label>Length: {length}</label>
      </div>

      {/* Numbers */}
      <div className="flex items-center gap-x-1">
        <input
          type="checkbox"
          defaultChecked={numAllowed}
          id="numberInput"
          onChange={() => setNumAllowed((prev) => !prev)}
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>

      {/* Special Characters */}
      <div className="flex items-center gap-x-1">
        <input
          type="checkbox"
          defaultChecked={charAllowed}
          id="characterInput"
          onChange={() => setCharAllowed((prev) => !prev)}
        />
        <label htmlFor="characterInput">Special Chars</label>
      </div>
    </div>
  </div>
</>

  );
}

export default App;
