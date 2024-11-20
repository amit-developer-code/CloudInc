
import Image from "next/image";
import Header from '../../components/header';
import Footer from '../../components/footer';
import Link from 'next/link'
import "bootstrap/dist/css/bootstrap.min.css"
export default function Home() {
    return (
        <>
            <Header />


            <section className="bg-[#fff] overflow-hidden px-20 py-40">
                <div className="container-fluid p-0">
                    <div className="row justify-start">
                        <div className="col-md-9">
                            <div className="text-start ">
                                <p className='ff-Syne text-[#000]  text-[40px] font-[700] mb-0'>About Us</p>
                                <div className="pt-[15px]">
                                    <p className='ff-Syne text-[16px] text-[#000] font-[400] leading-[25px]'>At E Retail Solutions, we empower brands to succeed on Amazon's, Flipkart, Meesho, Ajio ever-evolving marketplace. With a team of e-commerce experts, we specialize in maximizing sales, boosting visibility, and optimizing performance for businesses of all sizes. From listing optimization and PPC campaign management to inventory planning and customer support, we handle every detail to ensure our clients' success.</p>
                                    <p className='ff-Syne text-[16px] text-[#000] font-[400] leading-[25px]'>Our approach is data-driven, proactive, and tailored to each brand’s unique needs. Whether you're launching a new product or scaling an established brand, we provide the insights and strategies to achieve lasting growth. Trusted by brands worldwide, we are dedicated to helping you unlock the full potential of Amazon.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row justify-center pt-[30px]">
                        <div className="col-md-12">
                            <div className="row justify-start">
                                <div className="col-md-3">

                                    <div className="text-start  border-[#D6D4D4] h-[150px] px-10 py-8 rounded-[10px] hover:shadow hover:shadow-White-500/50">
                                        <div className="row justify-start">
                                            <div className="col-md-6">
                                                <div className="pt-[6px] sm:h-[40px] ">
                                                    <Image
                                                        src="/assets/images/flipkart 1.svg"
                                                        className="w-full"
                                                        width={1080}
                                                        height={1080}
                                                        alt="no-img"
                                                    />

                                                </div>
                                            </div>
                                        </div>
                                        <p className='ff-Syne text-[15px] font-[700] leading-[20px]'>Account management service on</p>

                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="text-start  border-[#D6D4D4] h-[150px] px-10 py-8 rounded-[10px] hover:shadow hover:shadow-White-500/50">
                                        <div className="row justify-start">
                                            <div className="col-md-6">
                                                <div className="pt-[6px] sm:h-[40px] ">
                                                    <Image
                                                        src="/assets/images/Amazon_logo 1.svg"
                                                        className="w-full"
                                                        width={1080}
                                                        height={1080}
                                                        alt="no-img"
                                                    />

                                                </div>
                                            </div>
                                        </div>
                                        <p className='ff-Syne  text-[15px] font-[700] leading-[20px]'>Account management service on</p>

                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="text-start  border-[#D6D4D4] h-[150px] px-10 py-8 rounded-[10px] hover:shadow hover:shadow-White-500/50">
                                        <div className="row justify-start">
                                            <div className="col-md-6">
                                                <div className="pt-[6px] sm:h-[40px] ">
                                                    <Image
                                                        src="/assets/images/messho.svg"
                                                        className="w-full"
                                                        width={1080}
                                                        height={1080}
                                                        alt="no-img"
                                                    />

                                                </div>
                                            </div>
                                        </div>
                                        <p className='ff-Syne  text-[15px] font-[700] leading-[20px]'>Account management service on</p>

                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="text-start  border-[#D6D4D4] h-[150px] px-10 py-8 rounded-[10px] hover:shadow hover:shadow-White-500/50">
                                        <div className="row justify-start">
                                            <div className="col-md-4">
                                                <div className="pt-[6px] sm:h-[40px] ">
                                                    <Image
                                                        src="/assets/images/etsy.svg"
                                                        className="w-full"
                                                        width={1080}
                                                        height={1080}
                                                        alt="no-img"
                                                    />

                                                </div>
                                            </div>
                                        </div>
                                        <p className='ff-Syne  text-[15px] font-[700] leading-[20px]'>Account management service on</p>

                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#fff] overflow-hidden px-20 pb-32">
                <div className="container-fluid p-0">
                    <div className="row justify-between items-center">
                        <div className="col-md-5">
                            <div>
                                <p className='ff-Syne text-[35px] leading-[40px] text-[#000] font-[700]'>Partner with Us for Powerful, Results-Driven Marketing Campaigns</p>
                                <p className='ff-Syne text-[16px] text-[#222222] font-[400] leading-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                            </div>
                            <div className="flex justify-start items-start">
                                <div className="">
                                    <input type="text" placeholder="Enter your email" className="ff-Syne text-[12px] text-[#000] border-[1px] border-[#000] w-100 px-3 py-[10px] rounded-[2px]" />
                                    <p className='ff-Syne text-[10px] text-[#474747] font-[400] leading-[20px] py-[4px]'>By clicking Sign Up you're confirming that you agree with our <Link href="/termCondition" className="text-[#000] font-[600]">Terms and Conditions.</Link></p>
                                </div>
                                <div className="ms-3">
                                    <Link href="/"><button className="ff-Syne bg-[#000] text-[12px] text-[#fff] font-[400]   rounded-[4px] px-6 py-[10px] uppercase tracking-[1px]" type="button">Subscribe</button></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div>
                                <Image
                                    src="/assets/images/result.jpg"
                                    className="w-full"
                                    width={1080}
                                    height={1080}
                                    alt="no-img"
                                />

                            </div>
                        </div>
                    </div>

                </div>
            </section>
 

            <Footer />

        </>
    );
}
