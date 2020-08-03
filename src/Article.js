import React, { Component } from 'react';
import ArticleTitle from './ArticleTitle';
import ImageSection from './ImageSection';
import Recipe from './Recipe';
import Ingredients from './Ingredients.js'
import Author from './Author'

export default class Article extends Component {
    render() {
        return (
            <div>
                <ArticleTitle title="Chocolate Pizza"/>
                <ImageSection />
                <Recipe />
                <Ingredients />
                <Author authorName="Vanessa Stevenson" />
            </div>
        )
    }
}
