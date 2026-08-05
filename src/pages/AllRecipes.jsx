import Card from "../components/Card";
import Difficulty from "../components/Difficulty";
import LoadMore from "../components/LoadMore";
import Searchbar from "../components/Searchbar";
import { useGetRecipesByIdQuery, useGetRecipesQuery, useSearchRecipesQuery } from "../api/RecipesAPI";

function AllRecipes(){
 const {data: recipes, error, isLoading } = useGetRecipesQuery();

 return(
  <>
  <header className="relative w-full h-40 md:h-84 flex items-center justify-center overflow-hidden border border-black mb-10 md:mb-15">
   <img src="src/assets/bgimage.png" alt="background image" className="absolute inset-0 h-full w-full object-cover" />
   <div className="relative z-10 flex items-center justify-center w-full">
    <div className="border-3 border-white flex-1 rounded-r-full"/>
    <img src="src/assets/Logo.svg" alt="Recipe Book" className="w-71.75 h-18 md:w-121.5 md:h-36" />
    <div className="border-3 border-white flex-1 rounded-l-full"/>
   </div>
  </header>

  <main className="flex flex-col items-center gap-10">
   <Searchbar />

   <div>
    <Difficulty difficulty={'all'} size={'large'} type={'outlined'} />

    <div className="flex gap-[11.5px] mt-2.5">
     <Difficulty difficulty={'easy'} size={'large'} type={'outlined'} />
     <Difficulty difficulty={'medium'} size={'large'} type={'outlined'} />
     <Difficulty difficulty={'hard'} size={'large'} type={'outlined'} />
    </div>
   </div>
   
   <div>
    {
     isLoading ? (<p>Recipes are loading</p>) : error ? (<p>Recipes failed to load</p>) :
     recipes.recipes.map((recipe) => <Card key={recipe.id} id={recipe.id} name={recipe.name} time={recipe.prepTimeMinutes + recipe.cookTimeMinutes} difficulty={recipe.difficulty} cuisine={recipe.cuisine} tags={recipe.tags} image={recipe.image} />)
    }
   </div>
  </main>
  </>
 )
}

export default AllRecipes;