import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai'
import { BsHouseDoor } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
const Search = () => {
  return (
    <div className="searchDiv grid gap-5 bg-greyIsh rounded-[10px] p-[3rem]">
      <form action="">
        {/*Search by job */}
        <div className="firstDiv flex justify-between items-center rounded-[8px]
          gap-[10px] bg-white p-5 shadow-md hover:shadow-lg shadow-greyIsh-700">
          
          {/*Search by Jobs */}
          <div className="flex gap-2 items-center">
            <AiOutlineSearch className='text-[25px] text-[#a5a6a6] hover:text-textColor icon'/>

            <input type='text' className='bg-transparent text-blue-500 
             w-100 focus:outline-none' placeholder='Search your next job..'/>

            <AiOutlineCloseCircle className='text-[25px] text-[#a5a6a6] 
            hover:text-textColor icon'/>
          </div>

          {/*Search by company */}
          <div className="flex gap-2 items-center">
            <BsHouseDoor className='text-[25px] text-[#a5a6a6] hover:text-textColor icon'/>

            <input type='text' className='bg-transparent text-blue-500 
             w-100 focus:outline-none' placeholder='Search by company...'/>

            <AiOutlineCloseCircle className='text-[25px] text-[#a5a6a6] 
            hover:text-textColor icon'/>
          </div>

          {/*Search by location */}
          <div className="flex gap-2 items-center">
            <CiLocationOn className='text-[25px] text-[#a5a6a6] hover:text-textColor icon'/>

            <input type='text' className='bg-transparent text-blue-500 
             w-100 focus:outline-none' placeholder='Search by location...'/>

            <AiOutlineCloseCircle className='text-[25px] text-[#a5a6a6] 
            hover:text-textColor icon'/>
          </div>

          <button className='bg-blueColor h-full p-2 px-5 rounded-[5px] 
          text-white text-[17px] cursor-pointer hover:bg-blue-300'>Search</button>
        </div>
      </form>

      <div className='secDiv flex items-center gap-10 justify-center'>

        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor='relevance' className='text-[#808080] font-samibold'>Sort By:</label>

          <select name='' 
            id='relevance' 
            className='bg-white rounded-[3px] px-4 py-1'
          >
            <option>Relevance</option>
            <option>Inclusive</option>
            <option>Stars With</option>
            <option>Contains</option>
          </select>
        </div>

        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor='type' className='text-[#808080] font-samibold'>Type:</label>

          <select name='' 
            id='type' 
            className='bg-white rounded-[3px] px-4 py-1'
          >
            <option>Full-Time</option>
            <option>Remote</option>
            <option>Contract</option>
            <option>Part-time</option>
          </select>
        </div>

        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor='level' className='text-[#808080] font-samibold'>Level:</label>

          <select name='level' 
            id='' 
            className='bg-white rounded-[3px] px-4 py-1'
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Senior</option>
            <option>Expert</option>
          </select>
        </div>

        <span className='text-[#a1a1a1] cursor-pointer'>Clear All</span>

      </div>
    </div>
  )
};

export default Search;
