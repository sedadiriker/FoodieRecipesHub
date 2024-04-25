import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const RecipesDetail = () => {
  const{id} = useParams()
  const [recipe,setRecipe] = useState({})

  const getRecipeDetail = async () => {
    const URL = `https://dummyjson.com/recipes/${id}`

    try{
      const {data} = await axios(URL)
      setRecipe(data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=> {
    getRecipeDetail()
  },[])
  console.log(recipe)
  const{name,image} = recipe
  return (
    <div>
      <h2>{name}</h2>
      <div>
        {image}
      </div>
    </div>
  )
}

export default RecipesDetail
