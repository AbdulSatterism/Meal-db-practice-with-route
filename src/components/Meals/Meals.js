import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = () => {
    const meals = useLoaderData().meals;

    return (
        <div className='meal-container'>

            {
                meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
            }
        </div>
    );
};

export default Meals;