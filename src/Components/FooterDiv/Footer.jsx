
import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from "react-icons/ai"

const Footer = () => {
  return (
    <div className="footer p-[3rem] py-6 mb-4 bg-blueColor rounded-[10px] gap-5 flex
     m-auto items-center justify-center"
    >
      <div className="logoDiv-container mx-[1.8rem]">
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-white pb-[1.5rem]">
            <strong>Job</strong>Search
          </h1>
        </div>

        <p className="text-greyIsh pb-[13px] opacity-[.7] leading-relaxed">
          We always make our seekers and companies find the best
          jobs and employers find the best candidates.
        </p>
      </div>

      <div className="footer-main flex justify-between">
        <div className="flex md:mx-[1rem]">
          {/* First Column */}
          <div className="column-list-footer grid mx-[1.75rem]">
            <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
              Company
            </span>

            <div className="grid gap-1 sm:gap-2">
              <li className="footer-list text-white opacity-[.7] hover:opacity-[1]">About Us</li>
              <li className="footer-list text-white opacity-[.7] hover:opacity-[1]">Features</li>
              <li className="footer-list text-white opacity-[.7] hover:opacity-[1]">News</li>
              <li className="footer-list text-white opacity-[.7] hover:opacity-[1]">FAQ</li>
            </div>
          </div>

          {/* Second Column */}
          <div className="column-list-footer grid mx-[1.75rem]">
            <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
              Resources
            </span>

            <div className="grid gap-1 sm:gap-2">
              <li className="footer-list text-white opacity-[.7] hover:opacity-[1]">Account</li>
              <li className="footer-list text-white opacity-[.7] hover:opacity-[1]">Support Center</li>
              <li className="footer-list text-white opacity-[.7] hover:opacity-[1]">Feedback</li>
              <li className="footer-list text-white opacity-[.7] hover:opacity-[1]">Contact Us</li>
            </div>
          </div>

          {/* Third Column */}
          <div className="column-list-footer grid mx-[1.75rem]">
            <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
              Support
            </span>

            <div className="grid gap-1 sm:gap-2">
              <li className="footer-list text-white opacity-[.7] hover:opacity-[1]">Events</li>
              <li className="footer-list text-white opacity-[.7] hover:opacity-[1]">Promo</li>
              <li className="footer-list text-white opacity-[.7] hover:opacity-[1]">Req Demo</li>
              <li className="footer-list text-white opacity-[.7] hover:opacity-[1]">Careers</li>
            </div>
          </div>
        </div>

        {/* fourth Column */}
        <div className="grid mx-[1rem]">
          <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
            Contact Info
          </span>

          <div>
            <small className="text-[14px] text-white">
              diego89ma@gmail.com
            </small>

            <div className="icons flex items-center gap-4 mt-[1rem]">
              <AiFillTwitterCircle className="bg-white p-[6px] h-[35px] w-[35px] rounded-full icon text-blueColor" />
              <AiFillGithub className="bg-white p-[6px] h-[35px] w-[35px] rounded-full icon text-blueColor" />
              <AiFillLinkedin className="bg-white p-[6px] h-[35px] w-[35px] rounded-full icon text-blueColor" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Footer;
