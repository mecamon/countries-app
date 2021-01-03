import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Flags from './Flags/Flags';
import Details from './Details/Details';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Flags} />
        <Route path="/details" component={Details} />
      </Switch>
    </Router>
  );
}

export default App;
