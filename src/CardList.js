import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"



function CardList({el}) {

 

    return (
        <div className='list'>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{el.name}</Card.Title>
    <Card.Text>
    {el.email}
    </Card.Text>
    <Link  to= {`/details/${el.id}`} > <Button>Details</Button> </Link> 
  </Card.Body>
</Card>  
        </div>
    )
}

export default CardList
