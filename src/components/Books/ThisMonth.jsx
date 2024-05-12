
import Cards from './Cards';
import BooksBorrowed from './BooksBorrowed';
import BooksOverdued from './BooksOverdued';
import { useEffect } from 'react';
import { getDashboardStatsAction } from '../../redux/features/books/getDashboardStatSlice';
import { useDispatch, useSelector } from 'react-redux';

const ThisMonth = () => {
  const dispatch = useDispatch()
  const {dashStats,isSuccess,isLoading} = useSelector((state)=>state.dashStats)
  
  useEffect(()=>{
    dispatch(getDashboardStatsAction())
  },[])
  if(isLoading){
    return <h2>Loading..</h2>
  }
  return (
    <div className='w-1/3 px-2 py-2 h-[400px] text-gray-500 rounded-sm bg-white'>
      <h3 className='px-4 mb-4 font-bold text-blue-900'>This Month</h3>
      <div className='w-full flex flex-col h-[250px] justify-center items-center'>
        <div className='w-full '>
        <Cards newMemberCount={dashStats?.stat?.newMemberCount}/>
        </div>
        <div className='h-1/2 w-full flex gap-2 mt-2 '>
            <BooksBorrowed borrowedBookCount={dashStats?.stat?.borrowedBookCount}/>
            <BooksOverdued overdueCount={dashStats?.stat?.overdueCount}/>
        </div>
      </div>
    </div>
  );
}

export default ThisMonth;
