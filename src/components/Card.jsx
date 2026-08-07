import Tag from "./Tags";
import Difficulty from "./Difficulty";
import { Link } from "react-router-dom";

function Card({id, name, time, difficulty, cuisine, tags, image}){
 return(
  <Link to={`/recipes/${id}`}>
   <div key={id} className="w-mobile-card min-h-mobile-card figma:w-card figma:min-h-card rounded-card border border-black figma:hover:shadow-orange-custom pb-5">
    <img src={image} alt="Food photo" className="w-mobile-card h-55 figma:w-card figma:h-65 mb-5 border-b rounded-t-card object-cover" />
    <div className="flex gap-2.5 ml-5 mb-2.5 figma:mb-6 flex-wrap">
     {tags.map((tag, index) => <Tag key={index} color={'orange'} tag={tag} />)}
    </div>
    <div className="ml-[17.5px] w-74.5 figma:w-95 figma:ml-5">
     <p className="font-just-me-again-down-here text-[40px] mb-5">{name}</p>
     <div className="flex items-center mb-5 figma:mb-6.25">
      <img src="src/assets/cuisine.png" alt="cuisine img" className="h-7.5 w-7.5"/>
      <p className="text-[20px]">Cuisine</p>
      <Tag className="ml-auto" color={'red'} tag={cuisine} />
     </div>
     <div className="flex items-center mb-5 figma:mb-10">
      <img src="src\assets\cooktime.png" alt="cook time img" className="h-7.5 w-7.5"/>
      <p className="text-[20px]">Cook Time</p>
      <Tag className="ml-auto" color={'blue'} tag={time + ' min'} />
     </div>
     <Difficulty difficulty={difficulty} size={'small'} type={'filled'} />
    </div>
   </div>
  </Link>
 )
}

export default Card;