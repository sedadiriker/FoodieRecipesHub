import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RecipeCard from '../components/RecipeCard'

const Recipes = () => {
  const [recipes, setRecipes] = useState([])

  const getFoods = async () => {
    const URL = "https://dummyjson.com/recipes"

    try{
      const {data} = await axios(URL)
      const {recipes} = data
      setRecipes(recipes)
      console.log(recipes)
    }catch(err){
      console.log(err)
    }
  }
useEffect(()=> {
  getFoods()
},[])


  return (
    <div className="bg-white" >
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight  text-gray-600 uppercase">Recipes</h2>

        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {recipes?.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe}/>
            
          ))}
        </div>
      </div>
    </div>
  )
}

export default Recipes
