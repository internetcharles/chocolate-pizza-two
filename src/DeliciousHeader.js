import React, { Component } from 'react'
import './style.css';
import './article-styles.css';
import Buttons from './Buttons'

export default class DeliciousHeader extends Component {
    render() {
        return (
            <div className='delicious'>
                <div className='logo-elements'>
                    <img className="logo-img" src={require('./lab-assets/logo.png')} />
                    <p className='cursive-text'>{this.props.siteName}</p>
                    <p className='byline'>The best food blog on the web.</p>
                </div>
                <Buttons />

            </div>
        )
    }
}
