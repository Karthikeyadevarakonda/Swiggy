import PlayStore from './assets/icon-GooglePlay_1_zixjxl (1).avif'
import AppStore from './assets/icon-AppStore_lg30tv.avif'

const LowerFotter = () => {
  return (
    <div className='flex items-center justify-center w-full pt-8'>
      <h1 className='font-bold text-lg text-[#444444]'>For better experience, download the Swiggy app now</h1>
      <img className='w-34 pl-4' src={PlayStore} alt="" />
      <img className='w-34 pl-4' src={AppStore} alt="" />
    </div>
  )
}

export default LowerFotter
