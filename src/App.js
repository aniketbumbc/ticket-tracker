import React, { useEffect, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import SearchBar from './componets/layout/SearchBar';
import Logs from './componets/logs/Logs';
import AddBtn from './componets/layout/AddBtn';
import AddLogModal from './componets/logs/AddLogModal';
import EditLogModal from './componets/logs/EditLogModal';
import AddTechModal from './componets/techs/AddTechModal';
import TechListModal from './componets/techs/TechListModal';

function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
