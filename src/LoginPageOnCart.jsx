import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot,faUser,faWallet } from "@fortawesome/free-solid-svg-icons"; 

const LoginPageOnCart = () => {
  return (
    <div className=' flex-1/2 relative h-[475px]'>
    <div className='flex flex-col justify-between h-full pl-16'>
     <div className='Box1 w-full h-48 bg-white px-10 py-5'>
       <div className=' w-full h-full '>
         <div className='flex h-full'>
           <div className=' flex-1/2 h-full flex flex-col justify-between'>
             <div>
               <h1 className='font-bold'>ACCOUNT</h1>
               <p className='text-gray-500 font-normal'>To place your order now, log in to your existing account or sign up.</p>
             </div>
             <div className='flex gap-5 pb-4'>
                <div className='border border-[#1BA672] px-8 py-0.5 text-[#1BA672] '>
                 <p className='text-center'>Have an account?</p>
                 <p className='text-center font-bold -translate-y-1'>LOG IN</p>
                </div>
                <div className='border border-[#1BA672] px-8 py-0.5 text-white bg-[#1BA672] '>
                 <p className='text-center'>New to swiggy?</p>
                 <p className='text-center font-bold -translate-y-1'>SIGN UP</p>
                </div>
             </div>
           </div>
           <div className=''>
             <img className='' imageid="Image-login_btpq7r" height="140" width="147" imageurl="" alt="img renderer" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r"></img>
           </div>
         </div>
       </div>
     </div>
     <div className='Box2 w-full h-30 bg-white flex items-center '>
       <h1 className='font-bold text-gray-400 text-lg pl-10'>Delivery address</h1>
     </div>
     <div className='Box3 w-full h-30 bg-white flex items-center'>
     <h1  className='font-bold text-gray-400 text-lg pl-10'>Payment</h1>
     </div>
    </div>
    <div className='icon1 absolute w-12 h-11 top-12 left-8 shadow-[4px_4px_10px_rgba(0,0,0,0.15),5px_0px_12px_rgba(0,0,0,0.10)] bg-black flex justify-center items-center'>
    <span ><FontAwesomeIcon icon={faUser} className='text-2xl text-white '/></span>
    </div>
    <div className='icon2 z-1 absolute w-12 h-10 bottom-45 left-8 shadow-[4px_4px_10px_rgba(0,0,0,0.15),5px_0px_12px_rgba(0,0,0,0.10)] bg-white flex items-center justify-center'>
    <span ><FontAwesomeIcon icon={faLocationDot} className='text-2xl text-black'/></span>
    </div>
    <div className='icon3 absolute w-12 h-10  bottom-10 left-8 shadow-[4px_4px_10px_rgba(0,0,0,0.15),5px_0px_12px_rgba(0,0,0,0.10)] bg-white flex justify-center items-center'>
    <span ><FontAwesomeIcon icon={faWallet} className='text-xl text-black'/></span>
    </div>
    <div className='iconBorder w-14 h-[63%] border-r border-dashed absolute top-23 left-0'></div>
  </div>

  )
}

export default LoginPageOnCart
