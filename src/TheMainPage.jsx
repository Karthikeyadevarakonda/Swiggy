import React, { lazy, useState ,Suspense} from 'react'
import Left from './assets/Left.png'
import Right from './assets/Right.png'
import Sushi from './assets/Sushi_replace.png'
import Vegie from './assets/Veggies_new.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swiggy_Logo from './assets/Swiggy_logo_bml6he.png'
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"; 
import { FETCH_URL } from './Utils/Constants'
import AppBanner from './assets/App_download_banner.png'
import Fotter from './Fotter'
import LowerFotter from './LowerFotter';
import MiddleFotter from './MiddleFotter'
const MainPageSlider = lazy(()=>import("./MainPageSlider"))

const TheMainPage = ({setMainBtn}) => {
const [sliderData,setSliderData] = useState([])



const Loader = () => <div className="text-center text-gray-400 py-4">Loading...</div>;

async function fetchedData() {
    try {
      let FetchedData = await fetch(FETCH_URL);
      console.log("THEUS ",FetchedData)
      let JsonData = await FetchedData.json();
      setSliderData(JsonData.data?.cards[0]?.card?.card?.imageGridCards?.info);
    } catch (error) {
      console.log("ERROR IN FETCHING IN CATCH");
    } 
  }
fetchedData();

  return (
  <div>

 
    <div className='bg-[#FF5200] w-full h-[530px] '>
      <img src={Swiggy_Logo} alt="" className='w-28 left-30 top-7 absolute' />
      <img src={Vegie} alt="" className='absolute w-41 top-17 left-0'/>
      <img src={Sushi} alt="" className='absolute w-41 top-17 right-0'/>

      <div className='m-auto w-[580px] h-11 flex gap-4 translate-y-37'>
        <FontAwesomeIcon icon={faLocationDot} className='text-[#FF5200] absolute left-3 top-3 text-lg'/>
        <input type="text" placeholder='Nellore,AndraPradesh...' className='h-full outline-0 pl-8 bg-white rounded-xl w-[220px] truncate' />
        <input type="text" placeholder='Search for restaurant, item or more....' className='h-full outline-0 pl-4 bg-white rounded-xl flex-1 truncate'/>
      </div>
    
      <div className='flex w-[970px] h-77 m-auto  translate-y-40  justify-evenly'>
        <div><img src={Left} onClick={()=>setMainBtn(true)} alt="" className='w-full h-full cursor-pointer' /></div>
        <div><img src={Right} alt="" className='w-full h-full '/></div>
      </div>
    
    </div>
    <Suspense fallback={<Loader/>}>
    <div className='w-full mt-20 mb-8'>{sliderData && 
     <MainPageSlider sliderData={sliderData}/>
      }</div>
      </Suspense>
   
    <div><img src={AppBanner} alt="" /></div>
    <div>
    
  
    <Fotter/>
    <MiddleFotter/>
  <div className='pb-5 bg-[#F0F0F5]'>
    <LowerFotter/>
  </div>
    </div>
    </div>
  )
}



export default TheMainPage
