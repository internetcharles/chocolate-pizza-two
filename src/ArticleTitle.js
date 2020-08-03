import React, { Component } from 'react'


export default class ArticleTitle extends Component {
    render() {
        return (
            <section>
            <header>
                <h1 className='article-title'>{this.props.title}</h1>
                <div className='post-date'>
                    Posted on 15 Dec 2013 / Desserts
                    <div className='print-page'>
                        <img src={require('./lab-assets/print-icon.png')}/>
                        Print
                    </div>
                </div>
            </header>
            </section>
        )
    }
}
