import Card from 'react-bootstrap/Card';


function PlayerCard({name, img, statistics}) {
  return (
    <Card className='player-card rounded-2 m-auto' role="button">
      <Card.Img variant="top" src={img} className='player-img'/> 

      <Card.Footer>
        <Card.Title>
          {name}
        </Card.Title>
      </Card.Footer>
    </Card>
  );
}

export default PlayerCard;