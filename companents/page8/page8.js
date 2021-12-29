import React from 'react';
import "./page8.css"
import {BrowserRouter, Link} from "react-router-dom";

function Page8(props) {
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
                        Shop Grid Default
                        <p>Home. Pages <span>Shop Grid Default</span></p>
                    </div>

                </div>
            </div>
            <div className="container">
                <div className="row my-md-5">
                    <div className="col-md-6">
                        <div className="infortext">
                            <p> Information About us</p>
                            <div className="massagetext">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis
                                aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor
                                lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
                            </div>
                        </div>
                        <div className="inforimg">
                            <img src="eightimg/Ellipse 41.png" alt=""/>
                            <img src="eightimg/Ellipse 42.png" alt=""/>
                            <img src="eightimg/Ellipse 43.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="waycantext">
                            <p>Contact Way</p>
                            <div className="forcolimg d-flex">
                                <div className="colimgone d-flex">
                                    <img src="eightimg/Ellipse 44.png" alt=""/>
                                    <div>
                                        <p>Tel: 877-67-88-99</p>
                                        <span>E-Mail: shop@store.com</span>
                                    </div>
                                </div>
                                <div className="colimgone d-flex">
                                    <img src="eightimg/Ellipse 45.png" alt=""/>
                                    <div>
                                        <p>Tel: 877-67-88-99</p>
                                        <span>E-Mail: shop@store.com</span>
                                    </div>
                                </div>
                            </div>
                            <div className="forcolimg1 d-flex">
                                <div className="colimgone d-flex">
                                    <img src="eightimg/Ellipse 46.png" alt=""/>
                                    <div>
                                        <p>20 Margaret st, London</p>
                                        <span>Great britain, 3NM98-LK</span>
                                    </div>
                                </div>
                                <div className="colimgone d-flex">
                                    <img src="eightimg/Ellipse 47.png" alt=""/>
                                    <div>
                                        <p>Free standard shipping</p>
                                        <span>on all orders.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row my-md-5">
                    <div className="col-md-6">
                        <div className="getintouch">
                            Get In Touch
                            <div className="gettextin">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique
                                amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
                            </div>
                        </div>
                        <div className="inputares d-flex">
                            <input className="iputare2" placeholder="Your Name*" type="text"/>
                            <input className="iputare2" placeholder="Your E-mail" type="text"/>
                        </div>
                        <div className="inpulenth">
                            <input className="subject" placeholder="Subject*" type="text"/>
                        </div>
                        <div className="typedate">
                            <textarea className="typtext" placeholder="Type Your Messege*" type="textarea"/>
                        </div>
                        <div className="butongrupq">
                            <div className="sendgmail">
                                Send Mail
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid eightimg" src="eightimg/Group 124.png" alt=""/>
                    </div>
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

export default Page8;