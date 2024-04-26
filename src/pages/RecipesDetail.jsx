import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { GiKnifeFork } from "react-icons/gi";
import { LuAlarmClock } from "react-icons/lu";

const RecipesDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);
const navigate = useNavigate()
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const getRecipeDetail = async () => {
    const URL = `https://dummyjson.com/recipes/${id}`;

    try {
      const { data } = await axios(URL);
      setRecipe(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRecipeDetail();
  }, []);
  console.log(recipe);
  const {
    name,
    image,
    ingredients,
    instructions,
    servings,
    prepTimeMinutes,
    cookTimeMinutes,
  } = recipe;
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="border border-3 p-10 ">
          <h2 className="font-montserrat text-[1.5rem] font-bold uppercase text-center mb-5 text-gray-600">
            {name}
          </h2>
          <div className="flex gap-10 justify-center flex-wrap  flex-md-nowrap">
            <div className=" sm:w-5/12">
              <img className="w-full" src={image} alt="" />
            </div>

            <div className=" sm:w-5/12">
              <div className="flex justify-center gap-5">
                <span className="flex items-center gap-1 text-gray-400">
                  <p className=" text-green">
                    <GiKnifeFork />
                  </p>
                  {` ${servings} servings`}
                </span>
                <span className="flex items-center gap-1 text-gray-400">
                  <p className=" text-green">
                    <LuAlarmClock />{" "}
                  </p>
                  {`${prepTimeMinutes} min preperation / ${cookTimeMinutes}  min cook`}
                </span>
              </div>
              <div>
                <h3 className=" text-title text-center uppercase text-gray-500 font-montserrat my-5 font-bold">
                  ingredients
                </h3>
                <oll>
                  {ingredients?.map((item) => (
                    <li className=" font-roboto text-[18px]">{item}</li>
                  ))}
                </oll>
              </div>
              <div>
                <h3 className=" text-title text-center uppercase text-gray-500 font-bold font-montserrat my-5">
                  instructions
                </h3>
                <p>{instructions}</p>
              </div>
              <button onClick={()=> navigate(-1)} className="bg-green hover:opacity-80 text-white font-bold py-2 px-4 rounded fixed bottom-3 right-3">
              Back
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipesDetail;
