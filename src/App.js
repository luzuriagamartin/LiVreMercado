import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./componentes/Login";
import Registro from "./componentes/Registro";
import Home from "./componentes/Home";
import Detalle from "./componentes/Detalle";
import Faq from "./componentes/Faq";
import CrudFirebase from "./componentes/CrudFirebase";
import NavBar from "./componentes/NavBar";

function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} /> 
          <Route path="/login" exact component={Login} />
          <Route path="/registro" exact component={Registro} />
          <Route path="/detalle/:id" exact component={Detalle} />
          <Route path="/crud" exact component={CrudFirebase} /> 
          <Route path="/faq" exact component={Faq} /> 
        </Switch>
      </Router>
    </>
  );
}

export default App;
