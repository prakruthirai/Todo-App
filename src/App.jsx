import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignup from './components/LoginSignup/LoginSignup';
import TodoWrapper from './components/TodoWrapper';

const App = () => {
  return (
    <div className='App'>
    <Router>
      {/* <h1>Welcome</h1> */}
      <Routes>
        <Route exact path="/" element={<LoginSignup />} />
        <Route path="/todo" element={<TodoWrapper />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;

