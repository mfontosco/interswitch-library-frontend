
import Nav from '../AdminDashboard/Nav';
import Summary from '../Summary/Summary';
import MostBorrowed from './MostBorrowed';
import PopularBooksBorrowed from './PopularBooksBorrowed';
import ThisMonth from './ThisMonth';
import greet from '../../utils/getDay';

const Books = () => {
  const user =JSON.parse(localStorage.getItem("token"))
  const greeting = greet()
  return (
    <div className='h-full py-4'>
    {/* <Nav/> */}
      <div className='px-4'>
      <h1 className='py-2  w-full text-black font-bold text-2xl  flex justify-start'>{greeting},{user?.fullName}</h1>
      <div className='flex gap-4'>
        <Summary/>
        <ThisMonth/>
      </div>
      <div className='mt-4 '>
      <div className="bg-white shadow">
        <h2 className='text-2xl font-bold p-4'>Popular Books Borrowed</h2>
      </div>
        <PopularBooksBorrowed/>
        {/* <MostBorrowed/> */}
      </div>
      </div>
    </div>
  );
}

export default Books;
