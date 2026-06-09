import React, { useEffect, useState } from 'react';

function App() {
  const [health, setHealth] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/health')
      .then(res => res.json())
      .then(data => setHealth(data))
      .catch(() => setHealth({ status: 'UNREACHABLE' }));
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Demo App</h1>
      <h2>Backend Status</h2>
      {health ? (
        <pre>{JSON.stringify(health, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
