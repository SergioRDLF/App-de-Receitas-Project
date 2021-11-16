import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchRecipesById } from '../services/fetchMeals';
import Img from '../Components/InProgress/Img';
import Ingredients from '../Components/InProgress/Ingredients';
import Instructions from '../Components/InProgress/Instructions';

function FoodRecipesInProgress({ match: { params: { id } } }) {
  const [recipe, setRecipe] = useState();
  const [recipeDone, setFinishRecipe] = useState(true);

  const imgSrc = recipe && recipe.strMealThumb;
  const title = recipe && recipe.strMeal;
  const categorie = recipe && recipe.strCategory;
  const instruction = recipe && recipe.strInstructions;
  const ingredientKeys = recipe && Object
    .keys(recipe).filter((key) => key.includes('strIngredient'));
  const ingredients = recipe && ingredientKeys
    .map((key) => recipe[key]).filter((value) => value !== '' && value !== null);
  const measureKeys = recipe && Object.keys(recipe)
    .filter((key) => key.includes('strMeasure'));
  const measurements = recipe && measureKeys
    .map((key) => recipe[key]).filter((value) => value !== ' ' && value !== null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await fetchRecipesById(id);
      setRecipe(response);
    };
    fetchRecipe();
  }, []);

  return (
    <div>
      <Img
        src={ imgSrc }
        title={ title }
        category={ categorie }
        type="comida"
        id={ id }
        recipe={ recipe }
        link={ `http://localhost:3000/comidas/${id}` }
      />
      <Ingredients
        ingredients={ ingredients }
        medidas={ measurements }
        id={ id }
        setFinishRecipe={ setFinishRecipe }
        recipeDone={ recipeDone }
      />
      <Instructions instruction={ instruction } />
      <button
        disabled={ recipeDone }
        data-testid="finish-recipe-btn"
        type="button"
      >
        Finalizar Receita

      </button>
    </div>
  );
}

FoodRecipesInProgress.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default FoodRecipesInProgress;
