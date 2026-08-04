function Tag( {color, tag} ) {
let mainColor = '';

 switch(color){
  case 'red': {
   mainColor = '#D20C0C';
   break;
  };
  
  case 'green': {
   mainColor = '#04B100';
   break;
  };

  case 'orange': {
   mainColor = '#FF9900';
   break;
  };

  case 'blue': {
   mainColor = '#244FE9';
   break;
  };

  default: {
   mainColor = '#FF9900';
   break;
  };
 }

 return(
  <div style={{ '--mainColor': mainColor }} className="inline-block px-2.5 py-0.5 text-(--mainColor) border-(--mainColor) rounded-[10px] border font-nunito-sans text-[16px]">{tag}</div>
 )

};

export default Tag;