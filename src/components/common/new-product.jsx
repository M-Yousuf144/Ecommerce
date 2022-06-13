// 







import React, {Component} from 'react';
import Slider from 'react-slick';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

import {getTopCollection} from "../../services";


class NewProduct extends Component {
    render (){
        const {items, symbol} = this.props;

        var arrays = [];
        while (items.length > 0) {
            arrays.push(items.splice(0, 3));
          
        }
    
        return (
        
            <div class="theme-card">
                <h5 class="title-border">Popular Item</h5>
                <Slider class="offer-slider slide-1">
                    {arrays.map((products, index) =>
           
                        <div key={index}>
                            {products.map((product, i) =>
                            <Link to={`${process.env.PUBLIC_URL}/product/product/${encodeURI(product.name)}`}>
                                <div class="media" key={i}>
                                    <Link to={`${process.env.PUBLIC_URL}/product/product/${encodeURI(product.name)}`}><img class="img-fluid" src={`${product.pictures[0]}`} alt="" /></Link>
                                    <div class="media-body align-self-center row">
                                    <div className="col-md-3 mx-3">
                                    <Link to={`${process.env.PUBLIC_URL}/product/product/${encodeURI(product.name)}`}>
                                        <img style={{i,width:100, height:100}}  src={product.api.images[0].url ? product.api.images[0].url : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXh6vH////5+vrl7fPv8/f0+fzt9Pbf6vD+/f/j6/Lf6vL///3f6fLr8fbv8/by9vm0HxD7AAACbUlEQVR4nO3c65abIBRAYVHTDALx/d+2VBuDII6zLHro2t/fmEn2HETn2jQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADkG29irNHa4I9G9+qu83B2BTauu01JIIYUUUkghhbcX/ipFTGH3LKOTUmi6Qq/QGQrLovA8Ckuj8LzqC/98A2ZX5YXd2Lajf6beOaTmwm5+tnnsBNZc+NTt/OaNanWT/U5hzYWjWjzyh1VSqK1ONpTPW/fyz66kcHCqixJtHwSqPvvUKgq1D/Rjik61MZzhWPd5aJ3fTfwR6yn+P4XzBFU8RevCwvzPJCoo9IFmepdmPUUdFuqaZzgt0fcUw8T+88Ar/wrSC/UywemgcKE+7Tg/ZNRY8V2bDScYT9G6r+mdu+fOK8guXE8wmaK/Vet6980PPmUXDvEEVXLRCL942lwGkguny0RSmF76//ILuh/SE1JyYXIObk/xzfn17NJH5BZ+LvSHpmjno10yRbmFySYTDHFjivONnZ9iHC+3MLNE31NcJy7zNsn9m9DC9DIRTXG9UD977jTF1UIVWpjbZDJTDM/YeLsRWfjdBKMprj8d8RRFFm5d6Dca31OM99z1diOwMHehT01TTBe0WV00BBYem+AyRbdxcDhFgYX6YN80RZu5LTCSZ9gcLzSqz+xIZvloAgt/MsN8u+QZUkghhRRSSCGFFFJIIYWXFKqv85Towr3fcDpKSy78xygsjcLzKCyNwvPEFCpthxKsVlIKXVeGE1NYHoUUUkghhRRSeFfh2D6u0o53BOpmuOz/RA17f8MHAAAAAAAAAAAAAAAAAAAAAAAAAAAAALjcb3yLQG5tF3tgAAAAAElFTkSuQmCC"}  />
                                   </Link>
                                    </div>
                                  <div className="col-md-7 mx-3 my-4">

                                        <Link to={`${process.env.PUBLIC_URL}/product/product/${encodeURI(product.name)}`}>
                                           
                                            <h6 style={{
                                                        fontSize:'15px',
                                                        fontWeight: '400',
                                                        width: '100%'
                                                    }}>
                                                        {product.name}
                                            </h6>
                                        </Link>
                                        {product.discount > 0 ?  
                                            <h4 style={{fontSize: '13px',color:'#ffff'}}>1x {product.price}
                                                <del><span class="money">{product.price}</span></del>
                                            </h4> : 
                                            <h4 style={{fontSize: '13px',color:'#13743F'}}>1x {product.price}</h4> 
                                            
                                        }
                                     
                                       
                                    </div>
                                  </div>
                                </div>
                                </Link>
                            )}
                        </div>
                    )}
                </Slider>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        items: getTopCollection(state.data.products,state.filters.country),
        symbol: state.data.symbol
    }
}

export default connect(mapStateToProps, null)(NewProduct);

