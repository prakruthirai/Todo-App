import React from 'react';
// import { useHistory } from 'react-router-dom';

const Logout = () => {
  // const history = useHistory();

  const handleLogout = () => {
    // Perform any logout actions here (e.g., clearing local storage, etc.)
    
    // Redirect the user to the login page
    // history.push('/login');
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
