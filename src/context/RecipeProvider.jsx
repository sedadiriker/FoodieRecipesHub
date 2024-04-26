import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const recipeContext = createContext();

export const useRecipeContext = () => {
  return useContext(recipeContext);
};

const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getRecies = async () => {
    const URL = "https://dummyjson.com/recipes";

    try {
      const { data } = await axios(URL);
      const { recipes } = data;
      setRecipes(recipes);
      console.log(recipes);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRecies();
  }, []);

  //!search işlemi için
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <recipeContext.Provider value={{ recipes: filteredRecipes, setSearchTerm }}>
      {children}
    </recipeContext.Provider>
  );
};

export default RecipeProvider;
