import simply from '../../assets/simply.png'
import web from '../../assets/web.png'
import security from '../../assets/security.png'

const Value = () => {
  return (
    <div className="mb-[2rem] mt-[2rem]">
      <h1 className="text-value text-textColor text-[25px] py-[1rem] pb-[3rem] 
        font-bold block opacity-[.7]"
      >
        Millions of people are searching for jobs, salary information, company reviews,
        and interview questions. See what others are looking for on JobSearch today.
      </h1>

      <div className="container-slider grid gap-[5rem] grid-cols-3 items-center">
        {/* first card */}
        <div className="singleGrid rounded-[10px] hover:bg-[#f7edf5] p-[1.5rem] px-[2.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[0.8rem] bg-[#dedef8] 
              h-[45px] w-[45px] flex items-center justify-center">
              <img src={simply} alt='' className="w-[85%]" />
            </div>

            <span className="font-semibold text-textColor text-[18px]">
              Simplicity
            </span>
          </div>

          <p className="text-[15px] text-textColor py-[1rem] opacity-[.7]">
            Things being made beautiful simple are at the heart of everything we do.
          </p>
        </div>

        {/* second card */}
        <div className="singleGrid rounded-[10px] hover:bg-[#f7edf5] p-[1.5rem]  px-[2.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[0.8rem] bg-[#dedef8] 
              h-[45px] w-[45px] flex items-center justify-center">
              <img src={web} alt='' className="w-[85%]" />
            </div>

            <span className="font-semibold text-textColor text-[18px]">
              Simplicity
            </span>
          </div>

          <p className="text-[15px] text-textColor py-[1rem] opacity-[.7]">
            We believe in making thins better for everyone, even if just by a little bit!.
          </p>
        </div>

        {/* third card */}
        <div className="singleGrid rounded-[10px] hover:bg-[#f7edf5] p-[1.5rem]  px-[2.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[0.8rem] bg-[#f7d1e1] 
              h-[45px] w-[45px] flex items-center justify-center">
              <img src={security} alt='' className="w-[85%]" />
            </div>

            <span className="font-semibold text-textColor text-[18px]">
              Inclution
            </span>
          </div>

          <p className="text-[15px] text-textColor py-[1rem] opacity-[.7]">
            We strongly encourage employers to embrace diversity, equity, and inclusion as fundamental values.
          </p>
        </div>
      </div>

      <div className='card-cta py-[4rem] px-[5rem] flex justify-between rounded-[10px]'>
        <div className='text-cta'>
          <h1 className='text-blueColor text-[30px] font-bold'>Ready to switch a career </h1>
          <h2 className='text-textColor text-[25px] font-bold'>Let's get started!</h2>
        </div>
        <div className='pt-[20px]'>
          <button className='border-[1px] py-[15px] px-[40px] rounded-[10px] text-[18px] 
          font-semibold text-blueColor border-blueColor hover:bg-white'>
            Get Started
          </button>
        </div>

      </div>
    </div>
  )
};

export default Value;
