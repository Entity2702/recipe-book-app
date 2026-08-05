import Tag from "./Tags";
import Difficulty from "./Difficulty";

function Card({id, name, time, difficulty, cuisine, tags, image}){
 return(
  <div key={id} className="w-mobile-card h-mobile-card md:w-card md:h-card rounded-card border border-black md:hover:shadow-orange-custom">
   <img src={image} alt="Food photo" className="w-mobile-card h-55 md:w-card md:h-65 mb-5 border rounded-t-card" />
   <div className="flex gap-2.5 ml-5 mb-2.5 md:mb-6">
    {tags.map((tag) => <Tag color={'orange'} tag={tag} />)}
   </div>
   <div className="ml-[17.5px] w-74.5 md:w-95 md:ml-5">
    <p className="font-just-me-again-down-here text-[40px] mb-5">{name}</p>
    <div className="flex items-center mb-5 md:mb-6.25">
     <img src="src/assets/cuisine.png" alt="cuisine img" className="h-7.5 w-7.5"/>
     <p className="text-[20px]">Cuisine</p>
     <Tag className="ml-auto" color={'red'} tag={cuisine} />
    </div>
    <div className="flex items-center mb-5 md:mb-10">
     <img src="src\assets\cooktime.png" alt="cook time img" className="h-7.5 w-7.5"/>
     <p className="text-[20px]">Cook Time</p>
     <Tag className="ml-auto" color={'blue'} tag={time} />
    </div>
    <Difficulty difficulty={difficulty} size={'small'} type={'filled'} />
   </div>
  </div>
 )
}

export default Card;