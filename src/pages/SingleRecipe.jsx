import { useGetRecipesByIdQuery } from "../api/RecipesAPI";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Tag from "../components/Tags";
import Difficulty from "../components/Difficulty";

function SingleRecipe(){
 const { id } = useParams();
 const {data: recipe, error, isLoading} = useGetRecipesByIdQuery({id: id});

 if(isLoading) return <p>Recipe is Loading...</p>;
 if(error) return <p>Recipe loading failed</p>;
 
 const time = recipe.cookTimeMinutes + recipe.prepTimeMinutes + ' min';

 return(
  <>
  <header className="px-5 flex items-center mb-7.5 mt-5 figma:px-0 figma:mt-11.5">
   <Link to={'/'} className="figma:ml-12.5 border font-just-me-again-down-here px-5 rounded-box text-[32px] whitespace-nowrap">Go back</Link>
   <hr className="border-2 w-full ml-8.25 rounded-full figma:flex-1"/>
   <img src="/src/assets/LogoBlack.svg" alt="Logo black" className="w-20 h-[46.34px] figma:hidden" />
   <img src="/src/assets/LogoBlack.svg" alt="Logo black" className="w-20 h-20 hidden figma:block ml-5 mr-1.75" />
   <p className="hidden figma:block text-[40px] font-just-me-again-down-here whitespace-nowrap mr-6">Recipe Book</p>
   <hr className="border-2 w-full hidden figma:block rounded-l-full figma:flex-1" />
  </header>

  <main className="flex flex-col items-center px-5 gap-10 figma:grid figma:grid-cols-2 figma:grid-rows-2 figma:px-12.5 figma:gap-20">
   <img src={recipe.image} alt="Food photo" className="w-88.25 h-66.5 object-cover border figma:w-165 figma:h-115" />

   <div className="w-88.25 figma:w-148.75">
    <div className="flex flow-row items-center gap-2.5">
     {recipe.tags.map((tag, index) => <Tag key={index} color={'orange'} tag={tag} /> )}
    </div>

    <p className="font-just-me-again-down-here text-[48px] mb-7.5 figma:text-[80px]">{recipe.name}</p>

    <div className="figma:w-100">
     <div className="flex items-center mb-5 figma:mb-6.25">
      <img src="/src/assets/level.svg" alt="level img" className="h-7.5 w-7.5"/>
      <p className="text-[20px] ml-2">Level</p>
      <span className="ml-auto"><Difficulty size='small' difficulty={recipe.difficulty} type={'filled'} /></span>
     </div>

     <div className="flex items-center mb-5 figma:mb-6.25">
       <img src="/src/assets/servings.svg" alt="servings img" className="h-7.5 w-7.5"/>
       <p className="text-[20px] ml-2">Servings</p>
       <Tag className="ml-auto" color={'orange'} tag={recipe.servings} />
     </div>

     <div className="flex items-center mb-5 figma:mb-6.25">
       <img src="/src/assets/cuisine.png" alt="cuisine img" className="h-7.5 w-7.5"/>
       <p className="text-[20px] ml-2">Cuisine</p>
       <Tag className="ml-auto" color={'red'} tag={recipe.cuisine} />
     </div>

     <div className="flex items-center mb-5 figma:mb-6.25">
       <img src="/src/assets/cooktime.png" alt="cook time img" className="h-7.5 w-7.5"/>
       <p className="text-[20px] ml-2">Time</p>
       <Tag className="ml-auto" color={'red'} tag={time} />
     </div>
    </div>
   </div>

   <div className="border rounded-box pt-2.5 pb-10 px-5 w-88.25 figma:w-152.5 figma:col-start-2 figma:self-start">
    <p className="font-just-me-again-down-here text-[40px] mb-3.75 figma:mb-6.25">Ingredients</p>
    <ul className="list-disc list-inside text-[20px] flex flex-col gap-2.5">
     {recipe.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
    </ul>
   </div>

   <div className="w-88.25 mb-25 figma:w-165 figma:col-end-2 figma:row-end-3 figma:self-start">
    <p className="font-just-me-again-down-here text-[40px] mb-3.75 figma:mb-6.25">Instructions</p>
    <ol className="list-decimal list-inside text-[20px] flex flex-col gap-2.5">
     {recipe.instructions.map((instruction, index) => <li key={index}>{instruction}</li>)}
    </ol>
   </div>
  </main>
  </>
 )

}

export default SingleRecipe;