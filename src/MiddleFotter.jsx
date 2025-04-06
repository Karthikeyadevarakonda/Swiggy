import Group from './assets/Group.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebook, faTwitter, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons";

const MiddleFotter = () => {
  return (
    <div className='w-full bg-[#F0F0F5] h-[380px] pt-10'>

    <div className='w-5/7 m-auto h-[79%] flex justify-between  '>

      <div className='w-[30%] h-full'>
        <img src={Group} alt="" className='w-34' />
        <p className='text-xs font-semibold text-gray-500'>&copy; 2025 Swiggy Limited</p>
      </div>

      <div className='w-[15%] h-full  space-y-2'>
        <p className='w-full h-[21px] text-sm text-[#02060CEB] font-bold'>Company</p>
        <p className='w-full h-[21px] text-sm text-[#02060C99] font-semibold'>About Us</p>
        <p className='w-full h-[21px] text-sm text-[#02060C99] font-semibold'>Swiggy Corporate</p>
        <p className='w-full h-[21px] text-sm text-[#02060C99] font-semibold'>Careers</p>
        <p className='w-full h-[21px] text-sm text-[#02060C99] font-semibold'>Team</p>
        <p className='w-full h-[21px] text-sm text-[#02060C99] font-semibold'>Swiggy One</p>
        <p className='w-full h-[21px] text-sm text-[#02060C99] font-semibold'>Swiggy Instamart</p>
        <p className='w-full h-[21px] text-sm text-[#02060C99] font-semibold'>Swiggy Dineout</p>
        <p className='w-full h-[21px] text-sm text-[#02060C99] font-semibold'>Swiggy Genie</p>
        <p className='w-full h-[21px] text-sm text-[#02060C99] font-semibold'>Minis</p>
        <p className='w-full h-[21px] text-sm text-[#02060C99] font-semibold'>Pyng</p>
      </div>

      <div className='w-[15%] h-full  space-y-2'>
        <p className='w-full h-[21px]  text-sm text-[#02060CEB] font-bold'>Contact us</p>
        <p className='w-full h-[21px]  text-sm text-[#02060C99] font-semibold'>Help & Support</p>
        <p className='w-full h-[21px]  text-sm text-[#02060C99] font-semibold'>Partner with us</p>
        <p className='w-full h-[21px]  text-sm text-[#02060C99] font-semibold'>Ride with us</p>
        <p className='w-full h-[21px]  text-sm'></p>
        <p className='w-full h-[21px]  text-sm'></p>
        <p className='w-full h-[21px]  text-sm'></p>
        <p className='w-full h-[21px]  text-sm text-[#02060CEB] font-bold'>Legal</p>
        <p className='w-full h-[21px]  text-sm text-[#02060C99] font-semibold'>Terms & Conditions</p>
        <p className='w-full h-[21px]  text-sm text-[#02060C99] font-semibold'>Cookie Policy</p>
        <p className='w-full h-[21px]  text-sm text-[#02060C99] font-semibold'>Privacy Policy</p>
      </div>

      <div className='w-[15%] h-full  space-y-2'>
        <p className='w-full h-[21px]  text-sm text-[#02060CEB] font-bold'>Available in:</p>
        <p className='w-full h-[21px]  text-sm text-[#02060C99] font-semibold'>bangalore</p>
        <p className='w-full h-[21px]  text-sm text-[#02060C99] font-semibold'>gurgaon</p>
        <p className='w-full h-[21px]  text-sm text-[#02060C99] font-semibold'>hyderabad</p>
        <p className='w-full h-[21px]  text-sm text-[#02060C99] font-semibold'>delhi</p>
        <p className='w-full h-[21px]  text-sm text-[#02060C99] font-semibold'>mumbai</p>
        <p className='w-full h-[21px]  text-sm text-[#02060C99] font-semibold'>pune</p>
        <p className='w-full h-[21px]  text-sm'></p>
        <p className='w-full h-[21px]  text-sm'></p>
        <p className='w-full h-[21px]  text-sm'></p>
        <p className='w-full h-[21px]  text-sm'></p>
      </div>

      <div className='w-[15%] h-full  space-y-2'>
        <p className='w-full h-[21px]  text-sm text-[#02060CEB] font-bold'>Life at Swiggy</p>
        <p className='w-full h-[21px]  text-sm text-[#02060C99] font-semibold'>Explore with Swiggy</p>
        <p className='w-full h-[21px]  text-sm text-[#02060C99] font-semibold'>Swiggy News</p>
        <p className='w-full h-[21px]  text-sm text-[#02060C99] font-semibold'>Snackables</p>
        <p className='w-full h-[21px]  text-sm'></p>
        <p className='w-full h-[21px]  text-sm'></p>
        <p className='w-full h-[21px]  text-sm text-[#02060CEB] font-bold'>Social Links</p>
        <p className='w-full h-[21px]  flex justify-between'>
          <FontAwesomeIcon className='text-sm text-gray-700' icon={faLinkedin}/>
          <FontAwesomeIcon className='text-sm text-gray-700' icon={faInstagram}/>
          <FontAwesomeIcon className='text-sm text-gray-700' icon={faFacebook}/>
          <FontAwesomeIcon className='text-sm text-gray-700' icon={faPinterest}/>
          <FontAwesomeIcon className='text-sm text-gray-700' icon={faTwitter}/>  
        </p>
        <p className='w-full h-[21px]  '></p>
        <p className='w-full h-[21px]  '></p>
        <p className='w-full h-[21px]  '></p>
      </div>
      
    </div>
   
  </div>
  )
}

export default MiddleFotter
