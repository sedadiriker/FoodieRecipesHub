import {  useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe}) => {
    const navigate = useNavigate()
    const{id,name,image} = recipe
  return (
    <div
      key={id}
      className="group relative cursor-pointer"
      onClick={() => navigate(`${id}`)}
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4">
          <h3 className="text-md text-gray-700 text-center font-lato">
            <p>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </p>
          </h3>
      </div>
    </div>
  );
};

export default RecipeCard;
