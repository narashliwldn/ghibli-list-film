import { Nav, Navbar, Container, NavbarBrand } from "react-bootstrap";
import "../styles/navbar.scss";

function NavbarGhibli() {
  return (
    <Navbar className="navbar" variant="dark">
      <Container fluid>
        <NavbarBrand>Ghibli Film List</NavbarBrand>
      </Container>
    </Navbar>
  );
}

export default NavbarGhibli;
