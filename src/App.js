import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Cat from './Cat';

function App() {
  return (
    <Router>
    <div className="App">
      <h1>Another version of deploy-testing with React-Router</h1>
      <Link to="/cat">Visit the cats</Link>
      <Route path="/cat" component={Cat} />
    </div>
    </Router>
  );
}

export default App;
