function Tag( {color, tag} ) {

 return(
  <div className={`inline-block px-2.5 py-0.5 text-${color} border-${color} rounded-[10px] border text-[16px]`}>{tag}</div>
 )

};

export default Tag;