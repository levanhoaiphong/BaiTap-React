import React, { Component } from 'react'

export default class ProductDetail extends Component {
	
	render() {
		const{name,img,screen,backCamera,frontCamera,desc}=this.props.prod
		return (
			<div className="container mt-5">
				<div className="row">
					<div className=" col-md-4">
					<h2 >{name}</h2>
					<img style={{width:300}} src={img}/>
					</div>
					<div className="col-md-8">
					<h2>Thong so ky thuat</h2>
					<table class="table">
							<tr>
								<td>Man hinh</td>
								<td>{screen}</td>
							</tr>
							<tr>
								<td>Mo ta</td>
								<td>{desc}</td>
							</tr>
								<tr>
								<td>Camera truoc</td>
								<td>{frontCamera}</td>
							</tr>
							<tr>
								<td>Camera sau</td>
								<td>{backCamera}</td>
							</tr>
					</table>
					</div>
				</div>
			</div>
		)
	}
}
