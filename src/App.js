
import './App.scss';
import Header from './Header';
import TinderCard from './TinderCard';
import SwipeToolbar from './SwipeToolbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <TinderCard />
          </Route>
          <Route path="/chat">
            Chat
          </Route>
          <Route path="/chat-room">
            Chat room
          </Route>
        </Switch>
      </Router>
      <SwipeToolbar />
    </div>
  );
}

export default App;
