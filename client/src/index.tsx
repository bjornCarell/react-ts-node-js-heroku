import React from 'react';
import ReactDOM from 'react-dom';

// TEST Server connection - Delete or comment out when verified
const connection = async ():Promise<any> => {
  const test = await fetch('/connection');
  const json = await test.json();

  // eslint-disable-next-line no-alert
  if (!test.ok) alert('Could not connect to Server');

  // eslint-disable-next-line no-alert
  alert(json);
};

connection();

type ClientText = {
  text: string
}

const ClientMsg = ({ text }: ClientText): JSX.Element => <div>{text}</div>;

ReactDOM.render(
  <React.StrictMode>
    <ClientMsg text="Client is running" />
  </React.StrictMode>,
  document.getElementById('root'),
);
