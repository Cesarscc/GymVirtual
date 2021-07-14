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
import Error from "./Componentes/Error";
import Home from "./Componentes/Home";
import Bienvenido from "./Componentes/Bienvenido";

const Routes = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/error/404" exact component={Error}>
          </Route>

          <Route path="/home" exact component={Home}>
          </Route>

          <Route path="/login" exact component={Login}>
          </Route>
          
          <Route path="/registrarse" exact component={Registration}>
          </Route>
          
          <Route path="/ranking" exact component={Ranking}>
          </Route>
          
          <Route path="/dashboard" exact component={Dashboard}>
          </Route>

          <Route path="/perfil">
            <Perfil />
          </Route>
          
          <Route path="/historial">
            <Historial />
          </Route>
          
          <Route path="/:nameCategory/niveles" exact component={Niveles}>
          </Route>
          
          <Route path="/:nameCategory/:level/Seleccion" exact component={Basico}>
          </Route>
          
          <Route path="/rutina/:idRoutine" exact component={Primer_Basico}>
          </Route>

          <Route path="/" exact component={() => <Redirect to="/home" />}>
          </Route>

          <Route component={() => <Redirect to="/error/404" />}>
          </Route>

        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
