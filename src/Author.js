import React, { Component } from 'react'

export default class Author extends Component {
    render() {
        return (
            <div>
            <footer className="space-apart">
                <div className='bio'>
                    <p className='author-name'>     
                        <img className='author-pic' src={require('./lab-assets/van-pic.png')}/>
                            {this.props.authorName}
                        </p>
                    <p>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</p>
                </div>
                <button className='share-button'>SHARE RECIPE</button>
            </footer>
            </div>
        )
    }
}
