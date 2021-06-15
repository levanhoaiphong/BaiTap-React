import React, { Component } from 'react'

export default class ProductItem extends Component {
	onViewDetail=()=>{
		this.props.getProduct(this.props.prod)
	}
	onAddCarts=()=>{
		this.props.addCarts(this.props.prod)
	}

	render() {
		const {img,name}=this.props.prod
		return (
			<div className="cart">
				<img style={{height:300,width:'100%'}} src={img} alt=""/>
				<h4 className="mt-2 mb-4 pl-2">{name}</h4>
				<div  className="button mb-4" style={{display:'flex', justifyContent:"space-around"}}>
					<button onClick={this.onViewDetail}  className="btn btn-success">Detail</button>
					<button onClick={this.onAddCarts} className="btn btn-danger">Add To Cart</button>
				</div>
			</div>
		)
	}
}
