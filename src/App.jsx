import { Route, Routes } from "react-router-dom";
import AllRecipes from "./pages/AllRecipes";
import SingleRecipe from "./pages/SingleRecipe";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllRecipes />} />
        <Route path="/recipes/:id" element={<SingleRecipe />} />      
      </Routes>
    </>
  );
}

export default App
