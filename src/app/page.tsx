
import Image from "next/image";
import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link'
import "bootstrap/dist/css/bootstrap.min.css"
export default function Home() {
    return (
        <>
            <Header />
            <section className="bg-[#FFF1DE] overflow-hidden sm:px-20 px-6 pt-40 pb-20">
                <div className="container-fluid p-0">
                    <div className="row justify-between items-center">
                        <div className="col-md-5">
                            <div>
                                <p className='ff-type sm:text-[50px] text-[40px] text-[#151515] font-[500] sm:leading-[65px] leading-[50px]'>You run your <span className="text-[#E0AA63]">Business.</span> We&apos;ll handle your <span className="text-[#E0AA63]">Finances.</span></p>

                                <p className='ff-Regular sm:text-[14px] text-[12px] text-[#212121] font-[100] leading-[20px]'>The stressful days of do-it-yourself finances are over. Cloud Inc. does your book keeping and taxes for you—so you can focus on running your business.</p>

                                <div className="py-[10px]">
                                    <Link href="/">
                                        <button className="ff-MD bg-[#E0AA63] text-[14px] text-[#000]   rounded-[5px] px-10 py-[15px]" type="button">Start a free trail</button>

                                    </Link>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="sm:mt-0 mt-5">
                                <Image
                                    src="/assets/images/cloudindex.png"
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

            <section className="bg-[#fff] overflow-hidden sm:px-20 px-6 sm:py-20 py-10">
                <div className="container-fluid p-0">
                    <div className="row justify-center">
                        <div className="col-md-10">
                            <div className="text-center">
                                <p className='ff-SB text-[#0D0D0D] sm:text-[40px] text-[30px] mb-0 leading-[30px]'>3 steps to record your company bills</p>

                            </div>
                        </div>
                    </div>
                    <div className="row justify-between pt-16 pb-10 border-b-[1px] border-[#9A9A9A]">
                        <div className="col-md-3">
                            <div>
                                <div className="h-[50px]">
                                    <Image
                                        src="/assets/images/step1.png"

                                        width={40}
                                        height={40}
                                        alt="no-img"
                                    />
                                </div>
                                <div className="py-6 relative">
                                    <p className='ff-Regular sm:text-[20px] text-[16px] text-[#7A7A7A] sm:leading-[28px] leading-[20px]'>Automate your tasks and obtain key data from your business in real time.</p>
                                    <Image
                                        src="/assets/images/line.svg"
                                        className="absolute right-[-172px] top-[53px] sm:block hidden"
                                        width={170}
                                        height={200}
                                        alt="no-img"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="">
                                <div className="h-[50px]">
                                    <Image
                                        src="/assets/images/step2.png"

                                        width={40}
                                        height={40}
                                        alt="no-img"
                                    />
                                </div>
                                <div className="py-6 relative">
                                    <p className='ff-Regular sm:text-[20px] text-[16px] text-[#7A7A7A] sm:leading-[28px] leading-[20px]'>Control your business from a single platform and be more efficient.</p>
                                    <Image
                                        src="/assets/images/line.svg"
                                        className="absolute right-[-150px] top-[53px] sm:block hidden"
                                        width={170}
                                        height={180}
                                        alt="no-img"
                                    />
                                </div>

                            </div>
                        </div>

                        <div className="col-md-3">
                            <div>
                                <div className="h-[50px]">
                                    <Image
                                        src="/assets/images/step3.png"

                                        width={40}
                                        height={40}
                                        alt="no-img"
                                    />
                                </div>
                                <div className="py-6">
                                    <p className='ff-Regular sm:text-[20px] text-[16px] text-[#7A7A7A] sm:leading-[28px] leading-[20px]'>Manage your company from anywhere with total security.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section className="bg-[#fff] overflow-hidden sm:px-20 px-6 sm:pb-60 pb-20">
                <div className="container-fluid p-0">
                    <div className="row items-center justify-between">
                        <div className="col-md-6">
                            <div>
                                <Image
                                    src="/assets/images/support.png"
                                    className="w-full"
                                    width={1080}
                                    height={1080}
                                    alt="no-img"
                                />


                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <div className="text-start">
                                    <p className='ff-SB text-[#0D0D0D] sm:text-[30px] text-[20px]  mb-0'>One-on-one expert support</p>
                                    <p className='ff-Regular sm:text-[18px] text-[14px] text-[#7A7A7A] sm:leading-[28px] leading-[20px] sm:pt-6 pt-2'>Cloud Inc gives you a dedicated bookkeeper supported by a team of knowledgeable small business experts. Get a direct line to your team on desktop or mobile—professional support is just a few swipes, taps, or clicks away.</p>

                                </div>
                                <div className="mt-[30px]">
                                    <Link href="/">
                                        <button className="ff-MD bg-[#fff] text-[14px] text-[#E0AA63] border-[#E0AA63] border-[2px]  rounded-[5px] px-10 py-[10px]" type="button">Learn More</button>

                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row items-center justify-between sm:pt-20 pt-10  flex-col-reverse sm:flex-row">
                        <div className="col-md-6">
                            <div>
                                <div className="text-start sm:pt-0 pt-6">
                                    <p className='ff-SB text-[#0D0D0D] sm:text-[30px] text-[20px]  mb-0'>Powerful financial reporting</p>
                                    <p className='ff-Regular sm:text-[18px] text-[14px] text-[#7A7A7A] sm:leading-[28px] leading-[20px] sm:pt-6 pt-2'>Cloud Inc gives you a dedicated bookkeeper supported by a team of knowledgeable small business experts. Get a direct line to your team on desktop or mobile—professional support is just a few swipes, taps, or clicks away.</p>

                                </div>
                                <div className="mt-[30px]">
                                    <Link href="/">
                                        <button className="ff-MD bg-[#fff] text-[14px] text-[#E0AA63] border-[#E0AA63] border-[2px]  rounded-[5px] px-10 py-[10px]" type="button">Learn More</button>

                                    </Link>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <Image
                                    src="/assets/images/reporting.png"
                                    className="w-full"
                                    width={1080}
                                    height={1080}
                                    alt="no-img"
                                />


                            </div>
                        </div>
                    </div>
                    <div className="row items-center justify-between sm:pt-20  pt-10">
                        <div className="col-md-6">
                            <div>
                                <Image
                                    src="/assets/images/tax-season.png"
                                    className="w-full"
                                    width={1080}
                                    height={1080}
                                    alt="no-img"
                                />


                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <div className="text-start  sm:pt-0 pt-6">
                                    <p className='ff-SB text-[#0D0D0D] sm:text-[30px] text-[20px]  mb-0'>Tax season, minus the stress</p>
                                    <p className='ff-Regular sm:text-[18px] text-[14px] text-[#7A7A7A] sm:leading-[28px] leading-[20px] sm:pt-6 pt-2'>A year end package with everything you need to file comes standard with Bench. Upgrade your plan, and cross even more off your to-do list. With Premium, you get expert tax prep, filing, and year-round tax advisory support.</p>

                                </div>
                                <div className="mt-[30px]">
                                    <Link href="/">
                                        <button className="ff-MD bg-[#fff] text-[14px] text-[#E0AA63] border-[#E0AA63] border-[2px]  rounded-[5px] px-10 py-[10px]" type="button">Learn More</button>

                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="bg-[#FFF1DE] overflow-hidden sm:px-20 px-6 sm:pt-40 pt-10 sm:pb-20 pb-10 relative">

                <div className="container-fluid p-0">

                    <div className="row justify-center items-center">
                        <div className="col-md-6">
                            <div className="text-center">
                                <p className='ff-type sm:text-[32px]  text-[25px] text-[#151515] font-[500] sm:leading-[40px] leading-[30px]'>Facilitate the day-to-day of your clients with a complete solution</p>

                            </div>
                        </div>

                    </div>

                    <div className="row sm:pt-20 pt-10 sm:px-20 justify-between">
                        <div className="col-md-3">
                            <div>
                                <div className="flex">
                                    <Image
                                        src="/assets/images/billing.svg"

                                        width={30}
                                        height={30}
                                        alt="no-img"
                                    />
                                    <span className='ff-MD sm:text-[20px] text-[18px] text-[#E0AA63]  leading-[40px] ps-3'>Billing</span>

                                </div>
                                <div className="pt-6 ">
                                    <p className='ff-Regular sm:text-[15px] text-[14px] text-[#454545] font-[100] leading-[20px]'>Your customer can create and send invoices from their phone the moment they make a sale.</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <div className="flex">
                                    <Image
                                        src="/assets/images/document.svg"

                                        width={30}
                                        height={30}
                                        alt="no-img"
                                    />
                                    <span className='ff-MD sm:text-[20px] text-[18px] text-[#E0AA63]  leading-[40px] ps-3'>Document Manager</span>

                                </div>
                                <div className="pt-6 ">
                                    <p className='ff-Regular sm:text-[15px] text-[14px] text-[#454545] font-[100] leading-[20px]'>Provide your client with a cloud folder to share documents that are automatically sorted.</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <div className="flex">
                                    <Image
                                        src="/assets/images/Treasury.svg"

                                        width={30}
                                        height={30}
                                        alt="no-img"
                                    />
                                    <span className='ff-MD sm:text-[20px] text-[18px] text-[#E0AA63]  leading-[40px] ps-3'>Treasury</span>

                                </div>
                                <div className="pt-6 ">
                                    <p className='ff-Regular sm:text-[15px] text-[14px] text-[#454545] font-[100] leading-[20px]'>Your client has all the information in real time on the financial status of their business.</p>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row sm:pt-20 pt-6 sm:px-20 justify-between">
                        <div className="col-md-3">
                            <div>
                                <div className="flex">
                                    <Image
                                        src="/assets/images/scanner.svg"

                                        width={30}
                                        height={30}
                                        alt="no-img"
                                    />
                                    <span className='ff-MD sm:text-[20px] text-[18px] text-[#E0AA63]  leading-[40px] ps-3'>Digitization of expenses</span>

                                </div>
                                <div className="pt-6 ">
                                    <p className='ff-Regular sm:text-[15px] text-[14px] text-[#454545] font-[100] leading-[20px]'>If your client generates a deductible expense, with a photo of the ticket or invoice, CleverScan technology will extract the data.</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <div className="flex">
                                    <Image
                                        src="/assets/images/mobileIcon.svg"
                                        width={30}
                                        height={30}
                                        alt="no-img"
                                    />
                                    <span className='ff-MD sm:text-[20px] text-[18px] text-[#E0AA63]  leading-[40px] ps-3'>Mobile app</span>

                                </div>
                                <div className="pt-6 ">
                                    <p className='ff-Regular sm:text-[15px] text-[14px] text-[#454545] font-[100] leading-[20px]'>Make it easy for your client to review information and manage their business wherever they are.</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <div className="flex">
                                    <Image
                                        src="/assets/images/ReportIcon.svg"

                                        width={30}
                                        height={30}
                                        alt="no-img"
                                    />
                                    <span className='ff-MD sm:text-[20px] text-[18px] text-[#E0AA63]  leading-[40px] ps-3'>Reports</span>

                                </div>
                                <div className="pt-6 ">
                                    <p className='ff-Regular sm:text-[15px] text-[14px] text-[#454545] font-[100] leading-[20px]'>Offer your client more useful and accessible advice, which allows them to achieve their goals.</p>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="text-center sm:pt-20 pt-10">
                                <Link href="">
                                    <button type="button" className="ff-MD text-[#000] border-[1px] border-[#000] w-100 py-[15px] rounded-[50px] sm:text-[28px] text-[18px] text-center">Schedule a Demo</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>



            <section className="bg-[#fff] overflow-hidden sm:px-20 px-10 sm:py-20 py-10">
                <div className="container-fluid p-0">
                    <div className="row justify-center">
                        <div className="col-md-6">
                            <div className="text-center">
                                <p className='ff-SB text-[#0D0D0D] sm:text-[32px] text-[25px] leading-[28px] sm:leading-[40px]  mb-0'>Explore over 600 resources for managing small business finances</p>

                            </div>
                        </div>
                    </div>

                    <div className="row justify-between pt-14">
                        <div className="col-md-4">
                            <div>
                                <div className="">
                                    <Image
                                        src="/assets/images/blub.jpg"
                                        className="w-full"
                                        width={1080}
                                        height={1080}
                                        alt="no-img"
                                    />
                                </div>
                                <div className="pt-6 sm:pb-0 pb-4">
                                    <p className='ff-SB text-[#0D0D0D] sm:text-[22px] text-[18px] leading-[20px] sm:leading-[30px]  mb-0'>How to Deal with Inflation&apos;s Effects on Your Small Business</p>
                                    <p className='ff-Regular sm:text-[15px] text-[14px] text-[#4F4F4F]  sm:leading-[25px] leading-[20px] sm:pt-6 pt-3'>A year end package with everything you need to file comes standard with Cloud Inc. Upgrade your plan, and cross even more off your to-do list. With Premium, you get expert tax prep, filing, and year-round tax advisory support.</p>

                                    <div className="sm:py-6">
                                        <Link href="/"><button className="ff-MD bg-[#fff] text-[14px] text-[#E0AA63] border-[#E0AA63] border-[2px]  rounded-[5px] px-10 py-[10px]" type="button">Learn More</button></Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <div className="">
                                    <Image
                                        src="/assets/images/effect.jpg"
                                        className="w-full"
                                        width={1080}
                                        height={1080}
                                        alt="no-img"
                                    />
                                </div>
                                <div className="pt-6 sm:pb-0 pb-4">
                                    <p className='ff-SB text-[#0D0D0D] sm:text-[22px] text-[18px] leading-[20px] sm:leading-[30px]  mb-0'>How to Deal with Inflation&apos;s Effects on Your Small Business</p>
                                    <p className='ff-Regular sm:text-[15px] text-[14px] text-[#4F4F4F]  sm:leading-[25px] leading-[20px] sm:pt-6 pt-3'>A year end package with everything you need to file comes standard with Cloud Inc. Upgrade your plan, and cross even more off your to-do list. With Premium, you get expert tax prep, filing, and year-round tax advisory support.</p>

                                    <div className="sm:py-6 py-3">
                                        <Link href="/"><button className="ff-MD bg-[#fff] text-[14px] text-[#E0AA63] border-[#E0AA63] border-[2px]  rounded-[5px] px-10 py-[10px]" type="button">Learn More</button></Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <div className="">
                                    <Image
                                        src="/assets/images/sucess.jpg"
                                        className="w-full"
                                        width={1080}
                                        height={1080}
                                        alt="no-img"
                                    />
                                </div>
                                <div className="pt-6 sm:pb-0 pb-4">
                                    <p className='ff-SB text-[#0D0D0D] sm:text-[22px] text-[18px] leading-[20px] sm:leading-[30px]  mb-0'>How to Deal with Inflation&apos;s Effects on Your Small Business</p>
                                    <p className='ff-Regular sm:text-[15px] text-[14px] text-[#4F4F4F]  sm:leading-[25px] leading-[20px] sm:pt-6 pt-3'>A year end package with everything you need to file comes standard with Cloud Inc. Upgrade your plan, and cross even more off your to-do list. With Premium, you get expert tax prep, filing, and year-round tax advisory support.</p>

                                    <div className="sm:py-6 py-3">
                                        <Link href="/"><button className="ff-MD bg-[#fff] text-[14px] text-[#E0AA63] border-[#E0AA63] border-[2px]  rounded-[5px] px-10 py-[10px]" type="button">Learn More</button></Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="sm:pt-10 pt-6 text-center">
                                <Link href="/"><button className="ff-SB bg-[#E0AA63] text-[14px] text-[#000]   rounded-[5px] px-10 py-[15px]" type="button">Visit cloudinc blogs</button></Link>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
            <section className="bg-[#fff] overflow-hidden sm:px-20 px-6 pb-20">
                <div className="container-fluid p-0">
                    <div className="row justify-center">
                        <div className="col-md-10">
                            <div className="bg-[#FFF1DE] py-10 sm:px-20 px-10 sm:rounded-[100px] rounded-[10px]">
                                <div className="row items-center justify-between">
                                    <div className="col-md-3">
                                        <div className="text-start">
                                            <p className='ff-SB text-[#0D0D0D] sm:text-[30px] text-[20px] sm:leading-[35px] leading-[25px]  mb-0'>Request a personalized demo now</p>

                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="text-start">
                                            <p className='ff-Regular sm:text-[16px] text-[14px] text-[#4F4F4F]  sm:leading-[25px] sm:pt-6 py-4 mb-0'>You will see how cloud bss can help you manage your advice more efficiently and profitably.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="sm:text-end">
                                            <Link href="/"><button className="ff-SB bg-[#E0AA63] text-[16px] text-[#000] sm:rounded-[50px] px-10 sm:py-[15px] py-[10px] rounded-[5px]" type="button">request a demo</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    );
}
