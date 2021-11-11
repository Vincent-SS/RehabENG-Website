import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import About from './screens/About';
// import PastProject from './screens/PastProject';
import CurrentProject from './screens/CurrentProject';
import Support from './screens/Support';
import Contact from './screens/Contact'
import Navigation from './components/Navigation'
import Footer from './components/Footer';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <div>
        <Navigation/>
      </div>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/current-project">
            <CurrentProject />
          </Route>
          {/* <Route path="/past-project">
            <PastProject />
          </Route> */}
          <Route path="/supportus">
            <Support />
          </Route>
          <Route path="/">
            <Redirect to="/about" />
          </Route>
        </Switch>
      </div>
    </Router>
    <Footer />
    </ThemeProvider>
  );
}

export default App;
