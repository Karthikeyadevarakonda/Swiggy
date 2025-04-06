import { BASE_URL } from "./Utils/Constants"

const MainPageSlider = ({sliderData}) => {
  return (
    
            <>
              <section className='custom-scrollbar h-90 w-4/5 m-auto flex flex-wrap flex-col overflow-x-auto p-2 '>
               {sliderData.map((obj)=>{
                return <img className="w-30 h-38 " key={obj.id} src={BASE_URL+obj.imageId} width="144" height="180" alt="restaurants curated for tea"/>
              })}
             </section>
            </>
    
  )
}

export default MainPageSlider
