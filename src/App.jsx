import { Route, Routes } from "react-router-dom";
import AllRecipes from "./pages/AllRecipes";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<AllRecipes />} />
        <Route path="/recipes/:id" element={<SingleRecipe />} />      
      </Routes> */}
      <AllRecipes />
    </>
  );
}

export default App
