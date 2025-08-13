import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/history">History</Link> | <Link to="/manage">Manage</Link>
      </nav>
      <hr />
      <Outlet />
    </>
  );
}

export default App
