import React, { Component } from "react";
import { connect } from "react-redux";
import ProductItem from "../ProductItem";

class ProductList extends Component {
  renderProduct = () => {
    return this.props.productList.filter((item)=>{
	    return item.type === this.props.selectedCategory}).map((prod) => {
      return (
        <div className="col-4">
          <ProductItem products={prod}></ProductItem>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">{this.renderProduct()}</div>
      </div>
    );
  }
}

const mapSateToProps = (state) => {
  return {
    productList: state.productReducer.productList,
    selectedCategory: state.listCategory.selectedCategory,
  };
};
export default connect(mapSateToProps, null)(ProductList);
