// src/components/FetchData.jsx
import React, { useState } from 'react';

function FetchData() {
  const [result, setResult] = useState('');

  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:3000/');
      const data = await res.json();
      console.log(data);
      setResult(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='FetchData'>
      <h1>MERN RENDER</h1>
      <button onClick={fetchData}>USERS</button>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}

export default FetchData;
