import React, {Component} from 'react';
import {Link} from 'react-router-dom'

const CartHeader  = ({item, total, symbol, removeFromCart}) => (
    
            <li >
                {item.hasOwnProperty("DOTD")  ?
                <div>
                  <div class="media">
                  <Link to={`${process.env.PUBLIC_URL}/deals/product/${encodeURI(item.name)}`}><img alt="" class="mr-3" src={`${item.pictures[0]}`} /></Link>
                  <div class="media-body">
                      <Link to={`${process.env.PUBLIC_URL}/deals/product/${encodeURI(item.name)}`}><h4>{item.name}</h4></Link>
                      <h4><span>{item.qty} x {symbol} {(item.sum)}</span></h4>
                  </div>
                </div>

                <div class="close-circle">
                    <a href={null} onClick={ removeFromCart}><i class="fa fa-times" aria-hidden="true"></i></a>
                </div>
              </div>
                : 
                <div>
                <div class="media">
                <Link to={`${process.env.PUBLIC_URL}/product/product/${encodeURI(item.name)}`}><img alt="" class="mr-3" src={`${item.pictures[0]}`} /></Link>
                <div class="media-body">
                    <Link to={`${process.env.PUBLIC_URL}/product/product/${encodeURI(item.name)}`}><h4>{item.name}</h4></Link>
                    <h4><span>{item.qty} x {symbol} {(item.sum)}</span></h4>
                </div>
              </div>

              <div class="close-circle">
                  <a href={null} onClick={ removeFromCart}><i class="fa fa-times" aria-hidden="true"></i></a>
              </div>
            </div>
                
                }
              
            </li>
        )



export default CartHeader;
