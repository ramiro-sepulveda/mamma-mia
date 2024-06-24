import { useParams } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import { useContext} from "react";
import { PizzasContext } from "../context/ContextPizzas";

const PizzaDetails = () => {
  const { name } = useParams();
  const { pizzas, loading } = useContext(PizzasContext);
  console.log(name);
  console.log(pizzas);
  console.log(loading);

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
    const index = pizzas.findIndex((el) => el.name == name);
    return (
      <div className="mt-5">
        <Card
          className="d-flex flex-row m-auto tarjeta"
          text="white"
          style={{ width: "70%" }}
        >
          <Card.Img
            variant="top"
            src={pizzas[index].img}
            alt={"Pizza " + primeraMayuscula(name)}
          />
          <Card.Body className="py-0">
            <Card.Header className="fs-1 pb-4 border-light">
              {primeraMayuscula(name)}
            </Card.Header>

            <Card.Text>{pizzas[index].desc}</Card.Text>
            <Card.Title className="fs-4 pb-4">Ingredientes:</Card.Title>

            <ul>
              {pizzas[index].ingredients.map((el, index) => (
                <li key={index}>{primeraMayuscula(el)}</li>
              ))}
            </ul>
          </Card.Body>
        </Card>
      </div>
    );
  }
};

export default PizzaDetails;
