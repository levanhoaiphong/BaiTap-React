import React, { Component } from "react";
import { connect } from "react-redux";
import GlassesItem from "../GlassesItem";

class GlassesList extends Component {
  render() {
    return (
      <div className="container mt-5" >
        <div className="row">
          {this.props.glassesList.map((item, index) => (
            <div className="col-2">
              <GlassesItem list={item}></GlassesItem>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    glassesList: state.glassesReducer.arrProduct,
  };
};
export default connect(mapStateToProps, null)(GlassesList);
