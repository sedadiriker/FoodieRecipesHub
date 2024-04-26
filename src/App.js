import AppRouter from "./router/AppRouter";
import AuthProvider from "./context/AuthProvider";
import RecipeProvider from "./context/RecipeProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RecipeProvider>
        <AppRouter />
        </RecipeProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
