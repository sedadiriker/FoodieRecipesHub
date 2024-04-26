import { IoPersonCircleOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import {
  GiChickenOven,
  GiIceCreamCone,
  GiForkKnifeSpoon,
} from "react-icons/gi";
import { FaGripfire, FaPeopleRoof } from "react-icons/fa6";
import { GoTriangleUp } from "react-icons/go";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider";
import { useRecipeContext } from "../context/RecipeProvider";
import { closeNavbar, openNavbar } from "../helper/icons";
import Switch from "../components/Switch";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const navigation = [
  {
    title: "Recipes",
    path: "/recipes",
    icon: <GiForkKnifeSpoon />,
  },
  {
    title: "What to Cook",
    path: "/whattocook",
    icon: <GiChickenOven />,
  },
  {
    title: "Trend",
    path: "/trend",
    icon: <FaGripfire />,
  },
  {
    title: "Calorie Checker",
    path: "/caloriechecker",
    icon: <GiIceCreamCone />,
  },
  {
    title: "About",
    path: "/about",
    icon: <FaPeopleRoof />,
  },
];

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [show, setShow] = useState(false);

  const { logOut, currentUser } = useAuthContext();
  const { photoURL, displayName } = currentUser;
  const navigate = useNavigate();
  const { setSearchTerm } = useRecipeContext();
  console.log(currentUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(searchValue);
    navigate("/recipes");
  };
  return (
    <div className="navbar bg-[#FEFEF6] dark:bg-slate-700 ">
      <div className="nav-1 m-auto w-11/12 flex items-center justify-between md:justify-evenly border-b border-b-main">
        <div className="logo ">
          <img
            className=" cursor-pointer dark:rounded-full"
            onClick={() => navigate("/recipes")}
            width="150"
            src="/images/logo.avif"
            alt="logo"
          />
        </div>
        <div
          className={`${
            show ? "flex flex-col pb-2" : "hidden"
          } md:flex md:flex-row  items-center justify-between w-[75%]`}
        >
          <form
            onSubmit={handleSubmit}
            className="search-div  items-stretch h-12 w-6/12 hidden md:flex"
          >
            <input
              className="border border-navbarColor outline-none ps-2 w-11/12  focus:border-secondaryColor rounded-s-md"
              type="search"
              name="search"
              id="search"
              placeholder="Search food..."
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <p className=" bg-main text-white w-2/12 flex justify-center items-center rounded-e-md">
              <CiSearch />
            </p>
          </form>
          <div className="flex">
            <Switch/>
          <Menu as="div" className="relative ml-3 hidden md:inline-block">
            <div>
              <Menu.Button className="relative flex text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 ">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>

                <div className="sign-div flex items-center gap-1  border border-1 border-main p-3 cursor-pointer h-12 rounded-md">
                  {currentUser ? (
                    <>
                      {photoURL ? (
                        <img
                          className="h-8 w-8 rounded-full"
                          src={photoURL}
                          alt="user"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <p className="rounded-full text-[2rem] text-secondaryColor">
                          <IoPersonCircleOutline />
                        </p>
                      )}
                      <div>
                        <p className=" text-gray-900 uppercase dark:text-white">
                          {displayName}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="text-[2rem] text-secondaryColor">
                        <IoPersonCircleOutline />
                      </p>
                      <div>
                        <div>
                          <p className=" text-gray-700 dark:text-white">Sign in</p>
                          <p className="text-[11px] text-gray-500 dark:text-gray-300">
                            or register
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-slate-800 dark:text-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {currentUser ? (
                  <>
                    <Menu.Item>
                      {({ active }) => (
                        <span
                          onClick={() => logOut()}
                          role="button"
                          className={classNames(
                            active ? "bg-main text-white dark:bg-main" : "",
                            "block px-4 py-2 text-sm text-gray-700 dark:bg-slate-800 dark:text-white cursor-pointer"
                          )}
                        >
                          Sign out
                        </span>
                      )}
                    </Menu.Item>
                  </>
                ) : (
                  <>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/register"
                          className={classNames(
                            active ? "bg-green text-white" : "",
                            "block px-4 py-2 text-sm text-gray-700 dark:text-white"
                          )}
                        >
                          Register
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/"
                          className={classNames(
                            active ? "bg-green text-white" : "",
                            "block px-4 py-2 text-sm text-gray-700 dark:text-white"
                          )}
                        >
                          Sign In
                        </Link>
                      )}
                    </Menu.Item>
                  </>
                )}
              </Menu.Items>
            </Transition>
          </Menu>
          </div>
          
        </div>
        <div className="md:hidden">
          <button
            className="text-gray-500 hover:text-gray-800"
            onClick={() => setShow(!show)}
          >
            {show ? closeNavbar : openNavbar}
          </button>
        </div>
      </div>
      <div
        className={`${
          show ? "flex flex-col gap-5  bg-white text-black dark:bg-slate-800 dark:text-white" : "hidden"
        } md:flex md:flex-row  items-center justify-between nav-2 w-full md:bg-main border-b-8 border-b-secondaryColor`}
      >
        <Menu as="div" className="relative  md:hidden mt-6">
            <div>
              <Menu.Button className="relative flex text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 ">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>

                <div className="sign-div flex items-center gap-1 border border-1 border-main p-3 cursor-pointer h-12 rounded-md">
                  {currentUser ? (
                    <>
                      {photoURL ? (
                        <img
                          className="h-8 w-8 rounded-full"
                          src={photoURL}
                          alt="user"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <p className="rounded-full text-[2rem] text-secondaryColor">
                          <IoPersonCircleOutline />
                        </p>
                      )}
                      <div>
                        <p className=" text-gray-900 uppercase dark:text-white">
                          {displayName}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="text-[2rem] text-secondaryColor">
                        <IoPersonCircleOutline />
                      </p>
                      <div>
                        <div>
                          <p className=" text-gray-700 dark:text-white">Sign in</p>
                          <p className="text-[11px] text-gray-500 dark:text-gray-300">
                            or register
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {currentUser ? (
                  <>
                    <Menu.Item>
                      {({ active }) => (
                        <span
                          onClick={() => logOut()}
                          role="button"
                          className={classNames(
                            active ? "bg-main text-white" : "",
                            "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                          )}
                        >
                          Sign out
                        </span>
                      )}
                    </Menu.Item>
                  </>
                ) : (
                  <>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/register"
                          className={classNames(
                            active ? "bg-green text-white" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Register
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/"
                          className={classNames(
                            active ? "bg-green text-white" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Sign In
                        </Link>
                      )}
                    </Menu.Item>
                  </>
                )}
              </Menu.Items>
            </Transition>
          </Menu>
        <form
            onSubmit={handleSubmit}
            className="search-div flex items-stretch h-12 w-10/12 sm:w-6/12  md:hidden "
          >
            <input
              className="border border-navbarColor outline-none ps-2 w-11/12  focus:border-secondaryColor rounded-s-md"
              type="search"
              name="search"
              id="search"
              placeholder="Search food..."
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <p className=" bg-main text-white w-2/12 flex justify-center items-center rounded-e-md">
              <CiSearch />
            </p>
          </form>
          
        <ul
          className={`${
            show ? "flex flex-wrap" : "hidden"
          } md:flex md:flex-row m-auto md:w-8/12 flex justify-center md:gap-16`}
        >
          {navigation.map((item) => (
            <li
              className="text-center p-2 relative flex flex-col justify-center items-center after:content-'' after:absolute after:top-2 after:left-[-10px] after:w-[0.3px] after:h-10 after:bg-gray-100 w-28 hover:opacity-65 text-nowrap "
              key={item.title}
            >
              <p className=" text-navbaricon text-[2rem] ">{item.icon}</p>
              <NavLink
                className=" md:text-white uppercase font-lato text-navlink"
                to={item.path}
              >
                {item.title}
              </NavLink>
              <span className="absolute bottom-[-5.5px] text-secondaryColor arrow hidden">
                <GoTriangleUp />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
