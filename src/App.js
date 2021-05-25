import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Cat from './Cat';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1>Another version of deploy-testing with React-Router</h1>
        <Link to="/cats">Visit the cats</Link>
      </header>
      <Route path="/cats" component={Cat} />
    </div>
    </Router>
  );
}

export default App;
