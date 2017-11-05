import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ReactDOM from 'react-dom';

class Description extends React.Component{
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

export default Description;