
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";

function NavScrollExample({ search }) {
  const onSearch = (word) => {
    search(word);
  };

  return (
    <Navbar expand="lg" className="navbar-background">
      <Container fluid>
        <Navbar.Brand href="/" className="text-light logo ">
          Ameen
        </Navbar.Brand>
            <Form.Control
              onChange={(e) => onSearch(e.target.value)}
              type="search"
              placeholder="Search"
              className=" search d-flex justify-center"
              aria-label="Search"
            />
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
