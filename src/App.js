import React from 'react';
import UserDetails from './components/UserDetails/UserDetails';
import UserList from './components/UserList/UserList'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/:userId" element={<UserDetails />} /> 
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
