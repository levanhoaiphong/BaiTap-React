import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductItem from '../ProductItem'

class ProductList extends Component {
	renderProduct = () => {
		return this.props.productList.map((prod) => {
			return <div className="row">
				<div className="col-4">
					<ProductItem products={prod}></ProductItem>
				</div>
			</div>
		})
	}
	render() {
		return (
			<div className="container-fluid">
				{this.renderProduct()}
			</div>
		)
	}
}

const mapSateToProps = (state) => {
	return {
		productList: state.productReducer.productList
	}
}
export default connect(mapSateToProps, null)(ProductList) 
