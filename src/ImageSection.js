import React, { Component } from 'react'
import './style.css'
import './article-styles.css'

export default class ImageSection extends Component {
    render() {
        return (
        <div className='print-page'>
            <img src={require('./lab-assets/choco-pizza.png')} className='full-size-img' />
        </div>
        )
    }
}
