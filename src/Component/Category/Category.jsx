import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from './../Loading';

export default function Category() {
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(false);
  async function getAllCategories() {
    setLoading(true);
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php?c=list');
      if (response?.data?.categories) {
        setCategoryList(response.data.categories);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div className="container">
{loading && <Loading></Loading>}

    <div className='row  '>
      {categoryList.map((cat) => (
        <div key={cat.idCategory} className="col-md-3 col-sm-6 col-xs-12 Category gy-5 ">
          <Link to={`categoryMeals/${cat.strCategory}`}>

          <img src={cat.strCategoryThumb} alt={cat.strCategory} />
          <div className="layer ">
            <h2>{cat.strCategory}</h2>
            <p className='text-center'>{(cat.strCategoryDescription)?cat.strCategoryDescription.split(' ').slice(0,15).join(' '):'no des'}</p>
          </div> 
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
}
