import React, { Component } from 'react';
import StickyBox from "react-sticky-box";
import { connect } from 'react-redux'
import { getMinMaxPrice } from '../../services';
import { Link } from 'react-router-dom';
import Demoimg from '../../assets/images/portfolio/22.jpg';
import store from '../../store';
import $ from 'jquery';
import { SlideToggle } from 'react-slide-toggle';
import { filterBrand, filterColor, filterPrice, addItemToCart, removeWishlist, getfilterProducts } from '../../actions'
import Pagination from 'react-js-pagination';
import '../../components/layouts/coolncool/main.scss'
import Heart from 'react-heart';
import { Helmet } from 'react-helmet';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "../layouts/coolncool/pronew.css"
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';


class ShopPage extends Component {
    constructor() {
        super()
        this.state = {
            'min': 0,
            'max': 100000,
            loadingNew: true,
            'age': 10,
            'Category': null,
            'category_id': null,
            'filter_by': null,
            'link': ''
        }
    }
    state = {
        layoutColumns: 3
    }
    LayoutViewClicked(colums) {
        this.setState({
            layoutColumns: colums
        })
    }
    openFilter = () => {
        document.querySelector(".collection-filter").style = "left: -15px";
    }
    getFilter = (e, f) => {
        this.setState({ Category: f, category_id: e })
        this.setState({ age: 10 })
        var cate = (e !== 0) ? '?category_id=' + e + '&token=true' : undefined;
        store.dispatch(getfilterProducts(cate));
        document.querySelector(".loader-wrapper").style = "display: block";
    }


    getFilterPrice = () => {
        var cate = '?price=' + this.state.min + ',' + this.state.max + '&token=true';
        store.dispatch(getfilterProducts(cate));
        this.setState({ age: 10 })
        document.querySelector(".loader-wrapper").style = "display: block";
    }

    

    FilterByPrice = (a) => {
        var cate = (this.state.category_id == null) ? '?price_filter=' + a + '&token=true' : '?price_filter=' + a + '&' + 'category_id=' + this.state.category_id + '&token=true';

        store.dispatch(getfilterProducts(cate));
        document.querySelector(".loader-wrapper").style = "display: block";
    }

    FilterByAZ = (a) => {
        var cate = (this.state.category_id == null) ? '?sort_by_name=' + a + '&token=true' : '?sort_by_name=' + a + '&' + 'category_id=' + this.state.category_id + '&token=true';
        store.dispatch(getfilterProducts(cate));
        document.querySelector(".loader-wrapper").style = "display: block";
    }


    handlePageChange(pageNumber) {
      
        var cate = '?page=' + pageNumber  + '&token=true';
        store.dispatch(getfilterProducts(cate));
        document.querySelector(".loader-wrapper").style = "display: block";
        this.setState({ activePage: pageNumber });
        $('.product-wrapper-grid').hide();
        $(".Loader").fadeIn("slow", function () {
            var body = $("html, body");
            body.stop().animate({ scrollTop: $('.collection-product-wrapper').offset().top - 20 }, 500, 'swing', function () {
                $(".Loader").fadeOut("slow", function () {
                    $(".product-wrapper-grid").fadeIn("slow", function () {
                    });
                });
            });
        });
    }


