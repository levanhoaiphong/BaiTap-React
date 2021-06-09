import React, { Component } from 'react';
import Carousel from './Carousel.js';
import Header from './Header.js';
import Product from './Product.js';
import Footer from './Footer.js'

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Carousel />
                <Product />
                <Footer />
            </div>
        )
    }
}
export default Home
