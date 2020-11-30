import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';
import { PostList, PostEdit, PostCreate } from './posts';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import './App.css';
import Dashboard from './dashboard';
import authProvider from './authProvider';

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
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProdiver}>
      <Resource name="posts" icon={PostIcon} list={PostList} edit={PostEdit} create={PostCreate} />
      <Resource name="users" icon={UserIcon} list={UserList} />
    </Admin>
  );
}

export default App;
