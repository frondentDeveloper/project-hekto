import React from 'react';
import "./page5.css"
import {BrowserRouter, Link} from "react-router-dom";

function Page5(props) {
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
                       Order Completed
                       <p>Home. Pages <span>Shop Grid Default</span></p>
                   </div>

               </div>
           </div>
           <div className="container">
               <div className="row my-5">
                   <div className="col-md-10 d-flex">
                       <div className="imgoclocks">
                           <img src="fiveimgs/Group (6).png" alt=""/>
                       </div>
                       <div className="order">
                           <div className="orderimg">
                               <img src="fiveimgs/Vector 15.png" alt=""/>
                               <div className="ordertext">
                                   Your Order Is Completed!
                               </div>
                               <div className="ordermore">
                                   Thank you for your order! Your order is being processed and will be completed within 3-6
                                   hours. You will receive an email confirmation when your order is completed.

                               </div>
                               <div className="containebuton">
                                   Continue Shopping
                               </div>
                           </div>
                       </div>
                       <div className="tableimg">
                           <img src="fiveimgs/Group (7).png" alt=""/>
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

export default Page5;