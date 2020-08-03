import React, { Component } from 'react'
import './style.css'
import './article-styles.css'

export default class ArticleTitle extends Component {
    render() {
        return (
            <div>
                <h1 className='article-title'>{this.props.title}</h1>
                <div className='post-date'>
                    Posted on 15 Dec 2013 / Desserts
                    <div className='print-page'>
                        <img src={require('./lab-assets/print-icon.png')}/>
                        Print
                    </div>
                </div>
            </div>
        )
    }
}
