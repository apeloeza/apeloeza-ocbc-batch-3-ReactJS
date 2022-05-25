import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Users from "./components/Users";
import UserDetail from "./components/UserDetail";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NotFound from "./components/NotFound";
import UserTables from "./components/UserTables";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import FAQs from "./components/FAQs";
import Features from "./components/Features";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Container>
          <Switch>
            <Route exact path={"/"} component={Users} />
            <Route path="/users/:id" component={UserDetail} />
            <Route path="/userTables" component={UserTables} />
            <Route path="/FAQs" component={FAQs} />
            <Route path="/Features" component={Features} />
            <Route path="/404" component={NotFound} />
            <Redirect from="*" to="/404"/>
          </Switch>
        </Container>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
