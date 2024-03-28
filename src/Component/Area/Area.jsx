import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Loading from './../Loading';

export default function Area() {
  const [areaList, setareaList] = useState([]);
  const [loading, setLoading] = useState(false);
  async function getAllArea() {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
      );
      if (response?.data?.meals) {
        setareaList(response.data.meals);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllArea();
  }, []);
  return (
    <div className="container">
       {loading && <Loading />}
    <div className="row p-5">
      {areaList.map((area) => (
        <div key={area.strArea} className="col-md-3 col-sm-6 col-xs-12 text-center">
          <Link to={`mealListByArea/${area.strArea}`} className="text-white text-decoration-none">
           <i className="fa-solid fa-house-laptop fa-4x"></i>
          <p className="fw-bold fs-5 ">{area.strArea}</p>
          </Link>
         
        </div>
      ))}
    </div>
    </div>
  );
}
