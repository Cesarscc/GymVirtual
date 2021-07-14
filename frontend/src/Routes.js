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
import Perfil from "./Componentes/Perfil";
import Registration from "./Componentes/Registration";
import Historial from "./Componentes/Historial";
import Basico from "./Componentes/Basico";
import Primer_Basico from "./Componentes/Primer_Basico";
import Bienvenido from "./Componentes/Bienvenido";

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
          <Route path="/registrarse">
            <Registration />
          </Route>
          <Route path="/ranking">
            <Ranking />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/:nameCategory/niveles">
            <Niveles />
          </Route>
          <Route path="/:nameCategory/:level">
            <Basico />
          </Route>
          <Route path="/perfil">
            <Perfil />
          </Route>
          <Route path="/historial">
            <Historial />
          </Route>
          <Route path="/:idRoutine">
            <Primer_Basico />
          </Route>
          <Route path="/">
            <Bienvenido />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
