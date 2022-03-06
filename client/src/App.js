import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import WCHome from './js/WCHome';
import WCFeed from './js/WCFeed';
import WCSignIn from './js/WCSignIn';
import WCSignUp from './js/WCSignUp';
import WCSession from './js/WCSession';

class App extends Component {
  render() {
    return (
      <Routes>
          <Route path="/" element={<WCHome />} />
          <Route path="/login" element={<WCSignIn />} />
          <Route path="/account/feed" element={<WCFeed />} />
          <Route path="/account/create" element={<WCSignUp />} />
          <Route path="/account/session" element={<WCSession />} />
      </Routes>
    );
  }
}

export default App;
