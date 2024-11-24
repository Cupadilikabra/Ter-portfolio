import React, { useState, useEffect } from 'react';

function Time({ command }) {
  const [output, setOutput] = useState('');
  const [style, setStyle] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (command === 'time') {
      fetchLocalTime();
    }
  }, [command]);

  const fetchLocalTime = () => {
    setLoading(true);
    try {
      const now = new Date();
      const localTime = now.toLocaleString();
      setOutput(`Current local time: ${localTime}`);
      setStyle({
        color: 'blue',
        fontWeight: 'normal',
        
      });
    } catch (error) {
      console.error(error);
      setOutput('Failed to fetch the local time. Please try again later.');
      setStyle({
        color: 'red',
        fontWeight: 'bold',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={style}>
      {loading ? 'Loading time...' : output}
    </div>
  );
}

export default Time;
