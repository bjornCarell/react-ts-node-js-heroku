import React from 'react';
import ReactDOM from 'react-dom';

const connection = fetch('/connection');
// eslint-disable-next-line no-console
console.log(connection);

ReactDOM.render(
  <React.StrictMode>
    <div>The client is running</div>
  </React.StrictMode>,
  document.getElementById('root')
);
