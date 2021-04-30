import React from 'react';
import ReactDOM from 'react-dom';

// TEST Server connection - Delete or comment out when verified
const connection = async () => {
  const test = await fetch('/connection');
  const json = await test.json();

  // eslint-disable-next-line no-alert
  if (!test.ok) alert('Could not connect to Server');

  // eslint-disable-next-line no-alert
  alert(json);
};

connection();

ReactDOM.render(
  <React.StrictMode>
    <div>The client is running</div>
  </React.StrictMode>,
  document.getElementById('root')
);
