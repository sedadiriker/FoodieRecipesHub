import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FcRating } from "react-icons/fc";

const TrendDetail = ({ recipe, onClose }) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-y-auto"
        onClose={onClose}
        initialFocus={cancelButtonRef}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
              <div className="bg-white dark:bg-slate-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start flex-col gap-7 justify-center">
                  <div className="mx-auto flex flex-shrink-0 items-center justify-center bg-red-100 sm:h-50 sm:w-72">
                    <img
                      className=" shadow-modal"
                      src={recipe.image}
                      alt={recipe.name}
                    />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="font-semibold leading-6 text-gray-900 dark:text-white flex justify-between"
                    >
                      <h3>{recipe.name}</h3>
                      <div className="flex gap-1 items-center">
                        <p><FcRating /></p>
                        <p className=" text-main">{recipe.rating} rating</p>
                      </div>
                    </Dialog.Title>

                    <div className="mt-2">
                      <p className="text-sm text-gray-500 dark:text-gray-300 text-justify">
                        {recipe.instructions}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-slate-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:mt-0 sm:w-auto hover:bg-main hover:text-white"
                  onClick={onClose}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default TrendDetail;
