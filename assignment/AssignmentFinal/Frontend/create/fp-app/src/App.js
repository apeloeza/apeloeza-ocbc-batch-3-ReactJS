import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavbarC from "./components/NavbarC";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Users from "./components/Users";
import UserDetail from "./components/UserDetail";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarC />
        <Container>
          <Switch>
            <Route exact path={"/"} component={Users} />
            <Route path="/users/:id" component={UserDetail} />
            <Route path="/404" component={NotFound} />
            <Redirect from="*" to="/404"/>
          </Switch>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
