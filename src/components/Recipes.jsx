import { useContext, useEffect, useState } from "react";
import Recipe from "./Recipe";
import { UserContext } from "../context/UserContext";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { loggedIn } = useContext(UserContext);
  useEffect(() => {
    async function fetchRecipes() {
      const response = await fetch(`https://dummyjson.com/recipes${!loggedIn ? '?limit=3' : ''}`);
      const data = await response.json();
      setRecipes(data.recipes);
      setLoading(false);
    }
    fetchRecipes();
  }, []);

  const removeRecipe = (recipe_id) => {
    const newRecipes = recipes.filter((recipe) => {
      return recipe.id !== recipe_id;
    });

    setRecipes(newRecipes);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center mt-2 text-success">
          <h2>Popular Recipes</h2>
        </div>
      </div>
      {/* User DEfined Components  */}
      <div className="row justify-content-center">
        {loading ? (
          <h1>Data is Loading</h1>
        ) : (
          recipes.map((recipe, index) => (
            <Recipe recipe={recipe} key={index} removeRecipe={removeRecipe} />
          ))
        )}
      </div>
    </div>
  );
};

export default Recipes;
