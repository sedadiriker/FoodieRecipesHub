import { Link, useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe}) => {
    const navigate = useNavigate()
    const{id,name,image} = recipe
  return (
    <div
      key={id}
      className="group relative"
      onClick={() => navigate(`${id}`, { state: recipe })}
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link to={`/${id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
