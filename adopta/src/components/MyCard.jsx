import React from 'react'
import Card from 'react-bootstrap/Card';
import Tags from './Tags';


const MyCard = ({img,nombre,info,text,color}) => {
  return (
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                  {info}
                </Card.Text> 
                <Tags text={text} color={color} />                   
              </Card.Body>
          </Card>
  )
}

export default MyCard