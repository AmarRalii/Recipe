import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Component/Layout";
import Home from "./Component/Home/Home";
import Category from "./Component/Category/Category";
import Area from "./Component/Area/Area";
import Ingredients from "./Component/Ingredients/Ingredients";
import Contact from "./Component/Contact/Contact";
import NotFound from "./Component/NotFound";
import MealDetails from "./Component/MealDetails";
import CategoryMeals from "./Component/Category/CategoryMeals";
import MealListByArea from "./Component/Area/MealListByArea";
import IngredientsMeals from "./Component/Ingredients/IngredientsMeals";

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout></Layout>,
      children: [
        { index: true, element: <Home></Home> },
        { path: "category", element: <Category></Category> },
        { path: "area", element: <Area></Area> },
        { path: "ingredients", element: <Ingredients></Ingredients> },
        { path: "contact", element: <Contact></Contact> },
        { path: "mealDetails/:id", element: <MealDetails></MealDetails> },
        {
          path: "ingredients/IngredientsMeals/:id",
          element: <IngredientsMeals></IngredientsMeals>,
        },
        {
          path: "ingredients/IngredientsMeals/:id/mealDetails/:id",
          element: <MealDetails></MealDetails>,
        },
        {
          path: "category/categoryMeals/:id/mealDetails/:id",
          element: <MealDetails></MealDetails>,
        },
        {
          path: "category/categoryMeals/:strCategory",
          element: <CategoryMeals></CategoryMeals>,
        },
        {
          path: "area/MealListByArea/:id",
          element: <MealListByArea></MealListByArea>,
        },
        {
          path: "area/mealListByArea/:id/mealDetails/:id",
          element: <MealDetails></MealDetails>,
        },
        { path: "*", element: <NotFound></NotFound> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
