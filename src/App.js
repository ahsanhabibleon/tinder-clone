
import './App.scss';
import { useState } from 'react'
import Header from './Header';
import TinderCard from './TinderCard';
import SwipeToolbar from './SwipeToolbar';
import Chats from './Chats'
import ChatScreen from './ChatScreen'
import UserProfile from './UserProfile'
import Login from './Login'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';

function App() {
  const [showBackButton, setShowBackButton] = useState(false)
  const handleBackButton = (payload) => {
    setShowBackButton(payload)
  }

  return (
    <div className="App">
      <Router>
        <Header handleBackButton={showBackButton} />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" render={(props) => (
            <>
              <TinderCard {...props} />
              <SwipeToolbar {...props} />
            </>
          )} />

          <Route exact path="/profile" component={UserProfile} />

          <Route exact path="/chats" render={props => (
            <Chats {...props} showBackButton={handleBackButton} />
          )} />

          <Route path="/chats/:id" render={props => (
            <ChatScreen {...props} showBackButton={handleBackButton} />
          )} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
