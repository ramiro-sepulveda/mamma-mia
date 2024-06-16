import { Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <>
    <Container className=" d-flex flex-column gap-2 py-5">
         <h1>
        Bienvenido a <b>Happy Cake</b>
      </h1>
      <p className=" fs-4">El lugar de los pasteles felices</p>
 
    </Container>
     
    </>
  );
};

export default HomePage;