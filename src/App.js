import React from 'react';
import Landing from './Components/Landing';
// import Auth from './Components/Auth';
import routes from './routes';
import './stylesheets/App.css';

function App() {
  return (
    <div className="App">
      <Landing />
      {routes}
    </div>
  );
}


export default App;
