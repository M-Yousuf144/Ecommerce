import { width } from '@mui/system'
import React from 'react'
import { Button, Card } from 'react-bootstrap'
// import {Logos} from '../../assets/images/logos.png'
const OrderNumber = () => {
  const OrderDetail =JSON.parse( localStorage.getItem("Order-number"));
  console.log(OrderDetail)
  return (
<center><div style={{width:'auto',padding:'15px'}}>
<br/><br/><br/><br/><br/>

<Card className="md-6" style={{marginLeft:10,maxWidth:"600px",height:"320px",marginTop:"40px"}}>

  <Card.Header style={{fontWeight:"700",fontSize:"25px"}} className="base_color_bg">Order</Card.Header>
  <Card.Body>
    <Card.Title style={{color:"green"}}>Order Success</Card.Title>
    <Card.Text>
   <p style={{fontSize:"25px"}}> Hey {OrderDetail.customer_first_name} {OrderDetail.customer_last_name},</p>

    <p>We've got your order! Your world is about to look a whole lot better.</p>
    </Card.Text>
   <h3>Order Number:#{OrderDetail.id}</h3>
  </Card.Body>
  <Card.Footer  className=" base_color_bg">{OrderDetail.created_at}</Card.Footer>
</Card>
</div>
</center>
    
  )
}

export default OrderNumber