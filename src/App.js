
import './App.css';
import { BrowserRouter as  Router, Switch, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Auth}/>
      </Switch>
    </Router>
  );
}

export default App;
