import React, { Component } from "react";
import { connect } from "react-redux";
import ProductItem from "../ProductItem";
class ProductList extends Component {
  renderHTML = () => {
    return this.props.cartsList.map((item) => {
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

const mapStateToProps = (state) => {
  return {
    cartsList: state.GioHangReducer.mangGioHang,
  };
};
export default connect(mapStateToProps)(ProductList);
