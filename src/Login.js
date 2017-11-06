import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ReactDOM from 'react-dom';

class Header extends React.Component{
    render(){
    let desc =  "some description";
    let mainHead="Bootstrap";
    let head2="Login Form";
    return (
        <div className="row">
            <div class="col-sm-8 col-sm-offset-2 text">
                <h1><strong>{mainHead}</strong> {head2}</h1>
                <div className="description">
                <p>
                    {desc}
                </p>
                </div>
            </div>
        </div>
    );
    }
}

class FormTop extends React.Component{
    render(){
        return(
            <div className="form-top">
                <div className="form-top-left">
                    <h3>Login to our site</h3>
                    <p>Enter your username and password to log on:</p>
                </div>
                <div className="form-top-right">
                    <i className="fa fa-lock"></i>
                </div>
            </div>
        );
    }
}

class FormBottom extends React.Component{
    render(){
        return(
            <div className="form-bottom">
                <form role="form" action="" method="post" className="login-form">
                    <div className="form-group">
                        <label className="sr-only" htmlFor="form-username">Username</label>
                        <input type="text" name="form-username" placeholder="Username..." className="form-username form-control" id="form-username" />
                    </div>
                    <div class="form-group">
                        <label class="sr-only" htmlFor="form-password">Password</label>
                        <input type="password" name="form-password" placeholder="Password..." class="form-password form-control" id="form-password" />
                    </div>
                    <button type="submit" class="btn">Sign in!</button>
                </form>
            </div>
        );
    }
}

class FormBox extends React.Component{
    //this component has to be made with a state but unfortunately right now i dnt have enough knowledge :P
    render(){
        return(
    <div className = "row">
        <div className="col-sm-6 col-sm-offset-3 form-box">

        </div>
    </div>
    );}
}

export default FormTop;