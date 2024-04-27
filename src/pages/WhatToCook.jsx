import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { GiKnifeFork } from "react-icons/gi";
import { LuAlarmClock } from "react-icons/lu";
const WhatToCook = () => {
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  const randomId = Math.floor(Math.random() * 30) + 1;

  const getRecipe = async () => {
    setLoading(true)
    const URL = `https://dummyjson.com/recipes/${randomId}`;

    try {
      const { data } = await axios(URL);
      setRecipe(data);
    } catch (err) {
      console.log(err);
    }finally{
      setLoading(false)
    }
  };
  useEffect(() => {
    getRecipe();
  }, []);

  const {
    name,
    image,
    ingredients,
    instructions,
    servings,
    prepTimeMinutes,
    cookTimeMinutes,
  } = recipe;  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className=" p-10 dark:bg-slate-800 relative">
          <h2 className="font-montserrat text-[1.5rem] font-bold uppercase text-center mb-5 text-gray-600 dark:text-white">
            {name}
          </h2>
          <div className="flex gap-10 justify-center flex-wrap  flex-md-nowrap pb-10">
            <div className=" sm:w-5/12">
              <img className="w-full" src={image} alt="" />
            </div>

            <div className=" sm:w-5/12">
            <div className="flex justify-center gap-5">
                <span className="flex items-center gap-1 text-gray-400 text-[10px] md:text-[16px]">
                  <p className=" text-green">
                    <GiKnifeFork />
                  </p>
                  {` ${servings} servings`}
                </span>
                <span className="flex items-center gap-1 text-gray-400 text-[10px] md:text-[16px]">
                  <p className=" text-green">
                    <LuAlarmClock />{" "}
                  </p>
                  {`${prepTimeMinutes} min preperation / ${cookTimeMinutes}  min cook`}
                </span>
              </div>
              <div>
                <h3 className=" text-title text-center uppercase text-gray-500 font-montserrat my-5 font-bold dark:text-white">
                  ingredients
                </h3>
                <oll>
                  {ingredients?.map((item) => (
                    <li className=" font-roboto text-[18px] dark:text-gray-300">{item}</li>
                  ))}
                </oll>
              </div>
              <div>
                <h3 className=" text-title text-center uppercase text-gray-500 font-bold font-montserrat my-5 dark:text-white">
                  instructions
                </h3>
                <p className="dark:text-gray-300">{instructions}</p>
              </div>
              <button onClick={()=> getRecipe()} className="bg-green hover:opacity-80 text-white font-bold py-2 px-4 rounded absolute bottom-3 right-3">
              What to Cook
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatToCook;
