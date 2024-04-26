import { useEffect, useState } from 'react';
import { useRecipeContext } from '../context/RecipeProvider';
import Loading from '../components/Loading';
import TrendDetail from '../components/TrendDetail';

const Trend = () => {
  const { recipes } = useRecipeContext();
  const [loading, setLoading] = useState(true);
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [showModal, setShowModal] = useState(false); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [loading]);

  const openModal = (id) => {
    const selected = recipes.find(recipe => recipe.id === id);
    setSelectedRecipe(selected);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-600 uppercase">Trend Recipes</h2>
        {loading ? (
          <Loading />
        ) : (
          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {recipes.slice(10, 18)?.map(({ id, image, name }) => (
              <div onClick={() => openModal(id)} key={id} className="group relative cursor-pointer">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img src={image} alt={name} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
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
            ))}
          </div>
        )}
      </div>
      {showModal && selectedRecipe && (
        <TrendDetail onClose={closeModal} recipe={selectedRecipe} />
      )}
    </div>
  );
};

export default Trend;
