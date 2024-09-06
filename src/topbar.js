import { Container, Navbar, Form } from "react-bootstrap";

function TopBar() {
  return (
    <Navbar bg="secondary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">ArheDock</Navbar.Brand>
        <Navbar.Toggle />

        <Form className="w-50 ">
          <Form.Control
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </Form>

        <Navbar.Text>
          Signed in as: <a href="#login">Admin</a>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default TopBar;
