
import Image from "next/image";
import Header from '../../components/header';
import Footer from '../../components/footer';
import Link from 'next/link'
import "bootstrap/dist/css/bootstrap.min.css"
export default function Home() {
    return (
        <>
            <Header />


            <section className="bg-[#fff] overflow-hidden px-20 py-40 pb-20">
                <div className="container-fluid p-0">
                    <div className="row justify-start">
                        <div className="col-md-8">
                            <div className="text-start ">
                                <p className='ff-Syne text-[#000]  text-[70px] font-[700] mb-0 uppercase leading-[70px]'>Product Listing & Cataloguing.</p>
                                <div className="pt-[15px]">
                                    <p className='ff-Syne text-[16px] text-[#565656] font-[400] leading-[25px]'>An Marketplace Product Listing Service is designed to help sellers create optimized, high-converting product listings that drive visibility, traffic, and sales. This service typically includes comprehensive support with each element of the listing to ensure it meets Amazon's best practices and stands out in a competitive marketplace.</p>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="bg-[#fff] overflow-hidden ">
                <div className="container-fluid p-0">
                    <div className="row justify-between items-center">
                        <div className="row justify-center">
                            <div className="col-md-12">
                                <div>
                                    <Image
                                        src="/assets/images/flipkart.jpg"
                                        className="w-full"
                                        width={1080}
                                        height={1080}
                                        alt="no-img"
                                    />

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="bg-[#fff] overflow-hidden px-20 py-14">
                <div className="container-fluid p-0">
                    <div className="row justify-start">
                        <div className="col-md-8">
                            <div className="text-start ">

                                <div className="mt-6">
                                 
                                    <p className='ff-Syne text-[18px] text-[#565656] font-[400] leading-[25px]'>
                                    Here’s a breakdown of what an <span className="text-[#000] text-[18px]  font-[600]"> Amazon Product Listing Serviceo</span> might offer:</p>

                                </div>

                                <div className="mt-8">
                                    <p className='ff-Syne text-[18px] text-[#000] font-[600] leading-[25px]'>1. Brand Registry and Trademark Support.</p>
                                    <div className="ps-2">
                                        <p className='ff-Syne text-[18px] text-[#565656] font-[400] leading-[25px]'>- Assistance with Amazon Brand Registry for sellers with registered trademarks, which offers enhanced brand protection and control.</p>
                                        <p className='ff-Syne text-[18px] text-[#565656] font-[400] leading-[25px'>- Guidance on the trademark application process if a brand isn’t yet registered.</p>
                                        <p className='ff-Syne text-[18px] text-[#565656] font-[400] leading-[25px'>- If you do not have Trademark? No Worry, we still help you to register your account and list your product on Amazon under your given brand name or under “Generic” Category.</p>

                                    </div>
                                </div>
                                <div className="mt-6">
                                    <p className='ff-Syne text-[18px] text-[#000] font-[600] leading-[25px]'>a. Category and Product Approval Assistance</p>
                                    <div className="ps-2">
                                        <p className='ff-Syne text-[18px] text-[#565656] font-[400] leading-[25px]'>- Help with obtaining approval for restricted or gated categories (e.g., beauty, health, grocery).</p>
                                        <p className='ff-Syne text-[18px] text-[#565656] font-[400] leading-[25px'>- Assistance with completing and submitting applications for gated product types and categories.</p>
                                    

                                    </div>
                                </div>
                                <div className="mt-6">
                                    <p className='ff-Syne text-[18px] text-[#000] font-[600] leading-[25px]'>b. Product Title Optimization</p>
                                    <ul className="ps-10 list-disc	">
                                        <li className='ff-Syne text-[18px] text-[#565656] font-[400] '>Creation of keyword-rich, informative, and clear product titles.</li>
                                        <li className='ff-Syne text-[18px] text-[#565656] font-[400] pt-[10px]'>Optimization for readability and relevance, following Amazon's title guidelines.</li>
                                     
                                        <li className='ff-Syne text-[18px] text-[#565656] font-[400] pt-[10px]'>Incorporation of essential details (e.g., brand, key features, size, color) to attract clicks.</li>
                                     

                                    </ul>
                                </div>
                                
                                <div className="mt-6">
                                    <p className='ff-Syne text-[18px] text-[#000] font-[600] leading-[25px]'>2. Bullet Points & Description Writing</p>
                                    <ul className="ps-10 list-disc	">
                                        <li className='ff-Syne text-[18px] text-[#565656] font-[400] '>Compelling bullet points highlighting product benefits and unique selling points (USPs).</li>
                                        <li className='ff-Syne text-[18px] text-[#565656] font-[400] pt-[10px]'>Structuring bullet points for easy readability, focusing on customer needs and pain points.</li>
                                     
                                        <li className='ff-Syne text-[18px] text-[#565656] font-[400] pt-[10px]'>Detailed product descriptions with storytelling and persuasive language to increase customer engagement.</li>
                                        <li className='ff-Syne text-[18px] text-[#565656] font-[400] pt-[10px]'>Use of HTML formatting (where allowed) for improved readability in descriptions.</li>
                                        
                                     

                                    </ul>
                                </div>
                                <div className="mt-6">
                                    <p className='ff-Syne text-[18px] text-[#000] font-[600] leading-[25px]'>3. Keyword Research & SEO Optimization</p>
                                    <ul className="ps-10 list-disc	">
                                       
                                        <li className='ff-Syne text-[18px] text-[#565656] font-[400] pt-[10px]'>In-depth keyword research tailored to the product, using Amazon-specific SEO tools and methods.</li>
                                     
                                        <li className='ff-Syne text-[18px] text-[#565656] font-[400] pt-[10px]'>Integration of primary and secondary keywords in the title, bullet points, and backend search terms.</li>
                                        <li className='ff-Syne text-[18px] text-[#565656] font-[400] '>Placement of keywords to maximize search visibility without keyword stuffing.</li>

                                    </ul>
                                </div>
                                <div className="mt-6">
                                    <p className='ff-Syne text-[18px] text-[#000] font-[600] leading-[25px]'>4. High-Quality Product Image Creation</p>
                                    <ul className="ps-10 list-disc	">
                                        <li className='ff-Syne text-[18px] text-[#565656] font-[400] '>Professional photography of the product, following Amazon's image guidelines.</li>
                                        <li className='ff-Syne text-[18px] text-[#565656] font-[400] pt-[10px]'>Lifestyle images to showcase the product in real-life use scenarios.</li>
                                     
                                        <li className='ff-Syne text-[18px] text-[#565656] font-[400] pt-[10px]'>Infographic images to highlight key features, dimensions, and product details.</li>
                                     
                                        <li className='ff-Syne text-[18px] text-[#565656] font-[400] pt-[10px]'>360-degree or 3D imaging options to provide a more interactive experience.</li>
                                     
                                     

                                    </ul>
                                </div>
                                <div className="mt-6">
                                    <p className='ff-Syne text-[18px] text-[#000] font-[600] leading-[25px]'>5. A+ Content (Enhanced Brand Content) Creation</p>
                                    <ul className="ps-10 list-disc	">
                                        <li className='ff-Syne text-[18px] text-[#565656] font-[400] '>For registered brands, development of A+ Content with high-quality images, graphics, and formatted text.</li>
                                        <li className='ff-Syne text-[18px] text-[#565656] font-[400] pt-[10px]'>Creation of comparison charts, feature breakdowns, and brand storytelling elements.</li>
                                     
                                        <li className='ff-Syne text-[18px] text-[#565656] font-[400] pt-[10px]'>Structuring A+ Content to enhance customer trust and provide an immersive brand experience.</li>
                                     

                                    </ul>
                                </div>
                                
                                <div className="mt-6">
                                    <p className='ff-Syne text-[18px] text-[#000] font-[600] leading-[25px]'>6. Backend Search Terms Optimization</p>
                                    <ul className="ps-10 list-disc	">
                                        <li className='ff-Syne text-[18px] text-[#565656] font-[400] '>Filling out backend search terms with relevant keywords that enhance search visibility.</li>
                                        <li className='ff-Syne text-[18px] text-[#565656] font-[400] pt-[10px]'>Guidance on Amazon’s search term character limits, forbidden keywords, and misspelling practices.</li>
                                     
                                        <li className='ff-Syne text-[18px] text-[#565656] font-[400] pt-[10px]'>Regular updating of backend search terms to stay relevant with changing search trends.</li>
                                     

                                    </ul>
                                </div>
                                <div className="mt-6">
                                    <p className='ff-Syne text-[18px] text-[#000] font-[600] leading-[25px]'>7. Product Categorization & Compliance</p>
                                    <ul className="ps-10 list-disc	">
                                        <li className='ff-Syne text-[18px] text-[#565656] font-[400] '>Accurate categorization of the product in the most relevant category and subcategory.</li>
                                        <li className='ff-Syne text-[18px] text-[#565656] font-[400] pt-[10px]'>Assistance with obtaining approval for restricted or gated categories, if necessary.</li>
                                     
                                        <li className='ff-Syne text-[18px] text-[#565656] font-[400] pt-[10px]'>Compliance check to ensure the listing adheres to Amazon’s category-specific guidelines and policies.</li>
                                     

                                    </ul>
                                </div>
                                <div className="mt-6">
                                    <p className='ff-Syne text-[18px] text-[#000] font-[600] leading-[25px]'>8. Pricing Strategy and Competitor Analysis</p>
                                    <ul className="ps-10 list-disc	">
                                        <li className='ff-Syne text-[18px] text-[#565656] font-[400] '>Analysis of competitors’ pricing strategies to recommend competitive pricing.</li>
                                        <li className='ff-Syne text-[18px] text-[#565656] font-[400] pt-[10px]'>Guidance on implementing discount strategies, promotions, and coupons to increase conversions.</li>
                                     
                                        

                                    </ul>
                                </div>
                                
                                <div className="mt-6">
                                    <p className='ff-Syne text-[18px] text-[#000] font-[600] leading-[25px]'>9. Listing Audit and Optimization (For Existing Listings)</p>
                                    <ul className="ps-10 list-disc	">
                                        <li className='ff-Syne text-[18px] text-[#565656] font-[400] '>Analysis of existing product listings to identify improvement areas.</li>
                                        <li className='ff-Syne text-[18px] text-[#565656] font-[400] pt-[10px]'>Comprehensive review and update of titles, bullet points, images, keywords, and backend search terms.</li>
                                     
                                        <li className='ff-Syne text-[18px] text-[#565656] font-[400] pt-[10px]'>Testing of A/B elements like titles and images for improved conversions.</li>
                                     

                                    </ul>
                                </div>
                                <div className="mt-6">
                                    <p className='ff-Syne text-[18px] text-[#000] font-[600] leading-[25px]'>10. Customer Reviews & Feedback Integration</p>
                                    <ul className="ps-10 list-disc	">
                                        <li className='ff-Syne text-[18px] text-[#565656] font-[400] '>Strategic placement of information in listings to address common customer concerns from reviews.</li>
                                        <li className='ff-Syne text-[18px] text-[#565656] font-[400] pt-[10px]'>Identification of potential negative feedback trends and adjustments to listing content to mitigate issues.</li>
                                     
                                        <li className='ff-Syne text-[18px] text-[#565656] font-[400] pt-[10px]'>Encouragement of customer reviews and ratings to boost social proof.</li>
                                     

                                    </ul>
                                </div>
                                <div className="mt-6">
                                    <p className='ff-Syne text-[18px] text-[#000] font-[600] leading-[25px]'>11. Ongoing Listing Maintenance and Updates</p>
                                    <ul className="ps-10 list-disc	">
                                        <li className='ff-Syne text-[18px] text-[#565656] font-[400] '>Regular monitoring and updating of listings based on performance and seasonal trends.</li>
                                        <li className='ff-Syne text-[18px] text-[#565656] font-[400] pt-[10px]'>Adjustments to keywords, images, and content as customer behaviour or market conditions change.</li>
                                     
                                        <li className='ff-Syne text-[18px] text-[#565656] font-[400] pt-[10px]'>Troubleshooting any issues such as suppressed or deactivated listings.</li>
                                     

                                    </ul>
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
