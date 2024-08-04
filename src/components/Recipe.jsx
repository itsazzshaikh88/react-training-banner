import PropTypes from "prop-types";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
const Recipe = ({ recipe, removeRecipe }) => {
  const { loggedIn } = useContext(UserContext);
  return (
    <div className="col-md-4 mt-3 ">
      <div className="card">
        <img src={recipe.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-info">{recipe.name}</h5>
          <p className="mt-2 mb-0 ">Ingredients</p>
          <p className="card-text">{recipe.ingredients.join(",")}</p>
          <div>
            <i className="bi bi-star-fill"></i>
            <span className="badge bg-warning">{recipe.rating}</span>
          </div>
          {loggedIn ? (
            <button
              className="btn btn-danger mt-3"
              onClick={() => removeRecipe(recipe.id)}
            >
              Remove
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
  }).isRequired,
  removeRecipe: PropTypes.func.isRequired,
};

export default Recipe;
