import React from 'react';

import Login from './pages/login';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <GlobalStyles />

      <div></div>
    </div>
  );
}

export default App;
