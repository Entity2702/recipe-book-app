function Searchbar(){
 return(
  <div className="flex items-center w-[320px] border rounded-[10px] px-5 py-2 border-black focus-within:shadow-orange-custom">
   <img src="src/assets/loupe.png" className="w-6.25 h-6.25" />
   <input type="text" placeholder className="w-full pl-2.5 focus:outline-none overflow-hidden whitespace-nowrap" />
  </div>
 )
}

export default Searchbar;