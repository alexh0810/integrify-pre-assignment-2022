import React from 'react';
import UserDetails from './components/UserDetails/UserDetails';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Views/Home';
import UserDetailsView from './Views/UserDetailsView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:userId" element={<UserDetailsView/>} /> 
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
