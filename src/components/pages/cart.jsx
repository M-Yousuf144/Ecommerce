import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Demoimg from '../../assets/images/portfolio/22.jpg';
import { Link } from 'react-router-dom';
import { Badge } from '@mui/material';
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { connect } from 'react-redux';

 function  TemporaryDrawer(props) {
    
  const [state, setState] = React.useState({
 
    right: false,
  });

const {cartData} = props
let item_lenght = (cartData != null && cartData.length !== 0 ) ? cartData.items_qty.length : 0;
let final_lenght = (cartData != null && cartData.length !== 0 ) ? cartData.items_qty.substring(0, item_lenght - 5) : 0;


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box  
      sx={{  width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 330 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
style={{ overflowX: 'hidden'}}
      
    >
      <List >
       <h4 className='base_color' style={{textAlign:"center",padding:'9%',fontWeight:"bold",fontSize:"28px"}}><MdOutlineShoppingBag/>&nbsp;&nbsp;Shopping Cart</h4>
      </List>
      <Divider />
      {(cartData) ?
      <div>
        {(cartData.length != 0)?
        <div><List  >
        {cartData.items.map((item, index) => {
             return (
             
          <div className="row" style={{textAlign:"center"}}>
              <div className="col-lg-4">
              <img src={(item.product != '')?item.product.images[0].url:Demoimg} style={{width:"80px",height:"100px",padding:'7px',paddingTop:'0px'}} />
              </div>
              <div className="col-lg-8">
                  <div className="row" >
                      <div className="col-lg-12" style={{textAlign:'left'}} >
                          <p className="cart-text" style={{lineHeight:'20px'}}>{item.name}</p>
                      </div>
                      <div className="col-lg-6">
                          <p> {item.formated_price}</p>
                      </div>
                      <div className="col-lg-8" style={{fontWeight:500,color:"#13743F"}}>
                          <p> x{item.quantity}</p>
                      </div>
                  </div>
              </div>
          <hr />
      </div>
   
  )
  })}
  </List>
  <List >
          <div className="row">
              <div className="col-lg-12" style={{textAlign:'right',marginLeft:'-4%'}}>
                  <p>Sub Total : {cartData.formated_sub_total}</p>
                  <p>Total : {cartData.formated_grand_total} </p>
  
              </div>
          </div>
          <div>
          <div className="row">
              <div className="col-lg-12" >
              <Link to={`${process.env.PUBLIC_URL}/cart`} >
                                  <a class="btn btn-solid" style={{borderRadius:6, fontSize:12,width:'90%',margin:'2%',marginLeft:'5%'}}>Update Cart</a>
                                  </Link>
              </div>
          </div>
          <div className="row">
              <div className="col-lg-12">
  
          <Link to={`${process.env.PUBLIC_URL}/cart-sidebar`} class="btn btn-solid" style={{borderRadius:6, fontSize:12,width:'90%',margin:'2%',marginLeft:'5%'}}>check out</Link>
              </div>
          </div>
          <div className="row">
              <div className="col-lg-12" >
              <Link to={`${process.env.PUBLIC_URL}/shopPage`} >
                                  <a class="btn btn-solid" style={{borderRadius:6, fontSize:12,width:'90%',margin:'2%',marginLeft:'5%'}}>continue shopping</a>
                                  </Link>
              </div>
          </div>
          </div>
      </List></div>
      :
      
      <section class="cart-section section-b-space">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div >
                    <div class="col-sm-12 empty-cart-cls text-center">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/icon-empty-cart.png`} class="img-fluid mb-4" alt="" />
                        <h3>
                            <strong>Your Cart is Empty</strong>
                        </h3>
                        <h5>Explore more shortlist some items.</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
      }
    

    </div>
    :
    <section class="cart-section section-b-space">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div >
                    <div class="col-sm-12 empty-cart-cls text-center">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/icon-empty-cart.png`} class="img-fluid mb-4" alt="" />
                        <h3>
                            <strong>Your Cart is Empty</strong>
                        </h3>
                        <h5>Explore more shortlist some items.</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>}
    </Box>
  );


  return (
    <div  >
      {
          <div >
        <React.Fragment key={'right'}  >
          <Button onClick={toggleDrawer('right', true)}>
              <Badge badgeContent={final_lenght} sx={{
    "& .MuiBadge-badge": {
      color: "#fff",
      backgroundColor: "#13743F",
    }
  }} style={{ fontSize: 20, marginRight: 15, color: "#fff" }}>
										<a><FiShoppingCart  style={{ fontSize: 23, marginRight: 2 , marginBottom:'14px'}} /></a>
									</Badge></Button>
          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>
        </React.Fragment>
          </div>
       
      }
    </div>
  );
}
const mapStateToPros = (state, ownProps) => ({

    cartData:(state.cartList.getcartdata)?state.cartList.getcartdata.data:'',

  
    });
    export default connect(mapStateToPros)(TemporaryDrawer);