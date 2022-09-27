import Card from 'react-bootstrap/Card';
import "./card.css"
function CardComp(props) {
   
  return (
    <>
    <Card className="ms-0 me-2 cardstyle m-0" style={{ background: props.color, borderRadius:"0"}}>
      <Card.Body>
        <Card.Text className="fs-3">
         {props.num}
        </Card.Text>
        {props.icon} {props.str}
        <Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  );
}

export default CardComp;