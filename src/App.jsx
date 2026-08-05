import { Route, Routes } from "react-router-dom";
import Tag from "./components/Tags";
import Difficulty from "./components/Difficulty";
import Searchbar from "./components/Searchbar";
import LoadMore from "./components/LoadMore";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<AllRecipes />} />
        <Route path="/recipes/:id" element={<SingleRecipe />} />      
      </Routes> */}
      <Searchbar />
      <Tag color='blue' tag='gjieos' />
      <LoadMore />
    </>
  );
}

export default App
