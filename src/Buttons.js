import React, { Component } from 'react'

const imgTitles = [ 'fb-icon', 'twit-icon', 'gp-icon', 'insta-icon', 'flic-icon', 'pint-icon', 'rss-icon', 'mail-icon']

// const socialURLs = [
//     {id:'1', className: 'listImg', src:'./lab-assets/fb-icon.png'},
//     {id:'2', className: 'listImg', src:'./lab-assets/twit-icon.png'},
//     {id:'3', className: 'listImg', src:'./lab-assets/gp-icon.png'},
//     {id:'4', className: 'listImg', src:'./lab-assets/insta-icon.png'},
//     {id:'5', className: 'listImg', src:'./lab-assets/flic-icon.png'},
//     {id:'6', className: 'listImg', src:'./lab-assets/pint-icon.png'},
//     {id:'7', className: 'listImg', src:'./lab-assets/rss-icon.png'},
//     {id:'8', className: 'listImg', src:'./lab-assets/mail-icon.png'}
// ]

const socialIcons = imgTitles.map((social) =>
    <li><img src={require(`./lab-assets/${social}.png`)} className='listImg'/></li>
);

export default class Buttons extends Component {
    render() {
        return (
            <header>
                <ul>
                    {socialIcons}         
                </ul>
            </header>
        )
    }
}

