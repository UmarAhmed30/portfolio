import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import Navbar from "./components/Navbar/Navbar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Route, Redirect, Switch } from "react-router-dom";

toast.configure();
function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
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
    </div>
  );
}

export default App;
