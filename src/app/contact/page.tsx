
import Image from "next/image";
import Header from '../../components/header';
import Footer from '../../components/footer';
import Link from 'next/link'
import "bootstrap/dist/css/bootstrap.min.css"
export default function Home() {
    return (
        <>
            <Header />


            <section className="overflow-hidden px-20 pt-36 pb-10">
                <div className="container-fluid">
                    <div className="row justify-start items-center text-start">
                        <div className="col-md-10">
                            <div className="text-start">
                                <p className='ff-Syne text-[60px] font-[700] mb-0'>Contact Us</p>
                            </div>
                            <div className="mt-6">
                                <ul className="list-disc">
                                    <li className="ff-Syne  text-[16px] text-[#000] font-[600] py-[5px]">Case studies <span className="text-[#636363] text-[15px] font-[500]"> on how we have helped companies similar to you who archived their business goal by engaging us</span></li>
                                    <li className="ff-Syne  text-[16px] text-[#000] font-[600] py-[5px]">Schedule Free Consultation <span className="text-[#636363] text-[15px] font-[500]">to leverage on our 4000+ man hour experience to find the solutions for your Amazon store needs</span></li>
                                    <li className="ff-Syne  text-[16px] text-[#000] font-[600] py-[5px]"> <span>Setup a</span>free trial <span className="text-[#636363] text-[15px] font-[500]">to check out if we are a good fit for you</span></li>


                                </ul>
                                <p className="ff-Syne  text-[14px] text-[#636363] font-[500] py-[5px]">In case you prefer to mail us please send an email to <a href="mailto:info@sagamen.me " className="text-[#000] no-underline font-[600]">info@sagamen.me </a></p>
                            </div>
                        </div>


                    </div>

                </div>
            </section>

            <section className="bg-[#fff] overflow-hidden px-20 ">
                <div className="container-fluid p-0">


                    <div className="row justify-between border-t-[2px] border-[#A9A9A9] pt-16">
                        <div className="col-md-6">
                            <div className="text-start">
                                <div className="text-start  relative ">
                                    <p className='ff-Syne text-[32px] text-[#000] font-[700] mb-0'>Drop Us a Line</p>
                                    <span className="absolute left-[0px] bottom-[-5px]">
                                        <Image
                                            src="/assets/images/line.svg"
                                            className="w-full"
                                            width={1000}
                                            height={1080}
                                            alt="no-img"
                                        />
                                    </span>
                                </div>
                            </div>

                            <div>
                                <form className="">
                                    <div className="py-16">
                                        <div className="">
                                            <div className="mt-10 row">
                                                <div className="col-md-12">
                                                    <div className="py-[15px]">
                                                        <label className="ff-Syne text-[16px] text-[#000] font-[600] mb-0">Name </label>
                                                        <div className="mt-2">
                                                            <input type="text" name="first-name" id="first-name" className="border-[1px] w-[100%] border-[#000] rounded-[8px] py-[8px]" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="py-[15px]">
                                                        <label className="ff-Syne text-[16px] text-[#000] font-[600] mb-0">Email </label>
                                                        <div className="mt-2">
                                                            <input type="Email" name="fEmail" className="border-[1px] w-[100%] border-[#000] rounded-[8px] py-[8px]" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <div className="py-[15px]">
                                                        <label className="ff-Syne text-[16px] text-[#000] font-[600] mb-0">Message</label>
                                                        <div className="mt-2">
                                                            <textarea className="border-[1px] w-[100%] border-[#000] ff-Syne text-[16px] px-[15px] py-6 rounded-[8px]" name="" rows={4} id="">
                                                                Type your message...
                                                            </textarea>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <div className="py-[15px]">
                                                        <input type="checkbox"/>
                                                            <label  className="ff-Syne text-[#636363] text-[15px] font-[500] mb-0 ps-[10px]"> I accept the <Link href="" className="text-[#000] ps-[4px] font-[700]">Terms & Conditions </Link></label>

                                                            </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="my-6">
                                                            <Link href="1/2272b3floorramnagarshahdara"><button className="ff-Syne bg-[#000] text-[16px] text-[#fff] font-[600]   rounded-[5px] px-6 py-[10px]" type="button">SubmitL</button></Link>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div>
                                <Image
                                    src="/assets/images/contactus.jpg"
                                    className="w-full"
                                    width={1000}
                                    height={1080}
                                    alt="no-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 p-0">
                            <div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.52633258584!2d76.76357436215979!3d28.64368462633545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1729515743847!5m2!1sen!2sin" width="600" height="450" className="w-[100%]" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>

                </div>
            </section>



          

            <Footer />

        </>
    );
}
