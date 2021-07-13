import { Button, Container } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";

class ChairItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBooking: true,
    };
  }
    onChange=()=> {
    this.setState({
      isBooking: !this.state.isBooking,
    });
  }
  render() {
    const { chairs } = this.props;
    return (
      <div> <Button
          onClick={() => {
            this.props.addChairs(chairs);
	  }}
	   variant="contained"
	   color="primary"
          style={{ height: 50, width: 50 }}
        >
          {chairs.SoGhe}
        </Button>
      </div>
    );
  }

}
const mapDispatchToProps = (dispatch) => {
  return {
    addChairs: (chairs) => {
      const chairList = {
        SoGhe: chairs.SoGhe,
        TenGhe: chairs.TenGhe,
        Gia: chairs.Gia,
        TrangThai: chairs.TrangThai,
      };
      const action = {
        type: "ADD_CHAIRS",
        chairList: chairList,
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(ChairItem);
