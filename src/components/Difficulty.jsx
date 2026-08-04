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
   difficultyStyle = 'border-[#04B100] text-[#04B100] bg-[#04B1001A]';
   text = 'Easy';
   break;
  };

  case 'medium': {
   difficultyStyle = 'border-[#FF9900] text-[#FF9900] bg-[#FF99001A]';
   text = 'Medium';
   break;
  };

  case 'hard': {
   difficultyStyle = 'border-[#D20C0C] text-[#D20C0C] bg-[#D20C0C1A]';
   text = 'Hard';
   break;
  };

  case 'all': {
   difficultyStyle = 'border-[#244FE9] text-[#244FE9] bg-[#244FE91A]';
   text = 'all';
   break;
  };

  default: {
   difficultyStyle = 'border-[#244FE9] text-[#244FE9] bg-[#244FE91A]';
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