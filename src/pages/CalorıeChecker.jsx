import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useRecipeContext } from "../context/RecipeProvider";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const CalorıeChecker = () => {
  const [loading, setLoading] = useState(true);
  const { recipes } = useRecipeContext();
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [loading]);

  //!PAGİNATİON İŞLEMLERİ
  const totalItems = recipes.length;
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  //! kaç sayfa olacak
  const totalPages = Math.ceil(totalItems / itemsPerPage); // 4.2 ise 5 gibi yukarı yuvarla!!

  //! sayfadaki son recipe index
  const lastRecipe = currentPage * itemsPerPage;

  //! sayfadaki ilk recipe index
  const firstRecipe = lastRecipe - itemsPerPage;

  //! mevcut sayfa
  const currentRecipes = recipes.slice(firstRecipe, lastRecipe);

  const handlePaginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(
      <button
        key={i}
        onClick={() => handlePaginate(i)}
        className={`px-4 py-2 rounded ${
          currentPage === i
            ? "bg-main text-white"
            : "bg-sectionColor text-gray-700 hover:bg-secondaryColor"
        }`}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-800">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-600 uppercase dark:text-white">
          Calori Checker
        </h2>
        {loading ? (
          <Loading />
        ) : (
          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {currentRecipes?.map(({ id, image, name, caloriesPerServing }) => (
              <div key={id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-md text-gray-700 text-center font-lato dark:text-gray-300">
                    <p>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {name}
                    </p>
                  </h3>
                  <p className="text-md text-main text-center font-lato">
                    calories per serving {caloriesPerServing}kcal
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        <div>
          <div className="flex items-center justify-between border-t border-gray-200 bg-white dark:bg-slate-600 px-4 py-3 sm:px-6 mt-8">
            <div className="flex flex-1 justify-between sm:hidden">
              <button  onClick={() =>
                      handlePaginate(
                        currentPage > 1 ? currentPage - 1 : currentPage
                      )
                    } className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                Previous
              </button>
              <button onClick={() =>
                      handlePaginate(
                        currentPage < 8 ? currentPage + 1 : currentPage
                      )
                    } className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                Next
              </button>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700 dark:text-white">
                  Showing <span className="font-medium">{firstRecipe + 1}</span> to{" "}
                  <span className="font-medium">{lastRecipe > 30 ? 30 : lastRecipe}</span> of{" "}
                  <span className="font-medium">{recipes.length}</span> results
                </p>
              </div>
              <div>
                <nav
                  className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                  aria-label="Pagination"
                >
                  <button
                    onClick={() =>
                      handlePaginate(
                        currentPage > 1 ? currentPage - 1 : currentPage
                      )
                    }
                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                  {pageNumbers}
                  <button
                    onClick={() =>
                      handlePaginate(
                        currentPage < 8 ? currentPage + 1 : currentPage
                      )
                    }
                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalorıeChecker;
