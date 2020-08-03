import React, { Component } from 'react'


export default class ImageSection extends Component {
    render() {
        return (
        <article>
                <img src={require('./lab-assets/choco-pizza.png')} className='full-size-img' />
        </article>
        )
    }
}
