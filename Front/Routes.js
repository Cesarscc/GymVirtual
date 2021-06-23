import "./index.css";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import Login from "./Componentes/Login";
import Rutina from "./Componentes/Rutina";
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
          <Route path="/rutina">
            <Rutina />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
