import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import Navbar from "./components/Navbar/Navbar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
          <Switch>
            <Route path="/home" exact>
              <Home></Home>
            </Route>
            <Route path="/projects" exact>
              <Projects></Projects>
            </Route>
            <Route path="/skills" exact>
              <Skills></Skills>
            </Route>
            <Redirect to="/"></Redirect>
          </Switch>
        <Navbar></Navbar>
      </Router>
    </div>
  );
}

export default App;
