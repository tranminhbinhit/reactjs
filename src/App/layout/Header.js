import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { setCookie } from '../utils/utils'
import constants from '../constants/constants'
import { connect } from 'react-redux'
import * as action from '../pages/LoginPage/actions'

class NavBar extends Component {

    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log("This is the next props", nextProps);
    }

    logout = () =>{
        setCookie(constants.COOKIE_LOGIN,'',1005);
        this.props.onLogoutInfo();
        window.location.reload();
    }

    render() {
        var { login_info } = this.props;
        console.log('this is login info',this.props.login_info);
        return (        
            <div className="navbar">
                <div className="navbar-inner">
                    <div className="left">
                        <Link to="/search"><div className="search-icon"></div></Link>
                    </div>
                    <div className="title sliding" >
                        <Link to="/"><div className="logo-icon"></div></Link>
                    </div>
                    <div className="right">
                        <a onClick={this.logout} title={ `Logout user ${login_info.username}` }><div className="user-icon"></div></a>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        login_info : state.login.login_info
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onLogoutInfo : ()=>{
            dispatch(action.logoutInfo())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);
