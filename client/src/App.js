import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import WCHome from './js/WCHome';
import WCSignIn from './js/WCSignIn';
import WCSignUp from './js/WCSignUp';

class App extends Component {
  render() {
    return (
      <Routes>
          <Route path="/" element={<WCHome/>} />
          <Route path="/login" element={<WCSignIn/>} />
          <Route path="/account/create" element={<WCSignUp/>} />
      </Routes>
    );
  }
}

export default App;
