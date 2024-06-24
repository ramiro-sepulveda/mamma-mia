import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useContext } from "react";
import { PizzasContext } from "../context/ContextPizzas";
import { useNavigate } from "react-router-dom";

const TarjetasProductos = () => {
  const { pizzas, loading } = useContext(PizzasContext);
  console.log(pizzas);
  console.log(loading)

  const navigate = useNavigate();
  const irAPizza = (e) => navigate(`/mamma-mia/pizza/${e}`);

  function primeraMayuscula(str) {
    return str
      .split(" ")
      .map((word) => {
        if (word.length === 0) {
          return word;
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }

  if (loading) {
    return <div>cargando</div>;
  } else {
    return (
      <>
        <div className="gallery d-grid row-gap-5 grid-columns">
          {pizzas.map((el) => (
            <Card
              className="d-flex m-auto tarjeta"
              text="white"
              key={el.id}
              style={{ width: "100%" }}
            >
              <Card.Img variant="top" src={el.img} alt={"Pizza "+el.name}/>
              <Card.Header className="fs-2 border-light">
                {primeraMayuscula(el.name)}
              </Card.Header>
              <Card.Body>
                <Card.Title>Ingredientes:</Card.Title>

               
                  <ul>
                    <li>{primeraMayuscula(el.ingredients[0])}</li>
                    <li>{primeraMayuscula(el.ingredients[1])}</li>
                    <li>{primeraMayuscula(el.ingredients[2])}</li>
                    <li>{primeraMayuscula(el.ingredients[3])}</li>
                  </ul>

                  <div className="precio">{"$ "+el.price.toLocaleString('es-ES')}</div>
               

                <div className="botones d-flex justify-content-around">
                  <Button
                    value={el.name}
                    style={{ width: "45%" }}
                    variant="secondary"
                    onClick={(e) => irAPizza(e.currentTarget.value)}
                  >
                    Ver Más
                  </Button>
                  <Button
                    style={{ width: "45%" }}
                    variant="danger"
                    onClick={() => console.log("Primary")}
                  >
                    Añadir
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </>
    );
  }
};

export default TarjetasProductos;
