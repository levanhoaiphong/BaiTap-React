import React, { Component } from "react";
import { connect } from "react-redux";

class ProductItem extends Component {
  render() {
    const { products } = this.props;
    return (
      <div className="card mb-3">
        <img style={{height:300}} src={products.img} />
        <div className="card-body">
          <p className="lead">{products.name}</p>
          <button className="btn btn-success">Detail</button>
	        <button onClick={()=> {this.props.addCarts(products)}} className="btn btn-danger">Add To Cart</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    // Tao ra props component
    addCarts: (products) =>{
      const productCart =  {
        id: products.id,
        img:products.img,
        name:products.name,
        quantity: 1,
        price:products.price,
      
      }
      // Tao action dua du lieu len reducer
      const action = {
        type: 'ADD_CARTS',
        productCart: productCart,
      }
      dispatch(action);
    }
  }
}

export default connect(null,mapDispatchToProps)(ProductItem)
