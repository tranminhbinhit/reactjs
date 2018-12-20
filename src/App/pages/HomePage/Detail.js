import React, { Component } from 'react';
import NavBar from '../../layout/Header'
import './home.css'
import {connect} from "react-redux";
import { getProductDetail } from "./actions";

class Detail extends Component {
	constructor(props) {
		super(props);
        var {match} = this.props.match;
        var { id } = match.params;
        this.props.onLoadProductDetail({id:id});
        //console.log("This is the props ", props);
    }

    // componentDidMount(){
    //     var {match} = this.props.match;
    //     var { id } = match.params;
    //     this.props.onLoadProductDetail({id:id});
    // }

	// componentWillMount(){
     //    var {match} = this.props.match;
     //    var { id } = match.params;
     //    this.props.onLoadProductDetail({id:id});
	// }

  	render() {
		var { product_detail } = this.props;
        console.log('Detail Page',this.props,product_detail);
        return (
			<div className="container">
				<NavBar />
				<div className="detail">
					<div className="content">
						<div className="b-title">
							<div className="b-t-right">
								<span>{ product_detail.ProductCode }</span>
							</div>
						</div>
						<h2>{product_detail.ProductName}</h2>
						<div className="b-t-left">
							<img src="{ product_detail.Avata }" alt="test" />
							<div className="info">
								<span className="user">Username</span>
								<span>Public: {product_detail.GoldHourDate}</span>
							</div>
						</div>
					</div>
					<div className="tab">
						<div className="item active">
							<div className="info-icon"></div>
							<span>Details</span>
						</div>
						<div className="item">
							<div className="participants-icon"></div>
							<span>Participants</span>
						</div>
						<div className="item">
							<div className="comment-icon"></div>
							<span>Comments</span>
						</div>
					</div>
					<div className="content">
						<div className="body" dangerouslySetInnerHTML={ {__html: product_detail.Description	 } } >
						</div>
					</div>
				</div>
			</div>
		);
  	}
}

const mapStateToProps = (state) =>{
    return {
        product_detail : state.home.product_detail
    }
};

const mapDispatchToProps = (dispatch,props) => {
    return {
        onLoadProductDetail : (reqdata) => {
            dispatch(getProductDetail(reqdata))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Detail);