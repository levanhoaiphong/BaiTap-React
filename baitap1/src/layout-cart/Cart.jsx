import React, { Component } from "react";

export default class Cart extends Component {
	renderCarts = () => {
		const cartsHTML = this.props.carts.map((item) => {
			const { id, name, img, price } = item.product
			return (
				<tr>
					<td>{id}</td>
					<td>
						<img style={{ width: 100 }} src={img} />
					</td>
					<td>{name}</td>
					<td>
						<button className="btn btn-primary">+</button>
						<span>{item.quantity}</span>
						<button className="btn btn-primary">-</button>
					</td>
					<td>{price}</td>
					<td>{item.quantity * price}</td>
					<td>
						<button className="btn btn-danger">Xoa</button>
					</td>
				</tr>
			)
		})
		return cartsHTML
	}

	render() {
		return (
			<div
				className="modal fade"
				id="cart"
				tabIndex={-1}
				role="dialog"
				aria-labelledby="modelTitleId"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-xl" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Gio hang</h5>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">×</span>
							</button>
						</div>
						<div className="modal-body">
							<table class="table">
								<thead>
									<tr>
										<th>Ma san pham</th>
										<th>Hinh anh</th>
										<th>Ten san pham</th>
										<th>Don gia</th>
										<th>Price</th>
										<th>Thanh tien</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
								{this.renderCarts()}
								</tbody>
							</table>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-dismiss="modal"
							>
								Close
              </button>
							<button type="button" className="btn btn-primary">
								Save
              </button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
