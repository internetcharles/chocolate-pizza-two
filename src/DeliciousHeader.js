import React, { Component } from 'react'
import './style.css'

export default class DeliciousHeader extends Component {
    render() {
        return (
            <div className='delicious'>
                <div className='logo-elements'>
                    <img className="logo-img" src="./lab-assets/logo.png" />
                    <p className='cursive-text'>Delicious</p>
                    <p className='byline'>The best food blog on the web.</p>
                </div>
            </div>
        )
    }
}
