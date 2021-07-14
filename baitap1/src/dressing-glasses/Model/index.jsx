import React, { Component } from "react";
import { connect } from "react-redux";
import './style.css'

class Model extends Component {
	render() {
		console.log(this.props.selectedGlasses)
		return (
			<div className="container contain" >
				<div className="model" style={{ background: "url(./assets/img/glassesImage/model.jpg)",height:500, backgroundRepeat:"no-repeat"}}></div>
				<div className="glasses" style={{backgroundImage:`url(${this.props.selectedGlasses.url})`,backgroundRepeat:"no-repeat",backgroundSize:"contain"}}></div>
			</div>
		);
	}
}

const mapStateToProps = (state) =>{
	return {
		selectedGlasses: state.glassesReducer.selectedGlasses
	}
}
export default connect(mapStateToProps,null)(Model)