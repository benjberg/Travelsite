import React from 'react'
import { Card,} from 'react-bootstrap'
import '../styles/ServicesTable.css'
export default function ServicesTable() {
  return (
    <div className='wrapper'>
      
  <Card className='card'>
    <Card.Img variant="top" src='images/cruise.jpg'  className='img' />
    <Card.Body >
      <Card.Title className='title'> Exotic Cruises</Card.Title>
      <Card.Text>
        Set sail in style on one of our private cruise ships. Our crew will take care of you from port to port as you witness exotic tropical locations and lush sandy beaches.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="images/mountain.jpg"  className='img' />
    <Card.Body>
      <Card.Title className='title'>Remote Locations</Card.Title>
      <Card.Text>
        Visit stunning remote locations where only few people have set foot. Take your adventure to new heights and take in all that nature has to offer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="images/hotel.jpg" className='img' />
    <Card.Body>
      <Card.Title className='title'>Luxury Hotels</Card.Title>
      <Card.Text>
        Stay in luxury hotels where your every desire will be met. Lay around the pool with a cold drink while soaking up the sun. All your worries will melt away like the ice in your drink.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

    </div>
  )
}


