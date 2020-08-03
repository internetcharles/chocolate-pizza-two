import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
            <footer id="page-footer">
                <hr class='hr' />
                <img src={require('./lab-assets/small-logo.png')}/>
                <div class='footer-text'>
                    <p class='copyright-line'>Delicious &copy; 2013 &bull; All Rights Reserved.</p>
                    <p class='ghost-line'>Proudly published with Ghost.</p>
                </div>
            </footer> 
            </div>
        )
    }
}
