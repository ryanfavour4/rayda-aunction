import React from 'react';
import './App.css';
import RoutesPage from './routes/Routes'
import { observer } from 'mobx-react-lite';

function App() {
  return (
    <div className="App">
      <RoutesPage />
    </div>
  );
}

export default observer(App);
