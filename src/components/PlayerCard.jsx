import { useState } from "react";
import Card from "react-bootstrap/Card";

function PlayerCard({ name, img, statistics }) {
  const [showImage, setShowImage] = useState(true);

  const handleShowImage = () => {
    setShowImage(!showImage);
  };

  return (
    <Card
      onClick={handleShowImage}
      className="player-card rounded-2 m-auto"
      role="button"
      
    >
      {showImage ? (
        <Card.Img variant="top" src={img} className="player-img" />
      ) : (
        <ul className="m-auto">
          {statistics.map((item, index) => {
            return <li key={index} className="h5 text-start list-unstyled">🏀{item}</li>;
          })}
        </ul>
      )}

      <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
    </Card>
  );
}

export default PlayerCard;
