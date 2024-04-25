import { IoPersonCircleOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { GiChickenOven, GiIceCreamCone,GiForkKnifeSpoon } from "react-icons/gi";
import { FaGripfire,FaPeopleRoof } from "react-icons/fa6";
import { GoTriangleUp } from "react-icons/go";

const navigation = [
  {
    title: "Recipes",
    path: "/recipes",
    icon: <GiForkKnifeSpoon />

  },
  {
    title: "What to Cook",
    path: "/whattocook",
    icon: <GiChickenOven />
  },
  {
    title: "Trend",
    path: "/trend",
    icon: <FaGripfire />
  },
  {
    title: "Calorie Checker",
    path: "/caloriechecker",
    icon: <GiIceCreamCone />
  },
  {
    title: "About",
    path: "/about",
    icon: <FaPeopleRoof />
  },
];

const Navbar = () => {
  return (
    <div className="navbar bg-[#FEFEF6]">
      <div className="nav-1 m-auto w-8/12 flex items-center justify-between">
        <div className="logo">
          <img width="150" src="/images/logo.avif" alt="logo" />
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

        <div className="sign-div flex items-center gap-1 border border-1 p-3 cursor-pointer h-12 rounded-md">
          <p className="text-[2rem] text-gray-400">
            <IoPersonCircleOutline />
          </p>
          <div>
            <p className=" text-gray-700">Sign in</p>
            <p className="text-[11px] text-gray-500">or register</p>
          </div>
        </div>
      </div>
      <div className="nav-2 w-full bg-main border-b-8 border-b-secondaryColor">
        <ul className="m-auto w-8/12 flex justify-center gap-16 ">
          {navigation.map((item) => (
            <li className="text-center p-2 relative flex flex-col justify-center items-center after:content-'' after:absolute after:top-2 after:left-[-10px] after:w-[0.3px] after:h-10 after:bg-gray-100 w-28 hover:opacity-65 text-nowrap " key={item.title}>
              <p className=" text-navbaricon text-[2rem]">
                {item.icon}
              </p>
              <NavLink className=" text-white uppercase font-lato text-navlink" to={item.path}>{item.title}</NavLink>
              <span className="absolute bottom-[-5.5px] text-secondaryColor arrow hidden"><GoTriangleUp /></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
