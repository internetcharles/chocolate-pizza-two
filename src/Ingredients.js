import React, { Component } from 'react'

const ingredientsList = [
    {id:'1', ingredient:'1 1/2 cups milk'},
    {id:'2', ingredient:'1/2 cup mascarpone'},
    {id:'3', ingredient:'1/2 tsp pink salt'},
    {id:'4', ingredient:'1lb Mission Figs'},
    {id:'5', ingredient:'1/2 cup brown sugar'},
    {id:'6', ingredient:'2-4 tbsp water'},
    {id:'7', ingredient:'1 1/2 cups heavy cream'},
    {id:'8', class:"checked", ingredient:'1/3 granulated sugar'},
    {id:'9', class:"checked", ingredient:'2 egg yolks'},
    {id:'10', ingredient:'1 lemon, juiced'},
    {id:'11', ingredient:'2 tbsp butter'},
    {id:'12', ingredient:'1 cup honey roasted pecans, roughly chopped'}
]


export default class Ingredients extends Component {
    render() {
        return (
            <div className='ingredients'>
                <ul className='ingredients-list'>
                    {ingredientsList.map((ing) => 
                    <li key={ing.id} className={ing.class}>{ing.ingredient}</li>
                    )}
                </ul>
            </div>
        )
    }
}
