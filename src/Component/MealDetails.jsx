import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MealDetails() {
  const [meal, setMeal] = useState(null); // Initialize as null to handle loading state
  let { id } = useParams();
  

  async function getMeal() {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      if (response && response.data && response.data.meals) {
        setMeal(response.data.meals[0]);
        console.log(response.data.meals[0]);
      }
    } catch (error) {
      console.error("Error fetching meal:", error);
    }
  }

  useEffect(() => {
    getMeal();
  }, [id]);

  return (
    <div className="container meal my-4">
      {meal ? (
        <div className="row">
          <div className="col-md-4">
            <img src={meal.strMealThumb} className="w-100" alt="" />
            <h2>{meal.strMeal}</h2>
          </div>
          <div className="col-md-7">
            <h2>Instructions</h2>
            <p className="fw-bold">{meal.strInstructions}</p>
           
            <h3>Area : {meal.strArea}</h3>
            <h3>Category : {meal.strCategory}</h3>
            <h3>Recipes:</h3>
            <ul className="d-flex flex-wrap">
              {getIngredients(meal).map((ingredient, index) => (
                <div className="ing p-2 m-2" key={index}>
                    {ingredient}
                </div>
                
              ))}
            </ul>

            <h3>Tags :</h3>
            <p className="btn btn-info">{meal.strTags}</p>
            <br />
         <div className="but">
            <button className="btn btn-danger mx-2"> <a href={meal.strYoutube} target="_blank" className="text-decoration-none text-white">Youtube</a></button>
            <button className="btn source"> <a href={meal.strSource} target="_blank" className="text-decoration-none text-white">Source</a></button>
         </div>
            
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

function getIngredients(meal) {
  let ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }
  return ingredients;
}
