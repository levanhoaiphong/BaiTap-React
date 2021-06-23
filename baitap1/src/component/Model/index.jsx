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
            <img src={spGH.img} style={{ height: 100 }} alt="" />
          </td>
          <td>
            <button onClick={() => this.props.tangGiamSL(index, true)}>
              +
            </button>
            <span>{spGH.quantity}</span>
            <button onClick={() => this.props.tangGiamSL(index, false)}>
              -
            </button>
          </td>
          <td>{spGH.price}</td>
          <td>{(spGH.soLuong = spGH.price)}</td>
          <td>
            <button
              onClick={() => this.props.deleteCart(index)}
              className="btn btn-danger"
            >
              Xoa
            </button>
          </td>
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
              <th>Quantyti</th>
              <th>Price</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderModel()}</tbody>
          <tfoot>
            <tr>
              <td colSpan="5"></td>
              <td>Tong tien</td>
              <td>
                {this.props.gioHang.reduce((tongTien, spGH, index) => {
                  return (tongTien += spGH.quantity * spGH.price);
                }, 0)}
              </td>
            </tr>
          </tfoot>
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
const mapDispatchToProps = (dispatch) => {
  return {
    deleteCart: (index) => {
      const action = {
        type: "DELETE_CARTS",
        index,
      };
      dispatch(action);
    },
    tangGiamSL: (index, tangGiam) => {
      const action = {
        type: "TANG_GIAM_SL",
        index,
        tangGiam,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Model);
