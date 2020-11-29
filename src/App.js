import * as React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import './App.css';

(function () {
  const oldConsoleError = console.error;
  console.error = function (...args) {
    const isOurWarning = typeof args[3] === 'string' && args[3] === 'Transition' &&
      typeof args[1] === 'string' && args[1] === 'findDOMNode' &&
      typeof args[0] === 'string' && args[0].indexOf('is deprecated in StrictMode.') >= -1;

    if (!isOurWarning) {
      oldConsoleError(...args);
    }
  };
}())

const dataProdiver = jsonServerProvider('https://jsonplaceholder.typicode.com');

function App() {
  return (
    <Admin dataProvider={dataProdiver}>
      <Resource name="users" list={ListGuesser} />
    </Admin>
  );
}

export default App;
