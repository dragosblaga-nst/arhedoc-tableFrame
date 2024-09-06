import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function SideBar() {
  return (
    <Nav
      variant="pills"
      defaultActiveKey="/home"
      className="flex-fill flex-column"
    >
      <Nav.Item>
        <Nav.Link>DashBoard</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link>Santier</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link>Contexte</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link>Artefacte</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default SideBar;
