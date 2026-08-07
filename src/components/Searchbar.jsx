import { useRef } from "react";
import { loupe } from "../assets/images";

function Searchbar({className, onSearch}){
 const input = useRef(null);

 const onTyping = (event) => {
  if(event.key === "Enter") {
   const userSearch = input.current.value;
   onSearch(userSearch);
  }
 }

 return(
  <div className={`flex items-center w-[320px] border rounded-box px-5 py-2 border-black focus-within:shadow-orange-custom ${className}`}>
   <img src={loupe} className="w-6.25 h-6.25" />
   <input type="text" className="w-full pl-2.5 focus:outline-none overflow-hidden whitespace-nowrap" ref={input} onKeyDown={onTyping}/>
  </div>
 )
}

export default Searchbar;