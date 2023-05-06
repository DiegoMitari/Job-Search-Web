import { BiTimeFive } from 'react-icons/bi'
import line from '../../assets/line.png'

// All the jobs
const Data = [
  {
    id: 1,
    image: line,
    title: 'Web Developer',
    time: 'Now',
    location: 'Canada',
    desc: `We are looking for a Junior programmer. The contract job 20 - 35 hours per week. 
           Must be fast and proficient with HTML and CSS. The junior developer will be 
           required to work on a mobile application that uses Ionic Cordova and Angular.`,
    company: 'Novac Linus co.'
  },
  {
    id: 2,
    image: line,
    title: 'Freelance Web Designer',
    time: 'Now',
    location: 'Canada',
    desc: `We are currently seeking a Freelance Designer to join our team at Loopdash. 
           As a designer dedicated to building for the web, you will be responsible 
           for working directly with client stakeholders, project managers, and developers 
           to drive project success. This role is expected to fluctuate. 
           Only candidates with a portfolio/website will be considered.`,
    company: 'Loopdash'
  },
  {
    id: 3,
    image: line,
    title: 'Junior Web Developer',
    time: 'Now',
    location: 'Remote',
    desc: `Clue Dental Marketing, Inc is seeking a talented and passionate Web Designer
           to join our team! We are a well-established dental marketing company, 
           providing website, SEO, and other marketing services to our clients. 
           As a team member you'll have the opportunity to develop exceptional dental websites 
           and to create outstanding user experiences that convert visitors to patients.`,
    company: 'Clue Dental Marketing'
  },
  {
    id: 4,
    image: line,
    title: 'User Interface Designer',
    time: 'Now',
    location: 'Remote',
    desc: `We’re passionate engineers, developers, researchers, retailers, marketers … and dreamers. 
           One goal unites us — to create products and experiences our customers simply can’t get 
           anywhere else. We are driven to help people reach their fullest human potential. 
           Creating technology to help people to feel more, do more, and be more.`,
    company: 'Novac Linus co.'
  },
];

const Jobs = () => {
  return (
    <div className="">
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {
          Data.map((element) => {
            return (
              <div key={element.id} className="group group/item singleJob h-[500px] w-[260px] p-[20px] bg-white rounded-lg
                hover:bg-blueColor shadow shadow-greyIsh hover:shadow-lg"
              >

                <span className="flex justify-between items-center gap-4">
                  <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                    {element.title}
                  </h1>
                  <span className='flex items-center text-[#ccc] gap-1'>
                    <BiTimeFive />{element.time}
                  </span>
                </span>
                <h6 className='text-[#ccc] text-[14px]'>{element.location}</h6>

                <p className='text-[13px] text-[#959595] py-[20px] h-[250px] border-t-[2px] m-[18px] 
                  group-hover:text-white overflow-hidden'
                >
                  {element.desc}
                </p>

                <div className="company flex items-center gap-2">
                  <img src={element.image} alt="Company logo" className="w-[10%]" />
                  <span className='text-[14px] group-hover:text-white py-[1rem] block'>
                    {element.company}
                  </span>
                </div>

                <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] 
                  font-semibold hover:bg-greyIsh'
                >
                  Apply Now
                </button>

              </div>
            )
          })
        }
      </div>
    </div>
  )
};

export default Jobs;
