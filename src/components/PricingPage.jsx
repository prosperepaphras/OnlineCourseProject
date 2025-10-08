import React from 'react'

const PricingPage = () => {
  return (
    <>
    <div className="bg-[#f7f7f8] place-items-center px-[5%] pb-10">
            <div className=" grid md:grid-cols-3 md:gap-10 p-3 mb-5">
        <h1 className='text-[28px] md:text-[34px] lg:text-[44px] mb-3 font-medium col-span-1'>Our Pricings</h1>
        <p className='text-[14px] md:text-[16px] lg:text-[18px] text-pretty col-span-2'>Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.</p>
      </div>
      <div className="bg-[#ffffff] w-[200px] p-3 flex items-center rounded-[10px] space-x-3 justify-center self-center mb-3">
        <a href=" " className=" bg-[#ff9500] p-3 rounded"> Monthly</a>
        <a href=" " className=" bg-[#ffffff] p-3 rounded"> Yearly</a>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 place-self-center p-5 bg-[#ffffff] rounded-[18px] gap-7 md:w-[80%]'>
        <div className=" bg-[#f7f7f8] p-5 rounded-[15px] place-items-center ">

          {/* Free Plan  */}

          <h1 className='text-[16px] bg-[#FFF9F0] text-center p-2 w-4/5 border border-[#fff1db] '>Free Plan</h1>
          <h2><span className=' font-bold text-[50px] '>$0</span>/month</h2>
          <div className=" flex flex-col items-center space-y-3 bg-[#ffffff] p-3 rounded-[15px]">
            <h1 className='font-bold text-[18px]'>Available Features</h1>
            <p className='border text-[14px] text-[#4C4C4D] border-[#f7f7f8] rounded-[10px] flex p-1 w-4/5 items-center justify-center space-x-3'><i className="bx bx-check p-1 bg-[#FFF4E5] "></i> <h2 className=''>Access to selected free courses</h2></p>
            <p className='border text-[14px] text-[#4C4C4D] border-[#f7f7f8] rounded-[10px] flex p-1 w-4/5 items-center justify-center space-x-3'><i className="bx bx-check p-1 bg-[#FFF4E5] "></i> <h2 className=''>Access to selected free courses</h2></p>
            <p className='border text-[14px] text-[#4C4C4D] border-[#f7f7f8] rounded-[10px] flex p-1 w-4/5 items-center justify-center space-x-3'><i className="bx bx-check p-1 bg-[#FFF4E5] "></i> <h2 className=''>Access to selected free courses</h2></p>
            <p className='border text-[14px] text-[#4C4C4D] border-[#f7f7f8] rounded-[10px] flex p-1 w-4/5 items-center justify-center space-x-3'><i className="bx bx-check p-1 bg-[#FFF4E5] "></i> <h2 className=''>Access to selected free courses</h2></p>
            <p className='border text-[14px] text-[#4C4C4D] border-[#f7f7f8] rounded-[10px] flex p-1 w-4/5 items-center justify-center space-x-3'><i className="bx bx-check p-1 bg-[#FFF4E5] "></i> <h2 className=''>Access to selected free courses</h2></p>
            <p className='border text-[14px] text-[#4C4C4D] border-[#f7f7f8] rounded-[10px] flex p-1 w-4/5 items-center justify-center space-x-3'><i className="bx bx-check p-1 bg-[#FFF4E5] "></i> <h2 className=''>Access to selected free courses</h2></p>
            <p className='border text-[14px] text-[#4C4C4D] border-[#f7f7f8] rounded-[10px] flex p-1 w-4/5 items-center justify-center space-x-3'><i className="bx bx-check p-1 bg-[#FFF4E5] "></i> <h2 className=''>Access to selected free courses</h2></p>
            <p className='border text-[14px] text-[#4C4C4D] border-[#f7f7f8] rounded-[10px] flex p-1 w-4/5 items-center justify-center space-x-3'><i className="bx bx-check p-1 bg-[#FFF4E5] "></i> <h2 className=''>Access to selected free courses</h2></p>

            {/* Button  */}

            <a href="" className="bg-[#FF9500] p-3 w-full text-center text-white rounded-[10px]">Get Started </a>

          </div>
        </div>

        {/* Pro plan */}

        <div className=" bg-[#f7f7f8] p-5 rounded-[15px] place-items-center ">
          <h1 className='text-[16px] bg-[#FFF9F0] text-center p-2 w-4/5 border border-[#fff1db] '>Pro Plan</h1>
          <h2><span className=' font-bold text-[50px]'>$79</span>/month</h2>
          <div className=" flex flex-col items-center space-y-3 bg-[#ffffff] p-3 rounded-[15px]">
            <h1 className='font-bold text-[18px]'>Available Features</h1>
            <p className='border text-[14px] text-[#4C4C4D] border-[#f7f7f8] rounded-[10px] flex p-1 w-4/5 items-center justify-center space-x-3'><i className="bx bx-check p-1 bg-[#FFF4E5] "></i> <h2 className=''>Access to selected free courses</h2></p>
            <p className='border text-[14px] text-[#4C4C4D] border-[#f7f7f8] rounded-[10px] flex p-1 w-4/5 items-center justify-center space-x-3'><i className="bx bx-check p-1 bg-[#FFF4E5] "></i> <h2 className=''>Access to selected free courses</h2></p>
            <p className='border text-[14px] text-[#4C4C4D] border-[#f7f7f8] rounded-[10px] flex p-1 w-4/5 items-center justify-center space-x-3'><i className="bx bx-check p-1 bg-[#FFF4E5] "></i> <h2 className=''>Access to selected free courses</h2></p>
            <p className='border text-[14px] text-[#4C4C4D] border-[#f7f7f8] rounded-[10px] flex p-1 w-4/5 items-center justify-center space-x-3'><i className="bx bx-check p-1 bg-[#FFF4E5] "></i> <h2 className=''>Access to selected free courses</h2></p>
            <p className='border text-[14px] text-[#4C4C4D] border-[#f7f7f8] rounded-[10px] flex p-1 w-4/5 items-center justify-center space-x-3'><i className="bx bx-check p-1 bg-[#FFF4E5] "></i> <h2 className=''>Access to selected free courses</h2></p>
            <p className='border text-[14px] text-[#4C4C4D] border-[#f7f7f8] rounded-[10px] flex p-1 w-4/5 items-center justify-center space-x-3'><i className="bx bx-check p-1 bg-[#FFF4E5] "></i> <h2 className=''>Access to selected free courses</h2></p>
            <p className='border text-[14px] text-[#4C4C4D] border-[#f7f7f8] rounded-[10px] flex p-1 w-4/5 items-center justify-center space-x-3'><i className="bx bx-check p-1 bg-[#FFF4E5] "></i> <h2 className=''>Access to selected free courses</h2></p>
            <p className='border text-[14px] text-[#4C4C4D] border-[#f7f7f8] rounded-[10px] flex p-1 w-4/5 items-center justify-center space-x-3'><i className="bx bx-check p-1 bg-[#FFF4E5] "></i> <h2 className=''>Access to selected free courses</h2></p>

            <a href="" className="bg-[#FF9500] p-3 w-full text-center text-white rounded-[10px]">Get Started </a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default PricingPage