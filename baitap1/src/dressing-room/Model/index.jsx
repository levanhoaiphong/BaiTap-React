import React, { Component } from 'react';
import { connect } from 'react-redux';
import './model.css'

class Model extends Component {
	render() {
		return (
			<div class="contain" style={{ background: "url(./assets/img/background/background_998.jpg)", }}>
				<div  class="contain" style={{backgroundImage:`url(${this.props.selectedProduct.background})`,backgroundSize:"cover"}}></div>
				<div class="body" style={{ background: "url(./assets/img/allbody/bodynew.png)", }}></div>
				<div class="model" style={{ background: "url(./assets/img/model/1000new.png)", }}></div>
				<div class="bikinitop" style={{ background: "url(./assets/img/allbody/bikini_branew.png)", }}></div>
				<div class="bikinibottom" style={{ background: "url(./assets/img/allbody/bikini_pantsnew.png)", }}></div>
				<div class="feetleft" style={{ background: "url(./assets/img/allbody/feet_high_leftnew.png)", }}></div>
				<div class="feetright" style={{ background: "url(./assets/img/allbody/feet_high_rightnew.png)", }}></div>
				<div class="bikinitop"  style={{backgroundImage:`url(${this.props.selectedProduct.topclothes})`,backgroundSize:"cover"}}></div>
				<div class="bikinitop"  style={{backgroundImage:`url(${this.props.selectedProduct.botclothes})`,backgroundSize:"cover"}}></div>
				<div class="feetleft"  style={{backgroundImage:`url(${this.props.selectedProduct.shoes})`,backgroundSize:"cover"}}></div>
				<div  class="handbas" style={{backgroundImage:`url(${this.props.selectedProduct.handbags})`,backgroundSize:"cover"}}></div>
				<div  class="necklaces" style={{backgroundImage:`url(${this.props.selectedProduct.necklaces})`,backgroundSize:"cover"}}></div>
				<div  class="hairstyle" style={{backgroundImage:`url(${this.props.selectedProduct.hairstyle})`,backgroundSize:"cover"}}></div>
								
			</div>
			
		);
	}
}
const mapStateToProps =(state)=>{
	return {
		selectedProduct: state.productReducer.selectedProduct,
	}
}
export default connect(mapStateToProps)(Model)