import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { img, name } = this.props.products;
    return (
      <div className="card mb-3">
        <img style={{height:300}} src={img} />
        <div className="card-body">
          <p className="lead">{name}</p>
          <button className="btn btn-success">Detail</button>
	  <button className="btn btn-danger">Add To Cart</button>
        </div>
      </div>
    );
  }
}
