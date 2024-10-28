import { Nav, Container } from "react-bootstrap";

function SideBar() {
  return (
    <Container className="sidebar" fluid>
      <Nav>
        <Nav.Link className="sidebar-link" href="#">
          DashBoard
        </Nav.Link>
        <Nav.Link className="sidebar-link" href="#">
          Santier
        </Nav.Link>
        <Nav.Link className="sidebar-link" href="#">
          Context
        </Nav.Link>
        <Nav.Link className="sidebar-link" href="#">
          Artefact
        </Nav.Link>
      </Nav>
    </Container>
  );
}

export default SideBar;
