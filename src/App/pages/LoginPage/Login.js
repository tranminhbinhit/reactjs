import React, { Component } from 'react';
import './login.css'
import { setCookie, getCookie } from '../../utils/utils'
import constants from '../../constants/constants'
import { connect } from 'react-redux'
import { loginInfo } from './actions'

class Login extends Component {

	constructor(props){
		super(props);

		this.onHandleLogin = this.onHandleLogin.bind(this);
		this.onHandleItemChange = this.onHandleItemChange.bind(this);
		this.state = {
			username : '',
			password: ''
		}

		var loginInfo = getCookie(constants.COOKIE_LOGIN);
		if (loginInfo !== null && loginInfo !== "" && window.location.pathname === '/login'){
			window.location.href = '/';
		}
	}

	componentDidMount(){
        console.log('this is componentDidMount',this.props);
    }

	onHandleLogin(event){
		event.preventDefault();
        this.props.onLoginInfo(this.state);
        if (this.state.username === 'admin' && this.state.password === '123456'){
			setCookie(constants.COOKIE_LOGIN,JSON.stringify(this.state),1005);
            this.props.onLoginInfo(this.state);
			window.location.href = '/';
        }
        console.log('this is onHandleLogin',this.props);
	}

	onHandleItemChange(event){
		var target = event.target;
		var name = target.name;
		var value = target.type === 'checkbox' ? target.checked : target.value;
		this.setState(
			{
				[name] : value
			}
		)
	}

  	render() {
		return (
			<div className="login">
				<form onSubmit={ this.onHandleLogin }>				
					<div className="app-wrap">
						<header className="app-header">
							FIND THE MOST LOVED ACTIVITIES
							<div className="blackcat">black cat</div>
						</header>
						<div className="logo">
							<div className="logo-circle">
								<div className="logo-icon"></div>
							</div>
						</div>
						<div className="form-login">
							<div className="form-group">
								<div className="user-icon img-icon"></div>
								<input type="text" onChange={ this.onHandleItemChange } placeholder="user@blackcat.co" name="username" />
							</div>
							<div className="form-group">
								<div className="password-icon img-icon"></div>
								<input type="password" onChange={ this.onHandleItemChange } placeholder="Password" name="password" />
							</div>
						</div>
						<div className="btn-sign-in">
							<button type="submit">Sign in </button>
						</div>
					</div>
				</form>
			</div>       
		);
  	}
}

const mapStateToProps = (state) =>{
	return {
        info_login : state.login.login_info
	}
}

const mapDispatchToProps = (dispatch,props) =>{
	return {
		onLoginInfo : (data) =>{
			dispatch(loginInfo(data));
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
