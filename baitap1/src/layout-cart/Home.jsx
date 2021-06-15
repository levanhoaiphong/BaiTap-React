import React, { Component } from "react";
import Cart from "./Cart";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";

export default class Home extends Component {
  products = [
    {
      id: "sp_1",
      name: "iphoneX",
      price: "30000",
      screen: "screen_1",
      backCamera: "backCamera_1",
      frontCamera: "frontCamera_1",
      img:
        "https://sudospaces.com/mobilecity-vn/images/2019/12/iphonex-black.jpg",
      desc:
        "iPhone X features a new all-screen design. Face ID, which makes your face your password",
    },
    {
      id: "sp_2",
      name: "Note 7",
      price: "20000",
      screen: "screen_2",
      backCamera: "backCamera_2",
      frontCamera: "frontCamera_2",
      img:
        "https://www.xtmobile.vn/vnt_upload/product/01_2018/thumbs/600_note_7_blue_600x600.png",
      desc:
        "The Galaxy Note7 comes with a perfectly symmetrical design for good reason",
    },
    {
      id: "sp_3",
      name: "Vivo",
      price: "10000",
      screen: "screen_3",
      backCamera: "backCamera_3",
      frontCamera: "frontCamera_3",
      img: "https://www.gizmochina.com/wp-content/uploads/2019/11/Vivo-Y19.jpg",
      desc:
        "A young global smartphone brand focusing on introducing perfect sound quality",
    },
    {
      id: "sp_4",
      name: "Blacberry",
      price: "15000",
      screen: "screen_4",
      backCamera: "backCamera_4",
      frontCamera: "frontCamera_4",
      img:
        "https://cdn.tgdd.vn/Products/Images/42/194834/blackberry-keyone-3gb-600x600.jpg",
      desc:
        "BlackBerry is a line of smartphones, tablets, and services originally designed",
    },
  ];
  state = {
    selectedProduct: null,
    carts:[],
  };
  getProduct = (prod) => {
    this.setState({
      selectedProduct: prod,
    });
  };
  addCarts = (prod)=>{
	const cloneCarts =[...this.state.carts]
	const foudProd = cloneCarts.find((item)=>{
		return item.product.id === prod.id
	})
	console.log(foudProd)
	if(foudProd){
		foudProd.quantity++;
	}else{
		const cartItem = {product:prod,quantity:1}
		cloneCarts.push(cartItem)
	}
	this.setState({
		carts:cloneCarts,
	})
  }
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Bai Tap Gio Hang</h1>
        <button className="btn btn-danger mt-4 mb-2 " data-toggle="modal"
          data-target="#cart"
	>Gio hang (0)</button>
        <ProductList addCarts={this.addCarts} getProduct={this.getProduct} products={this.products} />
        {this.state.selectedProduct !== null ? (
          <ProductDetail prod={this.state.selectedProduct} />
        ) : null}
        <Cart carts={this.state.carts}/>
      </div>
    );
  }
}
