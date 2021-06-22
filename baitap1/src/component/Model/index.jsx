import React, { Component } from "react";
// Ket noi redux (ham connect ham ket noi reactCoponent voi reduxStore)
import { connect } from "react-redux";
class Model extends Component {
  renderModel = () => {
    return this.props.gioHang.map((spGH, index) => {
      return (
        <tr key={index}>
          <td>{spGH.id}</td>
          <td>{spGH.name}</td>
          <td>
		  <img src={spGH.img} style={{height:100}}	 alt=""/>
	  </td>
          <td>{spGH.price}</td>
          <td>{(spGH.soLuong = spGH.price)}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>{this.renderModel()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // state: la store tong => truy xuat den GioHangReducer => bien state tren GioHangReducer
  return {
    gioHang: state.GioHangReducer.mangGioHang,
  };
};

export default connect(mapStateToProps, null)(Model);