    render() {
        function handleClick(e) {
            store.dispatch(removeWishlist(e));
        }

        function addItemTOCart(e) {
            var item = { 'product_id': e, 'quantity': 1 }
            store.dispatch(addItemToCart(item));
        }

        const handleChange = (event) => {
            this.setState({ age: event.target.value })

        };


        const breadcrumbs = [
            <Typography underline="hover" key="1" color="inherit" href="/" onClick={handleClicks}>
                Shop
            </Typography>,

            <Typography key="3" color="text.primary">
                {(this.state.Category)?this.state.Category:''}
            </Typography>,
        ];
        function handleClicks(event) {
            event.preventDefault();
            console.info('You clicked a breadcrumb.');
        }
        const { filtersproduct, Category } = this.props;



        return (
            <div>
                {/*SEO Support*/}
                <Helmet>
                    <title>Makki Herbals | Shop Page</title>
                </Helmet>
                {/*SEO Support End */}
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div class="row">
                    <div className="col-lg-3">
                        <StickyBox offsetTop={20} offsetBottom={20}>
                            <div>
                                <div class="collection-filter-block" style={{ border: '0px' }}>
                                    <SlideToggle>
                                        {({ onToggle, setCollapsibleElement }) => (
                                            <div class="collection-collapse-block">
                                                <h3 class="collapse-block-title" style={{ letterSpacing: '3px', fontSize: '13px' }} onClick={onToggle}>CATEGORIES</h3>
                                                <div class="collection-collapse-block-content" ref={setCollapsibleElement}>
                                                    <div class="collection-brand-filter">
                                                        <div class="custom-control custom-checkbox collection-filter-checkbox" onClick={() => this.getFilter(0)} style={{
                                                            borderBottom: '1px #dddddd5c solid',
                                                            paddingBottom: '5px',
                                                            cursor: '-webkit-grab',
                                                            cursor: 'pointer'
                                                        }} >
                                                            <i class="fa fa-long-arrow-right mx-2"
                                                                style={{
                                                                    fontSize: '11px',
                                                                    fontWeight: '300',
                                                                }} aria-hidden="true"></i>
                                                            All
                                                        </div>
                                                        {Category.map(category => (
                                                            <div class="custom-control custom-checkbox collection-filter-checkbox" onClick={() => this.getFilter(category.id)} style={{
                                                                borderBottom: '1px #dddddd5c solid',
                                                                paddingBottom: '5px',
                                                                cursor: '-webkit-grab',
                                                                cursor: 'pointer'
                                                            }} >
                                                                <i class="fa fa-long-arrow-right mx-2"
                                                                    style={{
                                                                        fontSize: '11px',
                                                                        fontWeight: '300',
                                                                    }} aria-hidden="true"></i>
                                                                {category.name}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </SlideToggle>
                                </div>
                                <div class="collection-filter-block" style={{ border: '0px' }}>
                                    {/* <Filter/> */}
                                    <SlideToggle>
                                        {({ onToggle, setCollapsibleElement }) => (
                                            <div className="collection-collapse-block open">
                                                <h3 className="collapse-block-title" onClick={onToggle}>price</h3>
                                                <div className="collection-collapse-block-content block-price-content" ref={setCollapsibleElement}>
                                                    <div className="collection-brand-filter">
                                                        <div className="custom-control custom-checkbox collection-filter-checkbox">
                                                            <div className="row">
                                                                <h5 style={{ textAlign: 'center' }}>Search by Price</h5>
                                                                {/* <div className="col-lg-2"></div> */}
                                                                <div className="my-2">
                                                                    <input type="number" min="1" className='form-control removeInput' placeholder='To' onChange={e => this.setState({ min: e.target.value })} />
                                                                </div>
                                                                <div className="my-2">
                                                                    <input type="number" min="1" className='form-control' placeholder='from' onChange={e => this.setState({ max: e.target.value })} />
                                                                </div>
                                                                <div className="my-4">
                                                                    <input type="button" className='form-control btn' style={{ backgroundColor: "#13743F", color: "white", border: "2px solid white", borderRadius: "6px" }} onClick={() => this.getFilterPrice()} value="filter" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </SlideToggle>
                                </div>
                            </div>
                        </StickyBox>
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                            <div className='col-lg-2' style={{ margin: "auto", display: 'grid' }}>
                                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-standard-label">Sort</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={this.state.age}
                                        onChange={handleChange}
                                        label="Age"
                                        autoWidth={true}
                                    >
                                        <MenuItem value={10}>Default Sorting</MenuItem>
                                        <MenuItem value={20} onClick={() => this.FilterByPrice('asc')} >Price : Low To High</MenuItem>
                                        <MenuItem value={30} onClick={() => this.FilterByPrice('desc')} >Price : High To Low</MenuItem>
                                        <MenuItem value={40} onClick={() => this.FilterByAZ('asc')} >Sort By Name : A - Z</MenuItem>
                                        <MenuItem value={50} onClick={() => this.FilterByAZ('desc')} >Sort By Name : Z - A</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="col-lg-10" >
                            
                            </div>
                        </div>
                        <hr />
                        <div className='container'>
                            {(this.state.Category != null && this.state.Category) ?
                                <Stack spacing={2}>
                                    <Breadcrumbs separator="›" aria-label="breadcrumb">
                                        {breadcrumbs}
                                    </Breadcrumbs>
                                </Stack>
                                : ''
                            }
                        </div>
                        {/* <div className='row' > */}
                        {(filtersproduct.data)?
                        <div>
                    
                        
                        
                        {filtersproduct.data.length > 0
                            ?
                          
                            <div className='row'>
                                {filtersproduct.data.map(data => (
                                    <div className="col-lg-4">
                                      {

}



    <div class="card shadown" style={{ margin: "10px" }} data-sku="sku9999">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
            >
                {


                }

            </button>


            <div style={{ width: "2.5rem", display: 'inline', position: 'absolute' }} >
                {
                    this.state.loadingNew ?
                        <div class="skeleton-item skeleton-titleas"></div>
                        :
                        <Heart isActive={data.is_wishlisted} onClick={() => localStorage.getItem("customerData") ? handleClick(data.id) : window.location.href = "/login"} />

                }

            </div>


            <div style={{ width: "2.5rem" }}>

                {(data.Discount_Percentage) ?
                    this.state.loadingNew ?
                        <div class="skeleton-item skeleton-titleas"></div>
                        :

                        <div class="circle">
                            <span class="circle__content">{data.Discount_Percentage}</span>
                        </div>
                    :
                    <div class="circle" style={{ backgroundColor: '#ffffff00' }}>
                        <span class="circle__content">{data.Discount_Percentage}</span>
                    </div>

                }

            </div>


                                                {/* </button> */}
                                            </div>
                                            <Link to={this.state.loadingNew ? "/" : `${process.env.PUBLIC_URL}/product/product/${data.name}`} >
                                                <a class="product-link img" href="#">
                                                    <div class="text-center" style={{
                                                        display: this.state.loadingNew
                                                            ? "block" : "none"
                                                    }} >
                                                        <div class="skeleton-item skeleton-image" style={{ paddingTop: 140, paddingBottom: 140, marginTop: 10 }}></div>
                                                    </div>
                                                    <div class="holder-product-img" style={{
                                                        display: this.state.loadingNew
                                                            ? "none" : "block"
                                                    }}>
                                                        <img class="product-img loaded" style={{ height: 300 }} src={(data.images[0]) ? data.images[0].url : Demoimg}
                                                            alt="Product Images"
                                                            onLoad={() => this.setState({ loadingNew: false })}
                                                        />
                                                    </div>
                                                </a>
                                                <h3 class="product-title">
                                                    <a class="product-link title" href="#">
                                                        {
                                                            this.state.loadingNew ?
                                                                <div class="skeleton-item skeleton-copy-full"></div>
                                                                :
                                                                <h6 style={{ fontSize: '12px', letterSpacing: '0px', fontFamily: "Poppins" }}>{(data.Category[0]) ? data.Category[0].name : ''}</h6>
                                                        }
                                                        {
                                                            this.state.loadingNew ?
                                                                <div class="skeleton-item skeleton-copy-full"></div>
                                                                :
                                                                <h6 style={{ fontSize: '12px', letterSpacing: '0px', fontFamily: "Poppins" }}>{data.name}</h6>
                                                        }
                                                    </a>
                                                </h3>
                                                </Link>
                                                <p class="product-price">
                                                    {
                                                        this.state.loadingNew ?
                                                            <div class="skeleton-item skeleton-copy-fullp"></div>
                                                            :
                                                            <h4 style={{ marginTop: 15 }}>{(data.formated_price) ? data.formated_price : (data.price) ? data.price : ''}
                                                                {(data.formated_regular_price !== null) ?
                                                                    <span class="of" style={{ display: "inline-block", marginLeft: 10 }}>
                                                                        <span class="accessibility-text">De</span>
                                                                        <span style={{ marginLeft: 7 }}>{data.formated_regular_price}</span> </span> : ''}
                                                            </h4>
                                                    }
                                                    {
                                                        this.state.loadingNew ?
                                                            <div class="skeleton-item skeleton-copy-fullsa"></div>
                                                            :
                                                            <button class="add-to-cart" style={{ paddingBottom: "2px", height: "50px", backgroundColor: "#13743F" }}
                                                                onClick={() => addItemTOCart(data.id) }
                                                                type="button" form="cart" data-plugin="toggle-class-target" data-target=".card" data-class="added-to-cart" data-flag="_parents">
                                                                Add To Cart
                                                            </button>
                                                    }
                                                </p>
                                           
                                        </div>
                                    </div>
                                ))}
                            </div>

                            :
                            Object.getPrototypeOf(filtersproduct.data) === Object.prototype ?
                                <div className='row'>
                                    <div className="col-lg-4">
                                        <Link to={this.state.loadingNew ? "/" : `${process.env.PUBLIC_URL}/product/product/${filtersproduct.data.name}`} >
                                            <div class="card shadown" style={{ margin: "10px" }} data-sku="sku9999">
                                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                    <button
                                                    >
                                                        {
                                                        }
                                                    </button>
                                                    <div style={{ width: "2.5rem" }}>
                                                        {
                                                            this.state.loadingNew ?
                                                                <div class="skeleton-item skeleton-titleas"></div>
                                                                :
                                                                <Heart isActive={filtersproduct.data.is_wishlisted} onClick={() => localStorage.getItem("customerData") ? handleClick(filtersproduct.data.id) : window.location.href = "/login"} />
                                                        }
                                                    </div>
                                                    {/* </button> */}
                                                </div>
                                                <a class="product-link img" href="#">
                                                    <div class="text-center" style={{
                                                        display: this.state.loadingNew
                                                            ? "block" : "none"
                                                    }} >
                                                        <div class="skeleton-item skeleton-image" style={{ paddingTop: 140, paddingBottom: 140, marginTop: 10 }}></div>
                                                    </div>
                                                    <div class="holder-product-img" style={{
                                                        display: this.state.loadingNew
                                                            ? "none" : "block"
                                                    }}>
                                                        <img class="product-img loaded" style={{ height: 300 }} src={(filtersproduct.data.images[0]) ? filtersproduct.data.images[0].url : Demoimg}
                                                            alt="Product Images"
                                                            onLoad={() => this.setState({ loadingNew: false })}
                                                        />
                                                    </div>
                                                </a>
                                                <h3 class="product-title">
                                                    <a class="product-link title" href="#">
                                                        {
                                                            this.state.loadingNew ?
                                                                <div class="skeleton-item skeleton-copy-full"></div>
                                                                :
                                                                <h6 style={{ fontSize: '12px', letterSpacing: '0px', fontFamily: "Poppins" }}>{(filtersproduct.data.Category[0]) ? filtersproduct.data.Category[0].name : ''}</h6>
                                                        }
                                                        {
                                                            this.state.loadingNew ?
                                                                <div class="skeleton-item skeleton-copy-full"></div>
                                                                :
                                                                <h6 style={{ fontSize: '12px', letterSpacing: '0px', fontFamily: "Poppins" }}>{filtersproduct.data.name}</h6>
                                                        }
                                                    </a>
                                                </h3>
                                                <p class="product-price">
                                                    {
                                                        this.state.loadingNew ?
                                                            <div class="skeleton-item skeleton-copy-fullp"></div>
                                                            :
                                                            <h4 style={{ marginTop: 15 }}>{(filtersproduct.data.formated_price) ? filtersproduct.data.formated_price : (filtersproduct.data.price) ? filtersproduct.data.price : ''}
                                                                {(filtersproduct.data.formated_regular_price !== null) ?
                                                                    <span class="of" style={{ display: "inline-block", marginLeft: 10 }}>
                                                                        <span class="accessibility-text">De</span>
                                                                        <span style={{ marginLeft: 7 }}>{filtersproduct.data.formated_regular_price}</span> </span> : ''}
                                                            </h4>
                                                    }
                                                    {
                                                        this.state.loadingNew ?
                                                            <div class="skeleton-item skeleton-copy-fullsa"></div>
                                                            :
                                                            <button class="add-to-cart" style={{ paddingBottom: "2px", height: "50px", backgroundColor: "#13743F" }}
                                                                onClick={() => localStorage.getItem("customerData") ? addItemTOCart(filtersproduct.data.id) : window.location.href = "/login"}
                                                                type="button" form="cart" data-plugin="toggle-class-target" data-target=".card" data-class="added-to-cart" data-flag="_parents">
                                                                Add To Cart
                                                            </button>
                                                    }
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                :
                                <div className='col-lg-12' style={{ marginTop: '15%', textAlign: 'center' }}>
                                    <h3>No Product Found</h3>
                                </div>
                        }
                        </div>
                        :''}
                        {/* </div> */}
                    </div>
                </div>
                {(filtersproduct.meta) ?
                    <div style={{ marginTop: 50 }}>
                        <Pagination
                            activePage={filtersproduct.meta.current_page}
                            itemsCountPerPage={filtersproduct.meta.per_page}
                            totalItemsCount={filtersproduct.meta.total}
                            pageRangeDisplayed={filtersproduct.meta.last_page + 1}
                            onChange={this.handlePageChange.bind(this)}
                            innerClass="pagination justify-content-center"
                        />
                    </div>
                    : ''}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    prices: getMinMaxPrice(state.data.products),
    filtersproduct:(state.data.getfillterdata)? state.data.getfillterdata:[],
    filters: state.filters,
    Category: (state.data.getCategory)? state.data.getCategory.data:[]
})
export default connect(
    mapStateToProps,
    { filterBrand, filterColor, filterPrice }
)(ShopPage);