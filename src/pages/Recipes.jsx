import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import Loading from "../components/Loading";
import { useRecipeContext } from "../context/RecipeProvider";
import { FaArrowUp } from "react-icons/fa";

const Recipes = () => {
  const [loading, setLoading] = useState(true);
  const { recipes } = useRecipeContext();
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [loading]);

//! SAYFA ÜZERİNE KAYDIRMA
  const scrollToTop =()=> {
    const scrollStep = -window.scrollY / (500 / 15); // hız ayarı (ms cinsinden)
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }
  return (
    <div className="bg-white relative">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight  text-gray-600 uppercase">
          Recipes
        </h2>
        {loading ? (
          <Loading />
        ) : (
          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {recipes?.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </div>
      <p className="animate-bounce w-10 h-10 absolute right-2 bottom-2 bg-main rounded-full flex justify-center items-center cursor-pointer" onClick={() => scrollToTop()}>
      <FaArrowUp className="text-white text-lg" />
      </p>
    </div>
  );
};

export default Recipes;
