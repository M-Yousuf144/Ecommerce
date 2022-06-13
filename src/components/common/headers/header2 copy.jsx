import React, { useEffect, useState } from 'react'
import "./header2.css";
import { FiShoppingCart } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { Badge } from '@mui/material';
import store from '../../../store';
import { searchProduct, getLogout, userLogoff } from '../../../actions'
import { connect } from "react-redux";
import Image from "../../../assets/images/herbal.gif"
import {MdClose} from "react-icons/md";
import TemporaryDrawer from '../../pages/cart';


const Header2 = ({ wishList, cart, compare, getWishlist, cartData, user }) => {
	const [show, setShow] = useState(false);
	const [drop, setDrop] = useState(false);
	const [search, setsearch] = useState('');

	const [showSearch, setShowSearch] = useState(false)

	function searching() {
		document.querySelector(".loader-wrapper").style = "display: block";
		let data = search
		store.dispatch(searchProduct(data));
	}
	function handleClick(e) {
		e.preventDefault();
		store.dispatch(getLogout());
		store.dispatch(userLogoff([]));
		localStorage.clear();
	}
	
	const Closeit = () =>{
		setDrop(false)
	}
	let sum = 0;
	


	let item_lenght = (cartData != null && cartData.length !== 0 ) ? cartData.items_qty.length : 0;
	let final_lenght = (cartData != null && cartData.length !== 0 ) ? cartData.items_qty.substring(0, item_lenght - 5) : 0;

useEffect(()=>{
	if(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		
	  setDrop(true);
	  setShowSearch(true);
	}

},[])





	return (
		<>
		
			<header class="header" style={{ position: "fixed",}}>






				<nav class="navbar navbar-expand-lg ">
					<div class="container-fluid">
						<div class="logo">
							<Link to={`${process.env.PUBLIC_URL}/`}>
								<img src='../assets/images/logos/logos.png' alt='Makki Herbals' style={{ width: "150px" }} />
							</Link>
						</div>
						<button onClick={() => setShow(!show)} class="navbar-toggler btn text-dark" style={{ color: "#000" }} type="button"
						>
						
							<FiMenu color='#000' size={30} />
						</button>
						<div class={show ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="navbarSupportedContent">
							<ul class="navbar-nav me-auto mb-2 mb-lg-0 abc text-center">
								<Link to={`${process.env.PUBLIC_URL}/`}>
									<li className='mx-3 py-2'>
										<a style={{ textDecoration: "none", color: "#000", fontWeight: "500" }}>HOME</a>
									</li>
								</Link>
								<li className='mx-3 py-2'>
									<Link to={`${process.env.PUBLIC_URL}/shopPage`}><a>SHOP <i class=""></i></a></Link>
								</li>
								{ 
									localStorage.getItem("customerData") ?
										<>
											<li className='mx-3 py-2'>
												<Link to={`${process.env.PUBLIC_URL}/dashboard`}>DASHBOARD</Link>
											</li>
											<li className='mx-3 py-2'>
												<Link to={`${process.env.PUBLIC_URL}/contact`}>CONTACT</Link>
											</li>
											<li className='mx-3 py-2' onClick={handleClick}>
												<a style={{ cursor: "pointer" }}>LOGOUT</a>
											</li>
										</>
										:
										<>
											<li className='mx-3 py-2'>
												<Link to={`${process.env.PUBLIC_URL}/contact`}>CONTACT</Link>
											</li>
											<li className='mx-3 py-2'>
												<Link to={`${process.env.PUBLIC_URL}/login`}>LOGIN</Link>
											</li>
											<li className='mx-3 py-2'>
												<Link to={`${process.env.PUBLIC_URL}/register`}>REGISTER</Link>
											</li>
										</>
								}
							</ul>
							{
								showSearch ?
							<div class={drop ? "d-flex header-item ab" : "d-flex header-item ab anashere"} >
								<input class="form-control me-2" style={{ borderRadius: 10 }} type="search" placeholder="Search" aria-label="Search" onChange={(e) => setsearch(e.target.value)} />
								<button class="btn" disabled={search ? false : true} style={{ borderRadius: 10, backgroundColor:"#13743F", textAlign:"center" }} type="submit" onClick={() => searching()}>	
									<Link to={`${process.env.PUBLIC_URL}/shopPage`} style={{ color: "inherit", textDecoration: "none" }}> 
									 <FiSearch style={{ fontSize: 20,margin:4,color:"#fff" }} /> 
									 </Link></button>
							</div>
: null
							}
							<div class="header-item item-right" style={{ marginBottom: 10,marginTop: 10 }}>
{
	drop ?
	null
	:
	<FiSearch onClick={()=>setShowSearch(!showSearch)} style={{ fontSize: 20, marginRight: 10, color:"#555555" }} />
}


								<Link to={`${process.env.PUBLIC_URL}/wishlist`}>
									<Badge badgeContent={(getWishlist != null) ? getWishlist.length : 0} sx={{
    "& .MuiBadge-badge": {
      color: "#fff",
      backgroundColor: "#13743F"
    }
  }} style={{ fontSize: 20, marginRight: 15, color: "#fff" }} >
										<a><FiHeart style={{ fontSize: 20, marginRight: 0 }} /></a>
									</Badge>
								</Link>
								{/* <Link to={`${process.env.PUBLIC_URL}/cart`}>
									<Badge badgeContent={final_lenght} sx={{
    "& .MuiBadge-badge": {
      color: "#fff",
      backgroundColor: "#13743F"
    }
  }} style={{ fontSize: 20, marginRight: 15, color: "#fff" }}>
										<a><FiShoppingCart style={{ fontSize: 20, marginRight: 2 }} /></a>
									</Badge>
								</Link> */}

<TemporaryDrawer />


							</div>
						</div>
					</div>
				</nav>
			</header>
			{
				drop ?
				""
				// <div style={{paddingBottom:"15px"}} /> 
			:
			<div style={{paddingBottom:"25px"}} /> 
			}
			
		</>
	)
}
function mapStateToProps(state) {
	return {
		wishList: state.wishlist.list,
		cart: state.cartList.cart,
		compare: state.compare.items,
		getWishlist: (state.wishlist.getwishlist) ? state.wishlist.getwishlist.data : [],
		cartData: (state.cartList.getcartdata) ? state.cartList.getcartdata.data : [],
		user: state.user.user,
	}
}
export default connect(mapStateToProps, null)(Header2);