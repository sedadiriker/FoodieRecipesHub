import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Recipes = () => {

  const [foods, setFoods] = useState([])

  const getFoods = async () => {
    const URL = "https://dummyjson.com/recipes"

    try{
      const res = await axios(URL)
      const {data} = res
      console.log(data)
    }catch(err){
      console.log(err)
    }
  }

useEffect(()=> {
  getFoods()
},[])


  return (
    <div>
      
    </div>
  )
}

export default Recipes
