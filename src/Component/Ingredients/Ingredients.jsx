import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Ingredients() {
  const [ingredientsList, setIngredientsList] = useState([]);

  async function getAllIngredients() {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
      if (response?.data?.meals) {
        setIngredientsList(response.data.meals.slice(0, 20)); // Slicing to get the first 20 ingredients
      }
    } catch (error) {
      console.error("Error fetching ingredients:", error);
    }
  }

  useEffect(() => {
    getAllIngredients();
  }, []);

  return (
    <div className='container'>
      <div className="row py-5">
        {ingredientsList.map((inger) => (
          <div key={inger.idIngredient} className="col-md-3 col-sm-6 col-xs-12 text-center">
            <Link to={`IngredientsMeals/${inger.strIngredient}`} className='text-white text-decoration-none'>
            <i className='fa-solid fa-drumstick-bite fa-4x'></i>
            <h3>{inger.strIngredient}</h3>
            <p>{inger.strDescription ? inger.strDescription.split(' ').slice(0, 20).join(' ') : 'no description'}</p>
            </Link>
            
          </div>
        ))}
      </div>
    </div>
  );
}
