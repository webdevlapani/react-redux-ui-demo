import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store';
import UsersList from './components/UsersList/UsersList';
import SideBar from "./components/SideBar/SideBar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <div className='container-fluid'>
        <div className="row">
        <div className="col-md-6 pl-0 pr-0 pr-md-3">
          <SideBar/>
        </div>
        <div className="col-md-6">
          <UsersList/>
        </div>
      </div>
      </div>
    </Provider>
  );
}

export default App;
