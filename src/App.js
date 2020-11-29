import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';
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
      <Resource name="users" list={UserList} />
    </Admin>
  );
}

export default App;
