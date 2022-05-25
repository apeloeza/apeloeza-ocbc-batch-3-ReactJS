import { Container, Navbar } from "react-bootstrap";
import { useLocation } from "react-router";

export default function NavbarC() {
  let location = useLocation();
  if (location.pathname.includes("/404")) {
    return null;
  } else {
    return (
      <>
        <nav className="shadow p-3 mb-5 bg-body rounded">
          <Container>
            <center>
              <Navbar.Brand className="text-black" href="/">React - Final Project - 011</Navbar.Brand>
            </center>
          </Container>
        </nav>
      </>
    );
  }
}
