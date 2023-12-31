import HomeLayout from "../components/HomeLayout"

function ProjectViewPage() {
    return (
        <HomeLayout>
            <div className="projectviewpage_container sm:w-[100%] md:w-[80%] m-auto mt-4 sm:flex">
                <div className="w-full flex sm:flex-col md:flex-row gap-6">
                    <div className=" sm:w-[100%] md:w-[70%]">
                        <div className="carousel w-full">
                            <div id="slide1" className="carousel-item relative w-full">
                                <img src="https://superadmin.homes247.in/images/uploadPropertyImgs/1675313155-Cover%20image%20_1.png" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide4" className="btn btn-circle">❮</a>
                                    <a href="#slide2" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide2" className="carousel-item relative w-full">
                                <img src="https://superadmin.homes247.in/images/uploadPropertyImgs/1671260347-COVER%20IMAGS.jpg" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" className="btn btn-circle">❮</a>
                                    <a href="#slide3" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide3" className="carousel-item relative w-full">
                                <img src="https://superadmin.homes247.in/images/uploadPropertyImgs/1617262167-1.jpg" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" className="btn btn-circle">❮</a>
                                    <a href="#slide4" className="btn btn-circle">❯</a>
                                </div>
                            </div>

                        </div>
                        <div className="content01 bg-gradient-to-r from-cyan-100 to-blue-10">
                            <h1>Sobha Neopolis</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, hic nulla provident in et, eos
                                cupiditate ab dignissimos atque doloremque praesentium maxime quam obcaecati cum impedit iure
                                quidem quia illo adipisci blanditiis nesciunt voluptatibus omnis. Voluptatem at, fugit maxime
                                magnam vitae ducimus voluptatibus sint deleniti cum rem sequi, id quibusdam.
                            </p>
                            <button id="brochuredownloadbtn" onclick="popUp()">Download Brochure</button>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, hic nulla provident in et, eos
                                cupiditate ab dignissimos atque doloremque praesentium maxime quam obcaecati cum impedit iure
                                quidem quia illo adipisci blanditiis nesciunt voluptatibus omnis. Voluptatem at, fugit maxime
                                magnam vitae ducimus voluptatibus sint deleniti cum rem sequi, id quibusdam.
                            </p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, hic nulla provident in et, eos
                                cupiditate ab dignissimos atque doloremque praesentium maxime quam obcaecati cum impedit iure
                                quidem quia illo adipisci blanditiis nesciunt voluptatibus omnis. Voluptatem at, fugit maxime
                                magnam vitae ducimus voluptatibus sint deleniti cum rem sequi, id quibusdam.
                            </p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, hic nulla provident in et, eos
                                cupiditate ab dignissimos atque doloremque praesentium maxime quam obcaecati cum impedit iure
                                quidem quia illo adipisci blanditiis nesciunt voluptatibus omnis. Voluptatem at, fugit maxime
                                magnam vitae ducimus voluptatibus sint deleniti cum rem sequi, id quibusdam.
                            </p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, hic nulla provident in et, eos
                                cupiditate ab dignissimos atque doloremque praesentium maxime quam obcaecati cum impedit iure
                                quidem quia illo adipisci blanditiis nesciunt voluptatibus omnis. Voluptatem at, fugit maxime
                                magnam vitae ducimus voluptatibus sint deleniti cum rem sequi, id quibusdam.
                            </p>
                        </div>

                        {/* ================= */}

                        <div className="content04 mt-5 py-4 px-2 rounded">
                            <h1>Complete View of Floor Plans &amp; Pricing</h1>
                            <div className="content04_box">
                                <div id="Flats" className="w-[35%] flex items-center justify-between my-3 mx-auto">
                                    <h2 className=" ">3000+ Flats</h2>
                                    <h2>80+ Villa</h2>
                                </div>
                                <div className="priceandplansbox flex justify-between w-[80%] m-auto">
                                    <div id="pricesandbuttonbox" className=" flex flex-col items-center">
                                        <h2>Select Floor Plan Type</h2>
                                        <div className="planbtn mt-5 grid grid-cols-3 gap-3" style={{ width: "fit-content" }}>
                                            <button className=" text-xl text-white bg-black border-0 rounded py-1 px-1 cursor-pointer" onclick="changer(this)">1 BHK</button>
                                            <button className=" text-xl text-white bg-black border-0 rounded py-1 px-1 cursor-pointer" onclick="changer(this)">2 BHK</button>
                                            <button className=" text-xl text-white bg-black border-0 rounded py-1 px-1 cursor-pointer" onclick="changer(this)">3 BHK</button>
                                            <button className=" text-xl text-white bg-black border-0 rounded py-1 px-1 cursor-pointer" onclick="changer(this)">4 BHK</button>
                                            <button className=" text-xl text-white bg-black border-0 rounded py-1 px-1 cursor-pointer" onclick="changer(this)">5 BHK</button>
                                        </div>
                                        <div className="sqftbox mt-5 flex items-center justify-between gap-2"><img className="w-[30px]" src="https://sobhaneopolis.co/wp-content/uploads/2023/03/ruler.webp" alt />
                                            <p id="sqft" className=" text-center">643 - 643 Sqft</p>
                                        </div>
                                        <p id="price" className=" text-center mt-5">95 LPA</p>
                                        <button id="pricesheet" onclick="popUp()">Price Sheet</button>
                                    </div>
                                    <div id="floorbox">
                                        <img className="w-full shadow rounded" id="floorimage" src="https://www.sobhaneopolis.net.in/images/plans/2bhk-320w.webp" alt />
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/* ==================== */}

                    </div>
                    <div className=" sm:w-[100%] md:w-[30%] flex flex-col gap-6">
                        <div className="w-full bg-[#8ed1fc] p-5 rounded-md">
                            <div className="flex items-center justify-center">
                                <img className="w-[100px]" src="https://mantridevelopers.in/wp-content/uploads/2023/08/cropped-web-logo.png" alt="" />
                            </div>
                            <div className="flex justify-between mt-3">
                                <div className="flex flex-col">
                                    <div className="flex items-center justify-between gap-2">
                                        <img src="https://mantridevelopers.in/wp-content/uploads/2023/08/ruler.webp" alt="" />
                                        <span>Land Area</span>
                                    </div>
                                    <span>44.26 Acers</span>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex items-center justify-between gap-2">
                                        <img src="https://mantridevelopers.in/wp-content/uploads/2023/08/ruler.webp" alt="" />
                                        <span>Land Area</span>
                                    </div>
                                    <span>44.26 Acers</span>
                                </div>
                            </div>
                            <hr />
                            <div className="flex justify-between mt-3">
                                <div className="flex flex-col">
                                    <div className="flex items-center justify-between gap-2">
                                        <img src="https://mantridevelopers.in/wp-content/uploads/2023/08/ruler.webp" alt="" />
                                        <span>Land Area</span>
                                    </div>
                                    <span>44.26 Acers</span>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex items-center justify-between gap-2">
                                        <img src="https://mantridevelopers.in/wp-content/uploads/2023/08/ruler.webp" alt="" />
                                        <span>Land Area</span>
                                    </div>
                                    <span>44.26 Acers</span>
                                </div>
                            </div>
                            <hr />
                            <div className="flex justify-between mt-3">
                                <div className="flex flex-col">
                                    <div className="flex items-center justify-between gap-2">
                                        <img src="https://mantridevelopers.in/wp-content/uploads/2023/08/ruler.webp" alt="" />
                                        <span>Land Area</span>
                                    </div>
                                    <span>44.26 Acers</span>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex items-center justify-between gap-2">
                                        <img src="https://mantridevelopers.in/wp-content/uploads/2023/08/ruler.webp" alt="" />
                                        <span>Land Area</span>
                                    </div>
                                    <span>44.26 Acers</span>
                                </div>
                            </div>
                            <hr />
                            <div className="flex justify-between mt-3">
                                <div className="flex flex-col">
                                    <div className="flex items-center justify-between gap-2">
                                        <img src="https://mantridevelopers.in/wp-content/uploads/2023/08/ruler.webp" alt="" />
                                        <span>Land Area</span>
                                    </div>
                                    <span>44.26 Acers</span>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex items-center justify-between gap-2">
                                        <img src="https://mantridevelopers.in/wp-content/uploads/2023/08/ruler.webp" alt="" />
                                        <span>Land Area</span>
                                    </div>
                                    <span>44.26 Acers</span>
                                </div>
                            </div>
                            <button className=" bg-cyan-900 w-full p-1 mt-4 text-white rounded-sm">Get Call Instant Back</button>
                        </div>
                        <div>
                            {/* ============================= */}
                            <div className="main02_right">
                                <div className="contactformbox w-full bg-[#8ed1fc] p-5 rounded-md sticky top-10">
                                    <div className="flex flex-col items-center justify-center gap-2">
                                        <img className="w-[90px]" id="contactformbox_logo" src="https://mantridevelopers.in/wp-content/uploads/2023/08/cropped-web-logo.png" alt />
                                        <h3 id="contactformbox_title" className="text-center text-lg">Get Instant Call Back</h3>
                                    </div>
                                    <div className="contactformbox_box1 flex items-center justify-between mt-5">
                                        <div className="flex flex-col items-center justify-between">
                                            <img className="w-[30px]" src="https://mantridevelopers.in/wp-content/uploads/2023/09/phone-ringing-1.webp" alt />
                                            <p className="text-sm">24/7 Support</p>
                                        </div>
                                        <div className="flex flex-col items-center justify-between">
                                            <img className="w-[30px]" src="https://mantridevelopers.in/wp-content/uploads/2023/09/phone-ringing-1.webp" alt />
                                            <p className="text-sm">24/7 Support</p>
                                        </div>
                                        <div className="flex flex-col items-center justify-between">
                                            <img className="w-[30px]" src="https://mantridevelopers.in/wp-content/uploads/2023/09/phone-ringing-1.webp" alt />
                                            <p className="text-sm">24/7 Support</p>
                                        </div>
                                    </div>
                                    <form action className="contactform contactformbox_box2 flex mt-5 flex-col items-center justify-between gap-3">
                                        <h3 className=" text-lg font-medium">Mantri Webcity</h3>
                                        <input type="text" placeholder="Name" className="w-full px-2 py-1 rounded-sm outline-none" id="second" />
                                        <input type="text" placeholder="+91 - " className="w-full px-2 py-1 rounded-sm outline-none" />
                                        <input type="email" placeholder="Email" className="w-full px-2 py-1 rounded-sm outline-none" />
                                        <select className="w-full p-1 rounded-sm outline-none">
                                            <option value>Interested for Site Visit?</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                        <button className=" bg-cyan-900 w-full p-1 text-white rounded-sm">Enquire Now</button>
                                    </form>
                                    <div className="contactformbox_box2 flex items-center justify-between mt-2">
                                        <div className="flex items-center gap-1">
                                            <img className="w-[30px]" src="https://mantridevelopers.in/wp-content/uploads/2023/09/phone-ringing-1.webp" alt />
                                            <p className="text-sm">Call</p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <img className="w-[30px]" src="https://mantridevelopers.in/wp-content/uploads/2023/09/whatsapp.webp" alt />
                                            <p className="text-sm">WhatsApp</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ============================= */}
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default ProjectViewPage