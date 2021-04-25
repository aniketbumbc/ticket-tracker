import React, { useEffect, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import SearchBar from './componets/layout/SearchBar';
import Logs from './componets/logs/Logs';
import AddBtn from './componets/layout/AddBtn';
import AddLogModal from './componets/logs/AddLogModal';
import EditLogModal from './componets/logs/EditLogModal';
import AddTechModal from './componets/techs/AddTechModal';
function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />
      <div className='container'>
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <Logs />
      </div>
    </Fragment>
  );
}

export default App;
