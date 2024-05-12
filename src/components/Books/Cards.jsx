
import { LuUsers } from "react-icons/lu";

const Cards = ({newMemberCount}) => {
  return (
    <div className='lg:w-full border flex items-center h-full bg-blue-400 rounded-md '>
          
    <div className='w-1/2 h-full flex flex-col   items-center gap-4 px-2 py-4'>
      <LuUsers size={24} className="text-blue-900"/>
      <h3 className="font-bold text-blue-900">New Members</h3>
      </div>
      <div className='w-1/2 h-full flex items-center justify-center px-2 py-2'>
        <h3 className='text-5xl text-blue-900 font-bold'>{newMemberCount}</h3>
      </div>
    </div>
  );
}

export default Cards;
