import { Route, Routes } from "react-router-dom";
import Tag from "./components/Tags";
import Difficulty from "./components/Difficulty";
import Searchbar from "./components/Searchbar";
import LoadMore from "./components/LoadMore";
import Card from "./components/Card";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<AllRecipes />} />
        <Route path="/recipes/:id" element={<SingleRecipe />} />      
      </Routes> */}
      <Searchbar />
      <Tag color='green' tag='gjieos' />
      <LoadMore />
      <Card id='1' name='Classic Margherita Pizza' time='55 min' difficulty='easy' cuisine='italian' tags={['healthy', 'top-rated', 'favourite']} image='https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=' />
    </>
  );
}

export default App
