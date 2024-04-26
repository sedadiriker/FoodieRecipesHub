import AppRouter from "./router/AppRouter";
import AuthProvider from "./context/AuthProvider";
import RecipeProvider from "./context/RecipeProvider";
import { ToastContainer } from "react-toastify";


function App() {

  return (
    <div className="App">
      <AuthProvider>
        <RecipeProvider>
        <AppRouter />
        <ToastContainer />
        </RecipeProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
