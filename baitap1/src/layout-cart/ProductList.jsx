import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
	renderProducts = ()=>{
		const productsHTML = this.props.products.map((item)=>{
			return(
				<div className="col-md-3">
					<ProductItem addCarts={this.props.addCarts}  getProduct ={this.props.getProduct} prod={item}/>
				</div>
			)
		})
		return productsHTML
	}
	render() {
		return (
			<div className="container">
				<div className="row">
				{this.renderProducts()}
				</div>	
			</div>
		)
	}
}
