import React, {Component} from 'react';
import "./home.css"
import {BrowserRouter, Link, Switch} from "react-router-dom";
import Carousel from "react-elastic-carousel"


const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 500, itemsToShow: 2},
    {width: 700, itemsToShow: 3},
    {width: 768, itemsToShow: 4},
    {width: 1200, itemsToShow: 4},
];


function Home(props) {
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
            <div className="pageimg d-flex  w-100">
                <div className="container-fluid">
                    <div className="forimg">
                        <img className="img-fluid" src="image/image 32.png" alt=""/>
                    </div>
                    <div className="fortextgroup">
                        <div className="fortext1">
                            Best Furniture For Your Castle....
                        </div>
                        <div className="fortext2">
                            New Furniture Collection
                            Trends in 2020
                        </div>
                        <div className="fortext3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            in phasellus non in justo.
                        </div>
                        <div className="forbutton">
                            Shop Now
                        </div>
                    </div>
                    <div className="forseconimg">
                        <img className="img-fluid" src="image/sofa promotional header.png" alt=""/>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row my-5">
                    <div className="textss">
                        Featured Products
                    </div>
                    <div className="ofcaroucel my-5 col-md-12">
                        <Carousel breakPoints={breakPoints}>
                            <div className="card">
                                <div className="card-body">
                                    <img className="img-fluid" src="image/image 1.png" alt=""/>
                                    <Link className="links" to={''}>Wiew detalis</Link>
                                </div>
                                <div className="ant-btn-block form-control card-footer">
                                    <p className="chair text-center">Cantilever chair</p>
                                    <p className="chair text-center">Code - Y523201</p>
                                    <p className="chair text-center">$42.00</p>
                                </div>

                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <img className="img-fluid" src="image/image 3.png" alt=""/>
                                    <Link className="links" to={''}>Wiew detalis</Link>
                                </div>
                                <div className="ant-btn-block form-control card-footer">
                                    <p className="chair text-center">Cantilever chair</p>
                                    <p className="chair text-center">Code - Y523201</p>
                                    <p className="chair text-center">$42.00</p>
                                </div>

                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <img className="img-fluid" src="image/image 1168.png" alt=""/>
                                    <Link className="links" to={''}>Wiew detalis</Link>
                                </div>
                                <div className="ant-btn-block form-control card-footer">
                                    <p className="chair text-center">Cantilever chair</p>
                                    <p className="chair text-center">Code - Y523201</p>
                                    <p className="chair text-center">$42.00</p>
                                </div>

                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <img className="img-fluid" src="image/imgs.png" alt=""/>
                                    <Link className="links" to={''}>Wiew detalis</Link>
                                </div>
                                <div className="ant-btn-block form-control card-footer">
                                    <p className="chair text-center">Cantilever chair</p>
                                    <p className="chair text-center">Code - Y523201</p>
                                    <p className="chair text-center">$42.00</p>
                                </div>

                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <img className="img-fluid" src="image/image 1.png" alt=""/>
                                    <Link className="links" to={''}>Wiew detalis</Link>
                                </div>
                                <div className="ant-btn-block form-control card-footer">
                                    <p className="chair text-center">Cantilever chair</p>
                                    <p className="chair text-center">Code - Y523201</p>
                                    <p className="chair text-center">$42.00</p>
                                </div>

                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <img className="img-fluid" src="image/image 3.png" alt=""/>
                                    <Link className="links" to={''}>Wiew detalis</Link>
                                </div>
                                <div className="ant-btn-block form-control card-footer">
                                    <p className="chair text-center">Cantilever chair</p>
                                    <p className="chair text-center">Code - Y523201</p>
                                    <p className="chair text-center">$42.00</p>
                                </div>

                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <img className="img-fluid" src="image/image 1168.png" alt=""/>
                                    <Link className="links" to={''}>Wiew detalis</Link>
                                </div>
                                <div className="ant-btn-block form-control card-footer">
                                    <p className="chair text-center">Cantilever chair</p>
                                    <p className="chair text-center">Code - Y523201</p>
                                    <p className="chair text-center">$42.00</p>
                                </div>

                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <img className="img-fluid" src="image/imgs.png" alt=""/>
                                    <Link className="links" to={''}>Wiew detalis</Link>
                                </div>
                                <div className="ant-btn-block form-control card-footer">
                                    <p className="chair text-center">Cantilever chair</p>
                                    <p className="chair text-center">Code - Y523201</p>
                                    <p className="chair text-center">$42.00</p>
                                </div>

                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <img className="img-fluid" src="image/image 1.png" alt=""/>
                                    <Link className="links" to={''}>Wiew detalis</Link>
                                </div>
                                <div className="ant-btn-block form-control card-footer">
                                    <p className="chair text-center">Cantilever chair</p>
                                    <p className="chair text-center">Code - Y523201</p>
                                    <p className="chair text-center">$42.00</p>
                                </div>

                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <img className="img-fluid" src="image/image 3.png" alt=""/>
                                    <Link className="links" to={''}>Wiew detalis</Link>
                                </div>
                                <div className="ant-btn-block form-control card-footer">
                                    <p className="chair text-center">Cantilever chair</p>
                                    <p className="chair text-center">Code - Y523201</p>
                                    <p className="chair text-center">$42.00</p>
                                </div>

                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <img className="img-fluid" src="image/image 1168.png" alt=""/>
                                    <Link className="links" to={''}>Wiew detalis</Link>
                                </div>
                                <div className="ant-btn-block form-control card-footer">
                                    <p className="chair text-center">Cantilever chair</p>
                                    <p className="chair text-center">Code - Y523201</p>
                                    <p className="chair text-center">$42.00</p>
                                </div>

                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <img className="img-fluid" src="image/imgs.png" alt=""/>
                                    <Link className="links" to={''}>Wiew detalis</Link>
                                </div>
                                <div className="ant-btn-block form-control card-footer">
                                    <p className="chair text-center">Cantilever chair</p>
                                    <p className="chair text-center">Code - Y523201</p>
                                    <p className="chair text-center">$42.00</p>
                                </div>

                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-12">
                        <div className="leattest">
                            Leatest Products
                        </div>
                        <div className="formenu ">
                            <a href="#">New Arrival</a>
                            <a href="#">Best Seller</a>
                            <a href="#">Featured</a>
                            <a href="#">Special Offer</a>
                        </div>
                        <div className="threeimg justify-content-between d-flex my-5">
                            <div className="card">
                                <div className="card-body ">
                                    <img src="image/image 1166.png" alt=""/>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex twootext justify-content-between">
                                        <p>Comfort Handy Craft</p>
                                        <p>$42.00 <span> $65.00</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body surimg ">
                                    <img src="image/image 15.png" alt=""/>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex twootext justify-content-between">
                                        <p>Comfort Handy Craft</p>
                                        <p>$42.00 <span> $65.00</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body ">
                                    <img className="image3png" src="image/image 1168.png" alt=""/>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex twootext justify-content-between">
                                        <p>Comfort Handy Craft</p>
                                        <p>$42.00 <span> $65.00</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="threeimg justify-content-between d-flex my-5">
                            <div className="card">
                                <div className="card-body ">
                                    <img src="image/image 23.png" alt=""/>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex twootext justify-content-between">
                                        <p>Comfort Handy Craft</p>
                                        <p>$42.00 <span> $65.00</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body surimg1 ">
                                    <img src="image/image 32 (1).png" alt=""/>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex twootext justify-content-between">
                                        <p>Comfort Handy Craft</p>
                                        <p>$42.00 <span> $65.00</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body ">
                                    <img className="image3png" src="image/image 3.png" alt=""/>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex twootext justify-content-between">
                                        <p>Comfort Handy Craft</p>
                                        <p>$42.00 <span> $65.00</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="shopex row my-5">
                    <p>What Shopex Offer!</p>
                    <div className="mt-5 justify-content-between d-flex col-md-12">
                        <div className="card groupweek">
                            <div className="card-body">
                                <img className="truk" src="image/Group (1).png" alt=""/>
                                <p>24/7 Support</p>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</h5>
                            </div>
                        </div>
                        <div className="card groupweek">
                            <div className="card-body">
                                <img src="image/cashback 1.png" alt=""/>
                                <p>24/7 Support</p>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</h5>
                            </div>
                        </div>
                        <div className="card groupweek">
                            <div className="card-body">
                                <img src="image/Group (2).png" alt=""/>
                                <p>24/7 Support</p>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</h5>
                            </div>
                        </div>
                        <div className="card groupweek">
                            <div className="card-body">
                                <img src="image/Group (3).png" alt=""/>
                                <p>24/7 Support</p>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="husepage d-flex w-100">
                <div className="container-fluid">
                    <div className="row-my-5">
                        <div className=" d-flex uniqesofa col-md-12 ">
                            <div className="imghouse">
                                <img src="image/Group 153.png" alt=""/>
                            </div>
                            <div className="trendingimg">
                                <div className="foronetext">
                                    Unique Features Of leatest &
                                    Trending Poducts
                                </div>
                                <div className="secondtext">
                                    <img src="image/Ellipse 65.png" alt=""/>
                                    All frames constructed with hardwood solids and laminates
                                </div>
                                <div className="secondtext1">
                                    <img src="image/Ellipse 66.png" alt=""/>
                                    Reinforced with double wood dowels, glue, screw - nails corner
                                    blocks and machine nails
                                </div>
                                <div className="secondtext2">
                                    <img src="image/Ellipse 67.png" alt=""/>
                                    Arms, backs and seats are structurally reinforced
                                </div>
                                <div className="d-flex">
                                    <div className=" addcard"><p>Add To Cart</p></div>
                                    <div className="italianteaxt">
                                        <p>B&B Italian Sofa </p>
                                        <div className="p1">$32.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-12">
                        <div className="trendingtext">
                            Trending Products
                        </div>
                        <div className="fourimg">
                            <div className="justify-content-between d-flex firstimg">
                                <div className="card">
                                    <div className="card-body">
                                        <img src="image/image 1171.png" alt=""/>
                                    </div>
                                    <div className="card-footer">
                                        <div className="chairtext">
                                            Cantilever chair
                                        </div>
                                        <div className="rubtext d-flex">
                                            <p>$26.00 </p>
                                            <div className="rub2text">$42.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <img src="image/image 1170.png" alt=""/>
                                    </div>
                                    <div className="card-footer">
                                        <div className="chairtext">
                                            Cantilever chair
                                        </div>
                                        <div className="rubtext d-flex">
                                            <p>$26.00 </p>
                                            <div className="rub2text">$42.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <img className="blackchair" src="image/image 32 (1).png" alt=""/>
                                    </div>
                                    <div className="card-footer">
                                        <div className="chairtext">
                                            Cantilever chair
                                        </div>
                                        <div className="rubtext d-flex">
                                            <p>$26.00 </p>
                                            <div className="rub2text">$42.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <img src="image/image 31.png" alt=""/>
                                    </div>
                                    <div className="card-footer">
                                        <div className="chairtext">
                                            Cantilever chair
                                        </div>
                                        <div className="rubtext d-flex">
                                            <p>$26.00 </p>
                                            <div className="rub2text">$42.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row my-5">
                    <div className="ockloctime col-md-4">
                        <div className="presenttext">
                            23% off in all products
                        </div>
                        <div className="shoptext">Shop Now</div>
                        <img className="oclockimg" src="image/image 1162.png" alt=""/>
                    </div>
                    <div className="ockloctime1 col-md-4">
                        <div className="presenttext">
                            23% off in all products
                        </div>
                        <div className="shoptext">Shop Now</div>
                        <img className="oclockimg1" src="image/image 1161.png" alt=""/>
                    </div>
                    <div className="ockloctime2 col-md-4">
                        <div className="d-flex twoothree">
                            <div className="exsactcheir">
                                <img src="image/image 30.png" alt=""/>
                            </div>
                            <div className="twooduble">
                                <div className="exclusive">Executive Seat chair</div>
                                <div className="threetwo">$32.00</div>
                            </div>
                        </div>
                        <div className="d-flex twoothree">
                            <div className="exsactcheir">
                                <img src="image/image 30.png" alt=""/>
                            </div>
                            <div className="twooduble">
                                <div className="exclusive">Executive Seat chair</div>
                                <div className="threetwo">$32.00</div>
                            </div>
                        </div>
                        <div className="d-flex twoothree">
                            <div className="exsactcheir">
                                <img src="image/image 30.png" alt=""/>
                            </div>
                            <div className="twooduble">
                                <div className="exclusive">Executive Seat chair</div>
                                <div className="threetwo">$32.00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-12">
                        <div className="teaxtitem">
                            Discount Item
                        </div>
                        <div className="menugroupss">
                            <a href="#">Wood Chair</a>
                            <a href="#">Plastic Chair</a>
                            <a href="#">Sofa Colletion</a>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="prediscount">
                                    20% Discount Of All Products
                                </div>
                                <div className="eamptext">
                                    Eams Sofa Compact
                                </div>
                                <div className="moreectext">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse
                                    nec, bibendum condimentum.
                                </div>
                                <div className="justify-content-between d-flex dplaytext">
                                    <div className="dispalytext">
                                        <img src="image/Vector (15).png" alt=""/>
                                        Material expose like metals
                                        <p><img src="image/Vector (15).png" alt=""/>
                                            Simple neutral colours.</p>
                                    </div>
                                    <div className="dispalytext">
                                        <img src="image/Vector (15).png" alt=""/>
                                        Clear lines and geomatric figures
                                        <p><img src="image/Vector (15).png" alt=""/>
                                            Material expose like metals</p>
                                    </div>
                                </div>
                                <div className="shopsgroup">
                                    Shop Now
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img className="img-fluid" src="image/Group 154.png" alt=""/>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-md-12">
                                <div className="toptext">
                                    Top Categories
                                </div>
                                <div className="row my-5">
                                    <div className="borderradius col-md-3">
                                        <img src="image/image 1166.png" alt=""/>
                                        <div className="lwctext">
                                            Mini LCW Chair <p>$56.00</p>
                                        </div>
                                    </div>
                                    <div className="borderradius col-md-3">
                                        <img src="image/image 1168.png" alt=""/>
                                        <div className="lwctext">
                                            Mini LCW Chair <p>$56.00</p>
                                        </div>
                                    </div>
                                    <div className="borderradius col-md-3">
                                        <img src="image/image 1170.png" alt=""/>
                                        <div className="lwctext">
                                            Mini LCW Chair <p>$56.00</p>
                                        </div>
                                    </div>
                                    <div className="borderradius col-md-3">
                                        <img src="image/image 1171.png" alt=""/>
                                        <div className="lwctext">
                                            Mini LCW Chair <p>$56.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="baccimg d-block">
                    <div><img className="img-fluid" src="image/Rectangle 102.png" alt=""/></div>
                    <div className="bacvtext">
                        Get Leatest Update By Subscribe <br/>
                        Our Newslater
                    </div>
                    <div className="bacbutton">
                        Shop Now
                    </div>
                </div>

            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="topimg">
                            <img src="image/image 1174.png" alt=""/>
                        </div>
                        <div className="blogtext">
                            Leatest Blog
                        </div>
                        <div className="row my-5">
                            <div className="col-md-4">
                                <div className="shodcard card">
                                    <img src="image/JIUjvqe2ZHg.png" alt=""/>
                                    <div className=" card-body">
                                        <div className=" d-flex imgstext">
                                            <div className="sabeltext">
                                                <img src="image/Vector (16).png" alt=""/>
                                                SaberAli
                                            </div>
                                            <div className="sabeltext1">
                                                <img src="image/Vector (17).png" alt=""/>
                                                21 August,2020
                                            </div>
                                        </div>
                                        <div className="topessoctext">
                                            <div className="trendtext">
                                                Top esssential Trends in 2021
                                            </div>
                                            <div className="offthistext">
                                                More off this less hello samlande lied much
                                                over tightly circa horse taped mightly
                                            </div>
                                            <div className="readmoretext">
                                                Read More
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="shodcard card">
                                    <img src="image/2dcYhvbHV-M.png" alt=""/>
                                    <div className=" card-body">
                                        <div className=" d-flex imgstext">
                                            <div className="sabeltext">
                                                <img src="image/Vector (16).png" alt=""/>
                                                Surfauxion
                                            </div>
                                            <div className="sabeltext1">
                                                <img src="image/Vector (17).png" alt=""/>
                                                21 August,2020
                                            </div>
                                        </div>
                                        <div className="topessoctext">
                                            <div className="trendtext">
                                                Top esssential Trends in 2021
                                            </div>
                                            <div className="offthistext">
                                                More off this less hello samlande lied much
                                                over tightly circa horse taped mightly
                                            </div>
                                            <div className="readmoretext">
                                                Read More
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="shodcard card">
                                    <img src="image/2dcYhvbHV-M (1).png" alt=""/>
                                    <div className=" card-body">
                                        <div className=" d-flex imgstext">
                                            <div className="sabeltext">
                                                <img src="image/Vector (16).png" alt=""/>
                                                SaberAli
                                            </div>
                                            <div className="sabeltext1">
                                                <img src="image/Vector (17).png" alt=""/>
                                                21 August,2020
                                            </div>
                                        </div>
                                        <div className="topessoctext">
                                            <div className="trendtext">
                                                Top esssential Trends in 2021
                                            </div>
                                            <div className="offthistext">
                                                More off this less hello samlande lied much
                                                over tightly circa horse taped mightly
                                            </div>
                                            <div className="readmoretext">
                                                Read More
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                    <div className="bacfooter col-md-12">
                     <div className="col-md-3 branimg">
                            <img src="image/Hekto.png" alt=""/>
                            <div className="d-flex" >
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

export default Home;