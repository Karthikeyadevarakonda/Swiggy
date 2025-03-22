
import Not from "./assets/Not.svg";
const Notification = () => {
  return (
    <div className="mt-10">
    <h1 className="font-bold text-center w-full  text-amber-500 tracking-widest text-2xl mb-10">
      CHECK YOUR CONNECTION.....!
    </h1>
    <img src={Not} alt="" className="w-full h-80" />
  </div>
  )
}

export default Notification
