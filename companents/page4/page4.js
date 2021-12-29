import React from 'react';
import "./page4.css"
import {BrowserRouter, Link} from "react-router-dom";

function Page4(props) {
    return (
        <>
            <nav className="forstmenu navbar navbar-expand-md bg-primary ">
                <div className="  container">
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#myMenu">
                        <img src="image/drop.png" alt=""/>
                    </button>
                    <div className="collapse navbar-collapse" id="myMenu">
                        <ul className="navbar-nav nav">
                            <li className="nav-item imgone"><img className=" img-fluid " src="image/Vector (9).png"
                                                                 alt=""/><span>samandar@gmail.com</span></li>
                            <li className="nav-item imgone "><img className="img-fluid" src="image/Vector (10).png"
                                                                  alt=""/><span>(23894)32158655</span></li>
                        </ul>

                        <div className="right-menu collapse navbar-collapse" id="myMenu">
                            <ul className="navbar-nav nav">
                                <li className="nav-item ">
                                    English
                                    <img className=" img-fluid" src="image/dropdown.png" alt=""/>
                                </li>
                                <li className="nav-item ">
                                    UZD <img className=" img-fluid" src="image/dropdown.png" alt=""/>

                                </li>
                                <li className="nav-item imgone">
                                    <Link to={'/page9'} className="text-white text-decoration-none"  >LogIn</Link>
                                    <img className="img-fluid" src="image/carbon_user.png" alt=""/>

                                </li>
                                <li className="nav-item imgone ">
                                    Wishlist
                                    <img className=" img-fluid" src="image/Vector (11).png" alt=""/>
                                </li>
                                <li className="nav-item imgone">
                                    <img className=" img-fluid " src="image/Group.png" alt=""/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="navtwo navbar navbar-expand-md ">
                <div className="container">
                    <Link to={'/home'} className="navbar-brand" href="#"><img src="image/Hekto.png" alt=""/></Link>
                    <div className="ulList">
                        <ul className="navbar-nav nav">
                            <Link to={'/home'} className="menupage nav-item"  >Home</Link>
                            <Link to={'/page8'} className="menupage nav-item"  >About us</Link>
                            <Link to={'/page4'} className="menupage nav-item"  >Products</Link>
                            <Link to={'/page7'} className="menupage nav-item"  >Our Client</Link>
                            <Link to={'/page3'} className="menupage nav-item"  >Shop</Link>
                            <Link to={'/page6'} className="menupage nav-item"  >Contact</Link>
                            <Link to={'/page5'} className="menupage nav-item"  >Order</Link>
                            <Link to={'/page2'} className="menupage nav-item"  >Grid Default</Link>

                        </ul>
                        <div className="searchgrop d-flex">
                            <input className="inputs" type="text"/>
                            <div className="searchdropd">
                                <img src="image/Vector (14).png" alt=""/>
                            </div>
                        </div>


                    </div>
                </div>
            </nav>
            <div className="container-fluid">
                <div className="col-md-12 defultpage">
                    <div className="greedtexts">
                        Product Details
                        <p>Home. Pages <span>Shop Grid Default</span></p>
                    </div>

                </div>
            </div>
            <div className="boxshadovs container">
                <div className="row my-5">
                    <div className="col-md-2">
                        <div className="card bagimg">
                            <img className="img-fluid" src="imgfour/Rectangle 134.png" alt=""/>
                        </div>
                        <div className="card bagimg">
                            <img className="img-fluid" src="imgfour/Rectangle 136.png" alt=""/>
                        </div>
                        <div className="card bagimg">
                            <img className="img-fluid" src="imgfour/Rectangle 137.png" alt=""/>
                        </div>
                    </div>
                    <div className=" Ameli col-md-4">
                        <img className="img-fluid" src="imgfour/Rectangle 138.png" alt=""/>
                    </div>
                    <div className="col-md-4">
                        <div className="playwood">
                            <p>Playwood arm chair</p>
                        </div>
                        <div className="twoontwo d-flex">
                            <div className="twoonimg">
                                <img src="imgfour/Vector (23).png" alt=""/>
                                <img src="imgfour/Vector (23).png" alt=""/>
                                <img src="imgfour/Vector (23).png" alt=""/>
                                <img src="imgfour/Vector (23).png" alt=""/>
                                <img src="imgfour/Vector (23).png" alt=""/>
                            </div>
                            <div className="text22">
                                (22)
                            </div>
                        </div>
                        <div className="dollor d-flex">
                            <p>$32.00</p>
                            <span>$32.00</span>
                        </div>
                        <div className="colortext">
                            Color
                        </div>
                        <div className="ispumdolor">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et
                            volutpat sit.
                        </div>
                        <div className="Addtocard d-flex">
                            <p> Add To cart</p>
                            <img src="imgfour/Group 235.png" alt=""/>
                        </div>
                        <div className="catigors">
                            <p>Categories:</p>
                            <p>Tags</p>
                            <div className="imgsgroup d-flex">
                                <p>Share</p>
                                <img src="imgfour/Group 202 (1).png" alt=""/>
                                <img src="imgfour/Group 203 (1).png" alt=""/>
                                <img src="imgfour/Group 204 (1).png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">

                <div className="baccolorgre col-md-12">
                    <div className="topvidecard">
                        <a href="#">Description</a>
                        <a href="#">Additional Info</a>
                        <a href="#">Reviews</a>
                        <a href="#">Video</a>
                    </div>
                    <div className="teprature">
                        Varius tempor.
                    </div>
                    <div className="moretexset">
                        Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et
                        eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante.
                        Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet
                        diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat,
                        quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa
                        viverr .
                    </div>
                    <div className="moredetals">
                        More details
                    </div>
                    <div className="detalmore d-flex">
                        <img src="imgfour/Group (5).png" alt=""/>
                        <span>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis
                            justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</span>
                    </div>
                    <div className="detalmore d-flex">
                        <img src="imgfour/Group (5).png" alt=""/>
                        <span>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis
                            justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</span>
                    </div>
                    <div className="detalmore d-flex">
                        <img src="imgfour/Group (5).png" alt=""/>
                        <span>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis
                            justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</span>
                    </div>
                    <div className="detalmore d-flex">
                        <img src="imgfour/Group (5).png" alt=""/>
                        <span>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis
                            justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</span>
                    </div>
                </div>

            </div>
            <div className="container">
                <div className="row my-5">
                    <div className="com-md-12">
                        <div className="forsttext">
                            Related Products
                        </div>
                        <div className="d-flex">
                            <div className="card bacwhite">
                            <div className="imgscard card-body">
                                <img className="img-fluid" src="imgfour/Rectangle 128.png" alt=""/>
                            </div>
                            <div className="bacwhite card-footer">
                                <div className="menswear justify-content-between d-flex">
                                    <p>Mens Fashion Wear
                                    <div> <span>$43.00</span></div>
                                    </p>
                                   <div>
                                       <img src="imgfour/Vector (23).png" alt=""/>
                                       <img src="imgfour/Vector (23).png" alt=""/>
                                       <img src="imgfour/Vector (23).png" alt=""/>
                                       <img src="imgfour/Vector (23).png" alt=""/>
                                       <img src="imgfour/Vector (23).png" alt=""/>
                                   </div>

                                </div>
                            </div>
                        </div>
                            <div className="card bacwhite">
                                <div className="imgscard card-body">
                                    <img className="img-fluid" src="imgfour/Rectangle 133.png" alt=""/>
                                </div>
                                <div className="bacwhite card-footer">
                                    <div className="menswear justify-content-between d-flex">
                                        <p>Women’s Fashion
                                            <div> <span>$67.00</span></div>
                                        </p>
                                        <div>
                                            <img src="imgfour/Vector (23).png" alt=""/>
                                            <img src="imgfour/Vector (23).png" alt=""/>
                                            <img src="imgfour/Vector (23).png" alt=""/>
                                            <img src="imgfour/Vector (23).png" alt=""/>
                                            <img src="imgfour/Vector (23).png" alt=""/>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="card bacwhite">
                                <div className="imgscard card-body">
                                    <img className="img-fluid" src="imgfour/Rectangle 130.png" alt=""/>
                                </div>
                                <div className="bacwhite card-footer">
                                    <div className="menswear justify-content-between d-flex">
                                        <p>Wolx Dummy Fashion
                                            <div> <span>$67.00</span></div>
                                        </p>
                                        <div>
                                            <img src="imgfour/Vector (23).png" alt=""/>
                                            <img src="imgfour/Vector (23).png" alt=""/>
                                            <img src="imgfour/Vector (23).png" alt=""/>
                                            <img src="imgfour/Vector (23).png" alt=""/>
                                            <img src="imgfour/Vector (23).png" alt=""/>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="card bacwhite">
                                <div className="imgscard card-body">
                                    <img className="img-fluid" src="imgfour/Rectangle 131.png" alt=""/>
                                </div>
                                <div className="bacwhite card-footer">
                                    <div className="menswear justify-content-between d-flex">
                                        <p>Top Wall Digital Clock
                                            <div> <span>$51.00</span></div>
                                        </p>
                                        <div>
                                            <img src="imgfour/Vector (23).png" alt=""/>
                                            <img src="imgfour/Vector (23).png" alt=""/>
                                            <img src="imgfour/Vector (23).png" alt=""/>
                                            <img src="imgfour/Vector (23).png" alt=""/>
                                            <img src="imgfour/Vector (23).png" alt=""/>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container">
                <div className="topimg">
                    <img src="image/image 1174.png" alt=""/>
                </div>
            </div>
            <div className="container-fluid">
                <div className="bacfooter col-md-12">
                    <div className="col-md-3 branimg">
                        <img src="image/Hekto.png" alt=""/>
                        <div className="d-flex">
                            <input className="inpufor" placeholder="Enter Email Address" type="text"/>
                            <div className="singinputfor">
                                Sign Up
                            </div>
                        </div>
                        <div className="contacttext">
                            Contact Info
                        </div>
                        <div className="seventext">
                            17 Princess Road, London, Greater London NW1 8JR
                        </div>
                    </div>
                    <div className="col-md-3 branimg1">
                        <div className="cotgeriatext">
                            Catagories
                            <div className="alltext">
                                <p>Laptops & Computers</p>
                                <p>Cameras & Photography</p>
                                <p>Smart Phones & Tablets</p>
                                <p>Video Games & Consoles</p>
                                <p>Waterproof Headphones</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 branimg2">
                        <div className="cotgeriatext">
                            Catagories
                            <div className="alltext">
                                <p>My Account</p>
                                <p>Discount</p>
                                <p>Returns</p>
                                <p>Order Tracking</p>
                                <p>WooCommerce Pages</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 branimg3">
                        <div className="cotgeriatext">
                            Catagories
                            <div className="alltext">
                                <p>Blog</p>
                                <p>Browse the Shop</p>
                                <p>Category</p>
                                <p>Pre-Built Pages</p>
                                <p>Visual Composer Elements</p>
                            </div>
                        </div>
                    </div>

                    <div className="footermenus">
                        <div className="d-flex">
                            <div className="webecytext">
                                ©Webecy - All Rights Reserved
                            </div>
                            <div className="d-flex footerimgs">
                                <img className="widthimg" src="image/Group 202.png" alt=""/>
                                <img className="widthimg" src="image/Group 203.png" alt=""/>
                                <img className="widthimg" src="image/Group 204.png" alt=""/>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}

export default Page4;