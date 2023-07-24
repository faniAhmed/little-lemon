import "./welcome.css";
import { Link} from "react-router-dom";
import { Card} from "react-bootstrap";
import greeksalad from "S:/lilltllemon/lemon/src/icons_assets/greek salad.jpg";
import pizza from "S:/lilltllemon/lemon/src/icons_assets/pizza.jpg";
import dosa from "S:/lilltllemon/lemon/src/icons_assets/dosa.jpg";
import { useState } from "react";
export default function Welcome() {
  const cardst = {
    width: "18rem",
    backgroundColor: "#ecdda1",
    display: "block",
    padding: "10px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5%",
  };
  const stimg = {
    height: "18rem",
    width: "17rem",
  };
  return (
    <div className="start">
      <h1>Little Lemon</h1>
      <h2>India</h2>
      <p>
        The Little Lemon is a cozy, family-friendly restaurant that serves
        delicious Italian food. The menu features a variety of pasta dishes,
        pizzas, and salads, as well as a selection of wines and beers. The
        restaurant is known for its friendly staff and relaxed atmosphere,
        making it a great place to enjoy a meal with friends or family.
      </p>
      <p>How can we help you?</p>
      <div className="buttons">
        <Link className="links"
          to="/login"
          >
          Reserve a Table
        </Link>
        <Link className="links"
          to="/login"
          >
          Order for Delivery
        </Link>
        </div>
      <div className="cards">
        <h2>Our Special Dishes of the Week</h2>
        <div className="allc">
          <Card style={cardst}>
            <Card.Img variant="top" src={greeksalad} style={stimg} />
            <Card.Body>
              <Card.Title>Greek Salad</Card.Title>
              <Card.Text
                style={{ width: "17rem", color: "#495e57", fontWeight: "bold" }}
              >
                Fresh and vibrant Greek salad featuring crisp lettuce, juicy
                tomatoes, cucumber, olives, feta cheese, and zesty lemon
                dressing.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={cardst}>
            <Card.Img variant="top" src={pizza} style={stimg} />
            <Card.Body>
              <Card.Title>Pizza</Card.Title>
              <Card.Text
                style={{ width: "17rem", color: "#495e57", fontWeight: "bold" }}
              >
                Delicious, cheesy, and versatile, pizza is a beloved Italian
                dish consisting of a thin crust topped with various ingredients.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={cardst}>
            <Card.Img variant="top" src={dosa} style={stimg} />
            <Card.Body>
              <Card.Title>Dosa</Card.Title>
              <Card.Text
                style={{ width: "17rem", color: "#495e57", fontWeight: "bold" }}
              >
                Crispy, savory, and South Indian in origin, dosa is a thin,
                fermented crepe made from rice and lentil batter, often served
                with chutney and sambar.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
