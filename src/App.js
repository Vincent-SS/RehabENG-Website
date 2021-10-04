import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import styled from 'styled-components';
import About from './screens/About'
import Contact from './screens/Contact'
import Footer from './components/Footer';

const Nav = styled.nav`
background-color: #C7EAEC;
`
const List = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 1em;
  li {
    list-style-type: none;
    a {
      text-decoration: none;
      color: #000;
    }
  }
`;


function App() {
  return (
    <>
    <Router>
      <div>
        <Nav>
          <List>
            <li>
              <Link to="/">About Us</Link>
            </li>
            
            <li>
              <Link to='/past-project'>Past Project</Link>
            </li>
            <li>
              <Link to='/current-project'>Current Project</Link>
            </li>
            <li>
              <Link to='/supportus'>Support Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </List>
        </Nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            Hello world
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/past-project">
            past project
          </Route>
          <Route path="/current-project">
            current project
          </Route>
          <Route path="/supportus">
            support us
          </Route>
          <Route path="/">
            <Redirect to="/about" />
          </Route>
        </Switch>
      </div>
    </Router>
    <Footer />
    </>
  );
}

export default App;
