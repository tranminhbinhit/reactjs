import React, { Component } from 'react';
import routes from '../routes/routes';
import { BrowserRouter as Router } from "react-router-dom";
import '../assets/css/styles.css'
import constants from '../constants/constants'
import { getCookie } from '../utils/utils'

class App extends Component {
  
	constructor(){
		super();
		// var loginInfo = getCookie(constants.COOKIE_LOGIN);
		// if((loginInfo === null || loginInfo === '') && window.location.pathname !== '/login'){
		// 	window.location.href = '/login';
		// }
  	}

	render() {
		return (
		<Router>
			<div className="container">
				{routes}
			</div>          
		</Router>
		);
	}
}

export default App;
