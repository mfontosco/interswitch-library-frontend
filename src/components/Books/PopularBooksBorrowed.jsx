
import book1 from '../../assets/atomic.jpg'; // Make sure to include the file extension
import book2 from '../../assets/fahren.jpg';
import book3 from '../../assets/power.jpg';

const PopularBooksBorrowed = () => {
  return (
    <div className='w-full flex gap-2 bg-white h-[300px] px-4'>
      <div className='w-1/3 h-full' style={{ backgroundImage: `url(${book1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Content for the first book */}
      </div>
      <div className='w-1/3 h-full' style={{ backgroundImage: `url(${book2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Content for the second book */}
      </div>
      <div className='w-1/3 h-full' style={{ backgroundImage: `url(${book3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Content for the third book */}
      </div>
    </div>
  );
}

export default PopularBooksBorrowed;
