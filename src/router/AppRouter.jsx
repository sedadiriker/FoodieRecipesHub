import { Route, Routes } from "react-router-dom";
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
import Register from "../pages/Register";
import TrendDetail from "../components/TrendDetail";

const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="" element={<PrivateRouter />}>
          <Route path="recipes/:id" element={<RecipesDetail />} />
          <Route path="calorıechecker" element={<CalorıeChecker />} />
          <Route path="whattocook" element={<WhatToCook />} />
          <Route path="trend" element={<Trend />}>
            <Route path=":trendId" element={<TrendDetail/>}/>
          </Route>
        </Route>

        <Route path="about" element={<About />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
