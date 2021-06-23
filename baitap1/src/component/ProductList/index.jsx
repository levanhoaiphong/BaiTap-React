import React, { Component } from "react";
import { connect } from "react-redux";
import ProductItem from "../ProductItem";
import data from '../data/data.json'
class ProductList extends Component {
  renderHTML = () => {
    return data.map((item) => {
      return (
        <div className="col-md-3" key={item.id}>
          <ProductItem products={item}></ProductItem>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderHTML()}
        </div>
      </div>
    );
  }
}

export default ProductList;
