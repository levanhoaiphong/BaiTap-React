import React, { Component } from 'react'
import Model from '../Model'
import ProductList from '../ProductList'

export default class Home extends Component {
	render() {
		return (
			<div className="container">
				<ProductList/>
				<Model/>
			</div>
		)
	}
}
