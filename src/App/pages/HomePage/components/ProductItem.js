import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ProductItem extends Component {

  render() {
  	return (
        <div className="box">
			<div className="b-title">
				<div className="b-t-left">
					<img src={ this.props.product.Avata } alt={ this.props.product.ProductName } />
					<span className="user">User name</span>
				</div>
				<div className="b-t-right">
					<span>{ this.props.product.ProductCode }</span>
				</div>
			</div>

			<div className="b-content">
				<div className="box-title">
					<div className="b-title">
						<h2><Link to={ `/detail/${ this.props.product.IDProduct }`}>{ this.props.product.ProductName }</Link></h2>
						<div className="b-c-time">
							<div className="time-icon"></div>
							<span>{ this.props.product.GoldHourDate }</span>
						</div>
                        <div className="b-c-body">
                            { this.props.product.Description }
                        </div>
                        <div className="b-c-replay">
                            <a><div className="check-icon"></div> <span>I am good</span></a>
                            <a><div className="like-icon"></div> <span>I am good</span></a>
                        </div>
                    </div>
					{this.props.product.Avata !== '' ?
						<div className="b-avata">
							<img width={64} height={64} src={ this.props.product.Avata } alt={ this.props.product.ProductName } />
						</div> : null
					}

				</div>

			</div>
        </div>
    );
  }
}

export default ProductItem;
