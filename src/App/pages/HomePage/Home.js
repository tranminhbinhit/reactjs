import React, { Component } from 'react';
import ProductItem from '../HomePage/components/ProductItem'
import NavBar from '../../layout/Header'
import './home.css'
import { connect } from 'react-redux';
import { getListProduct } from './actions'
import Request from "../../utils/Request";

class Home extends Component {

    constructor(props){
        super(props);

        var data = { "size": 20,"page":1};
        this.props.onLoadListProduct(data);
    }
	render() {
		const { list_products } = this.props;
        const result_items = list_products.length > 0 ? list_products.map((product,index) => {
            return (
                <ProductItem key={ index } product={ product }></ProductItem>
            )
        }) : null;
		return (
			<div>
                <button id="press">test</button>
				<div className="container">
					<NavBar />
					<div className="content">
						{result_items}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) =>{
    return {
        list_products : state.home.list_products
    }
};

const mapDispatchToProps = (dispatch,props) => {
    return {
        onLoadListProduct : (reqdata) => {
            dispatch(getListProduct(reqdata))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
