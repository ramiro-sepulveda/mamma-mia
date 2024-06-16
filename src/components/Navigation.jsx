import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="danger" variant="dark">
      <Container className="justify-content-start gap-2">
        <Link to="/" className="text-white ms-3 text-decoration-none">
           Home
        </Link>
        <Link to="/contacto" className="text-white ms-3 text-decoration-none">
           Contacto
        </Link>
      </Container>
      <Container className=" justify-content-end">
        <Navbar.Brand>
          <Link to="/" className="text-white ms-3 text-decoration-none">
            Happy Cake 
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Navigation;