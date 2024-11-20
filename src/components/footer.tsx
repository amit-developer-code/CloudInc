import "bootstrap/dist/css/bootstrap.min.css"
import Image from "next/image";
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer className="bg-[#F9F9F9] sm:px-20  px-6 pt-20 pb-[10px]">
        <div className="container-fluid">
          <div className="row justify-between border-b-[1px] border-[#969696] pb-10">
            <div className="col-md-3">
              <div className="">
                <div>
                  <Image
                    src="/assets/images/CloudInc.svg"
                    width={110}
                    height={110}
                    alt="no-img"
                  />
                  <div className="flex items-center pt-2">
                    <span>
                      <Image
                        src="/assets/images/phone.svg"
                        width={20}
                        height={20}
                        alt="no-img"
                      />
                    </span>
                    <p className='ff-Regular text-[14px] text-[#373737] leading-[28px] pt-3 ps-2'>Customer service: <span className="text-[#000] ff-SB">+91 983 960 100</span></p>
                  </div>

                </div>

                <div className="mt-10">
                  <p className='ff-SB  text-[#0D0D0D] text-[15px]  mb-0'>Follow Us:</p>
                  <div className="mt-3 flex">
                    <Link href="" className="">
                      <Image
                        src="/assets/images/fb.svg"
                        width={10}
                        height={10}
                        alt="no-img"
                      />
                    </Link>
                    <Link href="" className="mx-[10px]">
                      <Image
                        src="/assets/images/insta.svg"
                        width={20}
                        height={20}
                        alt="no-img"
                      />
                    </Link>
                    <Link href="" className="mx-[10px] pt-1">
                      <Image
                        src="/assets/images/tw.svg"
                        width={20}
                        height={20}
                        alt="no-img"
                      />
                    </Link>
                    <Link href="" className="mx-[10px]">
                      <Image
                        src="/assets/images/in.svg"
                        width={20}
                        height={20}
                        alt="no-img"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row sm:pt-0 pt-8">
                <div className="col-md-3">
                  <div className="sm:my-0 my-2">
                    <p className='ff-SB uppercase text-[#0D0D0D] text-[15px]  sm:mb-0'>Company</p>
                    <div className="sm:mt-[20px]">
                      <Link href="" className="no-underline"><span className='ff-Regular text-[14px] text-[#404040] leading-[28px] block'>About Us</span></Link>
                      <Link href="" className="no-underline"><span className='ff-Regular text-[14px] text-[#404040] leading-[28px] block'>Careers</span></Link>
                      <Link href="" className="no-underline"><span className='ff-Regular text-[14px] text-[#404040] leading-[28px] block'>Press</span></Link>

                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="sm:my-0 my-2">
                    <p className='ff-SB uppercase text-[#0D0D0D] text-[15px]  mb-0'>Product</p>
                    <div className="mt-[20px]">
                      <Link href="" className="no-underline"> <span className='ff-Regular text-[14px] text-[#404040] leading-[28px] block'>How It Works</span></Link>
                      <Link href="" className="no-underline"><span className='ff-Regular text-[14px] text-[#404040] leading-[28px] block'>Pricing</span></Link>

                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="sm:my-0 my-2">
                    <p className='ff-SB uppercase text-[#0D0D0D] text-[15px]  mb-0'>Resources</p>
                    <div className="mt-[20px]">
                      <Link href="" className="no-underline"><span className='ff-Regular text-[14px] text-[#404040] leading-[28px] block'>Education</span></Link>
                      <Link href="" className="no-underline"><span className='ff-Regular text-[14px] text-[#404040] leading-[28px] block'>Guides</span></Link>
                      <Link href="" className="no-underline"><span className='ff-Regular text-[14px] text-[#404040] leading-[28px] block'>Tools</span></Link>
                      <Link href="" className="no-underline"><span className='ff-Regular text-[14px] text-[#404040] leading-[28px] block'>Customer Reviews </span></Link>




                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="sm:my-0 my-2">
                    <p className='ff-SB uppercase text-[#0D0D0D] text-[15px]  mb-0'>Partners</p>
                    <div className="mt-[20px]">
                      <Link href="" className="no-underline"><span className='ff-Regular text-[14px] text-[#404040] leading-[28px] block'>Refer A Friend</span></Link>
                      <Link href="" className="no-underline"> <span className='ff-Regular text-[14px] text-[#404040] leading-[28px] block'>Partner Marketplace</span></Link>
                      <Link href="" className="no-underline"><span className='ff-Regular text-[14px] text-[#404040] leading-[28px] block'>Embedded Bookkeeping</span></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-center">
            <div className="col-md-10">
              <div className="sm:flex justify-between sm:text-center  py-6">
                <span className='ff-Regular text-[12px] text-[#404040] leading-[28px] block'>© Cloudbss 2022-2024</span>
                <span className='ff-Regular text-[12px] text-[#404040] leading-[28px] block'>Terms of Service</span>
                <span className='ff-Regular text-[12px] text-[#404040] leading-[28px] block'>Privacy Policy</span>
                <span className='ff-Regular text-[12px] text-[#404040] leading-[28px] block'>Terms of Use</span>
                <span className='ff-Regular text-[12px] text-[#404040] leading-[28px] block'>Cookie Policy</span>
                <span className='ff-Regular text-[12px] text-[#404040] leading-[28px] block'>Security</span>
                <span className='ff-Regular text-[12px] text-[#404040] leading-[28px] block'>Do Not Sell or Share My Personal Information</span>

              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
