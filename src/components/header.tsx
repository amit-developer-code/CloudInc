"use client";
import Image from "next/image";
import Link from 'next/link'
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Header1() {
  const [width, setWidth] = useState(560);
  const [menu, setMenu] = useState(false);
  const updateDimensions = () => {
    console.log("call update dem")
    setWidth(window.innerWidth);
    console.log("width,", window.innerWidth)
  };

  useEffect(() => {
    // Only runs on the client side

    if (typeof window !== "undefined") {
      console.log("called")
      setWidth(window.innerWidth);
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
    }
  }, []);

  const menuToggle = () => {
    setMenu(!menu);
  };
  return (
    <div>
      <header className="absolute bg-[#FFF1DE] w-100  py-6 items-center sm:px-20 px-[10px] ">
        <div className="container-fluid ">
          <div className="row items-center justify-between">
            <div className="col-md-2">
              <div className="row ">
                <div className="col-md-9 col-5">
                  <Link href="/">
                    <Image
                      src="/assets/images/logo.svg"
                      width={140}
                      height={50}
                      alt="no-img"
                    /></Link>
                </div>
              </div>
              <div className="sm:hidden block absolute right-[22px] top-[30px]" onClick={menuToggle} >
                {menu ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" stroke="#000" /><path d="M6 6l12 12" stroke="#000" /></svg> :
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 8l16 0" /><path d="M4 16l16 0" /></svg>}
              </div>
            </div>
            <div className="col-md-10">
              <div className={(width < 500) ? menu ? "row flex justify-between items-center absolute bg-[#fff] w-100 left-0 top-[80px] pt-10 pb-28 " : "hidden " : "row flex justify-between items-center"}>
                <div className="col-md-7">
                  <div className="text-start items-center sm:flex justify-between ps-8">
                    <Link href="/" className=" no-underline block sm:pt-[0px] pt-[10px]">
                      <span className="ff-type font-[100] text-[#000] text-end text-[13px]  ">
                        Pricing
                      </span>
                    </Link>
                    <span className="block sm:pt-[7px] pt-[15px] menulist  ff-type font-[100] cursor-pointer  text-[#000] text-start text-[13px] ">
                      Services-
                      <div className="menu-item  relative sm:absolute py-[12px]  sm:top-[60px]">

                        <ul className="rounded-lg max-w-md  bg-[#fff] border-1 border-[#A2A2A2] px-4 py-3 z-10">
                          <li className="pt-[5px]">
                            <Link
                              href="/"
                              className="ff-Regular no-underline sm:text-[12px]   text-[#000000]"
                            >Marketplace Registration
                            </Link>
                          </li>
                          <li className="pt-[5pxx]">
                            <Link
                              href="/"
                              className="ff-Regular no-underline sm:text-[12px]   text-[#000000]"
                            >Product Listing & Cataloguing.
                            </Link>
                          </li>
                          <li className="pt-[5pxx]">
                            <Link
                              href="/"
                              className="ff-Regular no-underline sm:text-[12px]   text-[#000000]"
                            >Brand Store Creation & Optimization
                            </Link>
                          </li>
                          <li className="pt-[5pxx]">
                            <Link
                              href="/"
                              className="ff-Regular no-underline sm:text-[12px]   text-[#000000]"
                            >Marketplace Complete Account Management Services
                            </Link>
                          </li>
                          <li className="pt-[5pxx]">
                            <Link
                              href="/"
                              className="ff-Regular no-underline sm:text-[12px]   text-[#000000]"
                            >Amazon/Flipkart Account Reinstatement Services
                            </Link>
                          </li>



                        </ul>
                      </div>
                    </span>

                    <span className="block sm:pt-[7px] pt-[15px] menulist ff-type font-[100] cursor-pointer  text-[#000] text-start text-[13px] ">
                      Resources-
                      <div className="menu-item   relative sm:absolute py-[12px]  sm:top-[60px]">

                        <ul className="rounded-lg max-w-md  bg-[#fff] border-1 border-[#A2A2A2] px-4 py-3 z-10">
                          <li className="pt-[5px]">
                            <Link
                              href="/"
                              className="ff-Regular no-underline sm:text-[12px]   text-[#000000]"
                            >Marketplace Registration
                            </Link>
                          </li>
                          <li className="pt-[5pxx]">
                            <Link
                              href="/"
                              className="ff-Regular no-underline sm:text-[12px]   text-[#000000]"
                            >Product Listing & Cataloguing.
                            </Link>
                          </li>
                          <li className="pt-[5pxx]">
                            <Link
                              href="/"
                              className="ff-Regular no-underline sm:text-[12px]   text-[#000000]"
                            >Brand Store Creation & Optimization
                            </Link>
                          </li>
                          <li className="pt-[5pxx]">
                            <Link
                              href="/"
                              className="ff-Regular no-underline sm:text-[12px]   text-[#000000]"
                            >Marketplace Complete Account Management Services
                            </Link>
                          </li>
                          <li className="pt-[5pxx]">
                            <Link
                              href="/"
                              className="ff-Regular no-underline sm:text-[12px]   text-[#000000]"
                            >Amazon/Flipkart Account Reinstatement Services
                            </Link>
                          </li>



                        </ul>
                      </div>
                    </span>


                    <span className="block sm:pt-[7px] pt-[15px] menulist ff-type font-[100] cursor-pointer  text-[#000] text-start text-[13px] ">
                      Community-
                      <div className="menu-item   relative sm:absolute py-[12px]  sm:top-[60px]">

                        <ul className="rounded-lg max-w-md  bg-[#fff] border-1 border-[#A2A2A2] px-4 py-3 z-10">
                          <li className="pt-[5pxx]">
                            <Link
                              href="/"
                              className="ff-Regular no-underline sm:text-[12px]   text-[#000000]"
                            >Marketplace Registration
                            </Link>
                          </li>
                          <li className="pt-[5pxx]">
                            <Link
                              href="/"
                              className="ff-Regular no-underline sm:text-[12px]   text-[#000000]"
                            >Product Listing & Cataloguing.
                            </Link>
                          </li>
                          <li className="pt-[5pxx]">
                            <Link
                              href="/"
                              className="ff-Regular no-underline sm:text-[12px]   text-[#000000]"
                            >Brand Store Creation & Optimization
                            </Link>
                          </li>
                          <li className="pt-[5pxx]">
                            <Link
                              href="/"
                              className="ff-Regular no-underline sm:text-[12px]   text-[#000000]"
                            >Marketplace Complete Account Management Services
                            </Link>
                          </li>
                          <li className="pt-[5pxx]">
                            <Link
                              href="/"
                              className="ff-Regular no-underline sm:text-[12px]   text-[#000000]"
                            >Amazon/Flipkart Account Reinstatement Services
                            </Link>
                          </li>



                        </ul>
                      </div>
                    </span>
                    <Link href="/" className=" no-underline block sm:pt-[0px] pt-[15px]">
                      <div className="flex text-start items-center pt-2">
                        <span className="ff-type font-[100] text-[#000] text-end text-[13px]  ">
                          Tax Seasons
                        </span>
                        <span className="ps-2">
                          <Image
                            src="/assets/images/taxlogo.svg"

                            width={15}
                            height={15}
                            alt="no-img"
                          />
                        </span>
                      </div>
                    </Link>

                  </div>
                </div>

                <div className="col-md-5 pe-0">
                  <div className="sm:text-end items-center sm:flex sm:justify-end">
                    <Link href="/" className=" no-underline block sm:pt-[0px] pt-[15px]">
                      <span className="ff-type font-[100] text-[#000] text-end text-[12px]  px-8">
                        Log In
                      </span>
                    </Link>
                    <Link href="/" className=" no-underline block sm:pt-[0px] pt-[15px]">
                      <span className="ff-type font-[100] text-[#000] text-end text-[12px] sm:ps-0 ps-8 pe-8">
                        1 (888) 760 1940
                      </span>
                    </Link>
                    <Link href="/" className="block sm:pt-[0px] pt-[15px]" ><button className="ff-type sm:ms-0 ms-8 font-[100] bg-[#E0AA63] text-[12px] text-[#000]  rounded-[5px] px-[15px] py-[10px]" type="button">Start a free version</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header >

    </div >
  );
}
