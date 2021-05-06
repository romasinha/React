import './App.css';
import Blog from './Blog';
import Effect from './Effect';
import Home from './Home';
import State from './State';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './Create';
import BlogList from './BlogList';
import Navbar from './Navbar';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <h1>Hello</h1>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails/>
          </Route>
          
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
