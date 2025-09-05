import { CheckCircle, Flower, Truck } from "lucide-react"
import Banner from "../components/Banner"
import FeaturedProducts from "../components/FeaturedProducts"


const Homepage = () => {
  return (
    <div className='flex-1 bg-[#fefae0] overflow-x-hidden'>
        <Banner />


        <div className="w-full h-48 flex items-center justify-center">
            <div className="flex w-full max-w-4xl justify-evenly gap-8">
                <div className="flex flex-col items-center justify-center text-[#588157] text-center">
                    <img src="/../../public/icons/truck.png" alt="" />
                    <p className="text-sm font-semibold">Free shipping <br /> on all orders</p>
                </div>
                <div className="flex flex-col items-center justify-center text-[#588157] text-center">
                    <img src="/../../public/icons/flower.png" alt="" />
                    <p className="text-sm font-semibold">30-day guarantee</p>
                </div>
                <div className="flex flex-col items-center justify-center text-[#588157] text-center">
                    <img src="/../../public/icons/check.png" alt="" />
                    <p className="text-sm font-semibold">Care guide included <br /> with all orders</p>
                </div>
   
            </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
            <FeaturedProducts />
        </div>
    </div>
  )
}

export default Homepage