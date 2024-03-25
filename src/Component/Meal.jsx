import React from 'react'
import { Link } from 'react-router-dom';

export default function Meal({meal}) {
  return (
    <div className='col-md-3 col-sm-6 col-xs-12'>
    <Link to={`mealDetails/${meal.idMeal}`}>
        <div className="meal p-2 fw-bold">
          <div className="photo">
             <img src={meal.strMealThumb} className='w-100 ' alt="" />
            <div className="layout  ">
                 <p>{meal.strMeal}</p>
            </div>
          </div>
            </div>
    </Link>  
      </div>
  )
}
