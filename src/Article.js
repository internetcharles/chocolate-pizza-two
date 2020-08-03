import React, { Component } from 'react';
import ArticleTitle from './ArticleTitle';
import ImageSection from './ImageSection';
import Recipe from './Recipe';
import Ingredients from './Ingredients.js'

export default class Article extends Component {
    render() {
        return (
            <div>
                <ArticleTitle />
                <ImageSection />
                <Recipe />
                <Ingredients />
            </div>
        )
    }
}
