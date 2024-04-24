import { IoPersonCircleOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const navigation = [
  {
    title: "Home",
    path: "/dashboard",
  },
  {
    title: "Recipes",
    path: "/dashboard/recipes",
  },
  {
    title: "What to Cook",
    path: "/dashboard/whattocook",
  },
  {
    title: "Trend",
    path: "/dashboard/trend",
  },
  {
    title: "Calorie Checker",
    path: "/dashboard/caloriechecker",
  },
  {
    title: "About",
    path: "/dashboard/about",
  },
];

const Navbar = () => {
  return (
    <div className="navbar bg-[#FEFEF6]">
      <div className="nav-1 m-auto w-8/12 flex items-center justify-between">
        <div className="logo">
          <img width="150" src="images/logo.avif" alt="" />
        </div>
        <div className="search-div flex items-stretch h-12 w-6/12 ">
          <input
            className="border border-navbarColor outline-none ps-2 w-11/12  focus:border-secondaryColor rounded-s-md"
            type="search"
            name="search"
            id="search"
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
            <p className=" text-gray-700">Giriş yap</p>
            <p className="text-[11px] text-gray-500">veya üye ol</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
