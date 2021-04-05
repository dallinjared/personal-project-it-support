import React from 'react';
import Landing from './Components/Landing';
import routes from './routes';
// import Register from './Components/Register';
import './stylesheets/App.css';

function App() {
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
