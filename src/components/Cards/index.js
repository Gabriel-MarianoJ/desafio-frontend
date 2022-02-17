import { Link } from "react-router-dom";
import "./cards.css";

const Cards = ({ image, text, to }) => {
  return (
    <Link to="/dashboard">
      <div className="mycrd container d-flex flex-column align-items-center">
        <img src={image} alt="Imagem" />

        <h3 className="text-white text-center">{text}</h3>
      </div>
    </Link>
  );
};

export default Cards;
