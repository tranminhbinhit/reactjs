import React, { Component } from 'react';
import NavBar from '../layout/Header'

class NotFound extends Component {
 
  render() {
    return (
        <div className="container">
			<NavBar />
				<div className="content">
					<div className="body">
						<p>Không tìm thấy trang</p>
					</div>
			</div>
		</div>
    );
  }
}

export default NotFound;
