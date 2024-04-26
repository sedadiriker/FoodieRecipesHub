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
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider";

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
  const { logOut, currentUser } = useAuthContext();
  const { photoURL, displayName } = currentUser;
  const navigate = useNavigate();
  console.log(currentUser);
  return (
    <div className="navbar bg-[#FEFEF6]">
      <div className="nav-1 m-auto w-8/12 flex items-center justify-between">
        <div className="logo">
          <img
            className=" cursor-pointer"
            onClick={() => navigate("/recipes")}
            width="150"
            src="/images/logo.avif"
            alt="logo"
          />
        </div>
        <div className="search-div flex items-stretch h-12 w-6/12 ">
          <input
            className="border border-navbarColor outline-none ps-2 w-11/12  focus:border-secondaryColor rounded-s-md"
            type="search"
            name="search"
            id="search"
            placeholder="Search food..."
          />
          <p className=" bg-main text-white w-2/12 flex justify-center items-center rounded-e-md">
            <CiSearch />
          </p>
        </div>

        <Menu as="div" className="relative ml-3">
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
                      <p className=" text-gray-900 uppercase">{displayName}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-[2rem] text-secondaryColor">
                      <IoPersonCircleOutline />
                    </p>
                    <div>
                      <div>
                        <p className=" text-gray-700">Sign in</p>
                        <p className="text-[11px] text-gray-500">or register</p>
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
      </div>
      <div className="nav-2 w-full bg-main border-b-8 border-b-secondaryColor">
        <ul className="m-auto w-8/12 flex justify-center gap-16 ">
          {navigation.map((item) => (
            <li
              className="text-center p-2 relative flex flex-col justify-center items-center after:content-'' after:absolute after:top-2 after:left-[-10px] after:w-[0.3px] after:h-10 after:bg-gray-100 w-28 hover:opacity-65 text-nowrap "
              key={item.title}
            >
              <p className=" text-navbaricon text-[2rem]">{item.icon}</p>
              <NavLink
                className=" text-white uppercase font-lato text-navlink"
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
