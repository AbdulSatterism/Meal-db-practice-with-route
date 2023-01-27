import React from 'react';
import './Meal.css'

const Meal = ({ meal }) => {
    const { strMealThumb, strMeal } = meal;
    return (
        <div className='meals'>
            <img src={strMealThumb} alt="" />
            <p>{strMeal}</p>
        </div>
    );
};

export default Meal;