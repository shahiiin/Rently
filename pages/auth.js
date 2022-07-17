import Image from "next/image"
import Search from '../public/assets/Search.svg'
import pic6 from '../public/assets/pic6.svg'
import pic7 from '../public/assets/pic7.svg'

function auth() {
  return (
    <div className='flex justify-center items-center flex-col'>
      <div className='mt-20 font-bold text-3xl text-purple'>
        <p>Hi! who are you?</p>
      </div>
      <div className="flex flex-col ">
        <div className='flex item-center mt-10 text-purple bg-light-gray w-[300px] h-[75px] rounded py-3' >
          <Image src={Search} alt='Search'/>
          <div>
          <p className="font-semibold">Tenant</p>
          <span>I am looking for a place to rent</span>
          </div>
        </div>
        <div className='flex item-center mt-5 text-purple bg-light-gray w-[300px] h-[75px] rounded py-3' >
          <Image src={pic7} alt='pic7'/>
          <div>
          <p className="font-semibold">Owner</p>
          <span>I want to rent out my place</span>
          </div>
        </div>
        <div className='flex item-center mt-5 text-purple bg-light-gray w-[300px] h-[75px] rounded py-3' >
          <Image src={pic6} alt='pic6'/>
          <div className="flex flex-col">
          <p className="font-semibold">Agent</p>
          <span>I want to make some $$$</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default auth