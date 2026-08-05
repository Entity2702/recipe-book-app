function Difficulty({size, difficulty, type}){
 let sizeStyle = '';
 let difficultyStyle = '';
 let typeStyle = '';
 let text = '';

 switch(size){
  case 'large': {
   sizeStyle = 'w-[120px] text-[20px]';
   break;
  };

  case 'small': {
   sizeStyle = 'inline-block text-[16px]';
   break;
  };

  default: {
   sizeStyle = 'inline-block text-[16px]';
   break;
  };
 }

 switch(difficulty){
  case 'easy': {
   difficultyStyle = 'border-dark-green text-dark-green bg-green-transparent';
   text = 'Easy';
   break;
  };

  case 'medium': {
   difficultyStyle = 'border-dark-orange text-dark-orange bg-orange-transparent';
   text = 'Medium';
   break;
  };

  case 'hard': {
   difficultyStyle = 'border-red text-red bg-red-transparent';
   text = 'Hard';
   break;
  };

  case 'all': {
   difficultyStyle = 'border-blue text-blue bg-blue-transparent';
   text = 'all';
   break;
  };

  default: {
   difficultyStyle = 'border-blue text-blue bg-blue-transparent';
   text = 'all';
   break;
  };
 }

 switch(type) {
  case 'filled': {
   typeStyle = '';
   break;
  };

  case 'outlined': {
   typeStyle = 'border-black text-black bg-white';
   break;
  };

  default: {
   typeStyle = '';
   break;
  };
 }

 return(
  <button className={`rounded-[10px] border px-5 py-1 ${sizeStyle} ${difficultyStyle} ${typeStyle}`} >{text}</button>
 )
}

export default Difficulty;