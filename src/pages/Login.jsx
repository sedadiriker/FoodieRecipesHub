import { useState } from "react";
import { useAuthContext } from "../context/AuthProvider";
import GoogleIcon from "../assets/GoogleIcon";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const { signIn, googleProvider,forgotPassword } = useAuthContext();

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const { email, password } = info;
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password);
  };
  
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-600 font-lato">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondaryColor outline-none sm:text-sm sm:leading-6 ps-5"
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <span
                  onClick={()=> forgotPassword()}
                  className="font-semibold text-main hover:text-secondaryColor"
                >
                  Forgot password?
                </span>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondaryColor outline-none sm:text-sm sm:leading-6 ps-5"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-secondaryColor px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
            <button
            onClick={() => googleProvider()}
              className="flex w-full justify-center rounded-md bg-secondaryColor px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              type="button"
            >
              Continue with Google
              <GoogleIcon color="currentColor" />
            </button>
          </div>
        </form>

        <div className="flex gap-3 items-center justify-center mt-5 ">
          <span> Don't you have an account?</span>
          <span onClick={()=> navigate('/register')} className=" text-main underline cursor-pointer">Register</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
