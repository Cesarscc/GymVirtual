import "./index.css";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import Login from "./Componentes/Login";
import Ranking from "./Componentes/Ranking";
import Dashboard from "./Componentes/Dashboard";
import Niveles from "./Componentes/Niveles";
export const ProtectedComponent = () => {
  return <Redirect to="http://localhost:3000/" />;
};

const Routes = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/ranking">
            <Ranking />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/niveles">
            <Niveles />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
