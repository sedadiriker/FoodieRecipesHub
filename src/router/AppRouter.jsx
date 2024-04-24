import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Recipes from "../pages/Recipes";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import Trend from "../pages/Trend";
import RecipesDetail from "../pages/RecipesDetail";
import About from "../pages/About";
import CalorıeChecker from "../pages/CalorıeChecker";
import WhatToCook from "../pages/WhatToCook";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Login />} />
      <Route path="dashboard" element={<PrivateRouter/>}>
        <Route path="" element={<Recipes />} />
        <Route path=":id" element={<RecipesDetail />} />
        <Route path="calorıechecker" element={<CalorıeChecker />} />
        <Route path="whattocook" element={<WhatToCook />} />
        <Route path="trend" element={<Trend />} />
        <Route path="about" element={<About />} />
      </Route>

      <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
