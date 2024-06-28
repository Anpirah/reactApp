import React from 'react';
import { Link } from 'react-router-dom';
import RoutesComponent from './routes/Routes';

function App () {
  return(
  <div>
    <Link to="/">Home</Link>
    <RoutesComponent />
  </div>
)
};

export default App;