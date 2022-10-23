import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from "rsuite/";
import "rsuite/dist/rsuite.min.css";
  
export default function Navbar() {
    return (
       
            <div>
                {/* <h2>freelancer</h2>
                <h4 style={{ color: "green" }}>
                    React Suite Nav Multilevel-navigation
                </h4> */}
                <div style={{ marginBottom: 0, paddingLeft : 30, backgroundColor : 'black'}}>
                    <Nav style={{color : 'black' }}>
                    <Nav.Menu title="Find Jobs">
                            <Nav.Menu title="By Skill">
                              <Nav.Menu title="Find Graphic Design Jobs"> 
                                <Nav.Item> Find Logo Design Jobs</Nav.Item>
                                <Nav.Item> Find Web Design Jobs</Nav.Item>  
                                <Nav.Item> Find Banner Design Jobs</Nav.Item>  
                                <Nav.Item> Find Photoshop Design Jobs</Nav.Item>    
                              </Nav.Menu>
                              <Nav.Menu title="Find Website Jobs"> 
                                <Nav.Item> Find PHP Jobs</Nav.Item>
                                <Nav.Item> Find Javascript Jobs</Nav.Item>  
                                <Nav.Item> Find CSS Jobs</Nav.Item>  
                                <Nav.Item> Find .NET Jobs</Nav.Item> 
                                <Nav.Item> Find WordPress Jobs</Nav.Item>
                                <Nav.Item> Find Shopify Jobs</Nav.Item>  
                                <Nav.Item> Find WIX Jobs</Nav.Item>  
                                <Nav.Item> Find SqaureSpace Jobs</Nav.Item>    
                              </Nav.Menu>
                              <Nav.Menu title="Find Mobile Appication Devleopment Jobs"> 
                                <Nav.Item> Find Iphone Jobs</Nav.Item>
                                <Nav.Item> Find Android Jobs</Nav.Item>  
                                <Nav.Item> Find Flutter Jobs</Nav.Item>  
                                <Nav.Item> Find PhoneGap Jobs</Nav.Item> 
                                <Nav.Item> Find Xamarin Jobs</Nav.Item>
                                <Nav.Item> <Link to= "Hire">Find Other Mobile Application Devleopment Jobs</Link></Nav.Item>
                              </Nav.Menu>
                              <Nav.Menu title="Find Software Devleopment Jobs">                             
                                <Nav.Item> Find Linux Jobs</Nav.Item>
                                <Nav.Item> Find C++ Software Development Jobs</Nav.Item>  
                                <Nav.Item> Find C# Software Development Jobs</Nav.Item>  
                                <Nav.Item> Find Objective C Software Development Jobs</Nav.Item> 
                                <Nav.Item> Find Ruby On Rails Software Development Jobs</Nav.Item>
                                <Nav.Item> Find Python Software Development Jobs</Nav.Item>
                                <Nav.Item> Find Java Software Development Jobs</Nav.Item>
                                <Nav.Item> Find Other Software Development Jobs </Nav.Item>
                              </Nav.Menu>
                            <Nav.Item>Find SEO Jobs</Nav.Item>
                            <Nav.Item>Find Legal Jobs</Nav.Item>
                            <Nav.Item>Find Finance Jobs</Nav.Item>
                            <Nav.Item>Find Manufacturing Jobs</Nav.Item>
                              
                            <Nav.Item>Find Data Entry Jobs</Nav.Item>
                            <Nav.Item>Find Logistics Jobs</Nav.Item>
                            </Nav.Menu>

                            <Nav.Menu title="By Language">
                            <Nav.Item> Find Freelance Jobs In English </Nav.Item>
                            <Nav.Item> Find Freelance Jobs In Spanish</Nav.Item>
                            <Nav.Item> Find Freelance Jobs In Portugese</Nav.Item>
                            <Nav.Item> Find Freelance Jobs In French</Nav.Item>
                            <Nav.Item> Find Freelance Jobs In German</Nav.Item>
                            <Nav.Item> Find Freelancer Jobs in Other Languages</Nav.Item>
                            </Nav.Menu>

                            <Nav.Item>Featured Job</Nav.Item>
                        </Nav.Menu>
                        {/* <Nav.Item>Find Jobs</Nav.Item> */}
                        

                        <Nav.Menu title="Hire Freelancers">
                          <Nav.Menu title= "By Skill">
                            <Nav.Menu title="Hire Graphic Designers">
                                <Nav.Item> Hire Photoshop Designers</Nav.Item>
                                <Nav.Item> Hire Illustrators</Nav.Item>  
                                <Nav.Item> Hire Motion Graphics Designers</Nav.Item>  
                                <Nav.Item> Hire 3D Animators</Nav.Item>   
                                <Nav.Item> Hire 2D Animators</Nav.Item> 
                                <Nav.Item> Hire Business Card Designers </Nav.Item>  
                                <Nav.Item> Hire Fashion Designers</Nav.Item> 
                              </Nav.Menu>
                            <Nav.Item> Hire Logo Designers</Nav.Item>
                            <Nav.Menu title="Hire 3D Graphic Designers">
                                <Nav.Item> Hire 3D Modelers</Nav.Item>
                                <Nav.Item> Hire 3D Renderers</Nav.Item>  
                                <Nav.Item> Hire Other 3D Graphic Designers</Nav.Item>   
                              </Nav.Menu>

                              <Nav.Menu title="Hire Web Designers">                       
                                <Nav.Item> Hire Wordpress Web Designers</Nav.Item>
                                <Nav.Item> Hire Squarespace Web Designers</Nav.Item>  
                                <Nav.Item> Hire Wix Web Designers</Nav.Item>   
                                <Nav.Item> Hire Shopify Web Designers</Nav.Item>  
                                <Nav.Item> Hire Magento Web Designers</Nav.Item> 
                                <Nav.Item> Hire Other Web Designers</Nav.Item>
                              </Nav.Menu>

                              <Nav.Menu title="Hire Web Developers">                      
                                <Nav.Item> Hire PHP Web Developers</Nav.Item>
                                <Nav.Item> Hire HTML5 Web Developers</Nav.Item>  
                                <Nav.Item> Hire CSS Web Developers</Nav.Item>   
                                <Nav.Item> Hire Javascript Web Developers</Nav.Item>  
                                <Nav.Item> Hire Ruby on Rails Web Developers</Nav.Item> 
                                <Nav.Item> Hire node.js Web Developers</Nav.Item>
                                <Nav.Item> Hire Angular.js Web Developers</Nav.Item>
                                <Nav.Item> Hire React.js Web Developers</Nav.Item>
                                <Nav.Item> Hire Other Web Developers </Nav.Item>
                              </Nav.Menu>

                              <Nav.Menu title="Mobile App Developers">   
                                <Nav.Item>  Hire iPhone Mobile App Developers</Nav.Item>
                                <Nav.Item> Hire Android Mobile App Developers</Nav.Item>  
                                <Nav.Item> Hire PhoneGap Mobile App Developers</Nav.Item>   
                                <Nav.Item> Hire Javascript Web Developers</Nav.Item>  
                                <Nav.Item> Hire Flutter Mobile App Developers</Nav.Item> 
                                <Nav.Item> Hire Xamarin Mobile App Developers</Nav.Item>
                                <Nav.Item> Hire Angular.js Web Developers</Nav.Item>
                                <Nav.Item> Hire Other Mobile App Developers  </Nav.Item>
                              </Nav.Menu>

                            </Nav.Menu>
                            <Nav.Menu title="By Location">
                            <Nav.Item>  Hire Freelancers in the United States </Nav.Item>
                            <Nav.Item> Hire Freelancers in the United Kingdom </Nav.Item>
                            <Nav.Item> Hire Freelancers in Canada</Nav.Item>
                            <Nav.Item> Hire Freelancers in India</Nav.Item>
                            <Nav.Item> Hire Freelancers in Australia</Nav.Item>
                            </Nav.Menu>

                            <Nav.Item><Link to="/DummyTestLink">Skilled Categories</Link></Nav.Item>
                        </Nav.Menu>

                       
                        <Nav.Menu title="Get Ideas">
                            <Nav.Item> Get Web Design Ideas</Nav.Item>
                            <Nav.Item> Get Mobile App Ideas</Nav.Item>
                            <Nav.Item> Get Graphic Design Ideas</Nav.Item>
                            <Nav.Item> Get Logo Design Ideas</Nav.Item>
                            <Nav.Item> Get 3D Modelling Ideas</Nav.Item>
                            <Nav.Item> Get Illustration Ideas</Nav.Item>
                            <Nav.Item> Get Branding Ideas</Nav.Item>
                            <Nav.Item> Get Product Design Ideas</Nav.Item>
                            <Nav.Item> Get Package Design Ideas</Nav.Item>
                            <Nav.Item> Get Wordpress Ideas</Nav.Item>
                        </Nav.Menu>
                        <Nav.Menu title="About">
                            <Nav.Item> Enterprise</Nav.Item>
                            <Nav.Item> Membership</Nav.Item>
                            <Nav.Item> Preferred Freelancer Program</Nav.Item>
                            <Nav.Item> Get Verified</Nav.Item>
                        </Nav.Menu>

                        <Nav.Menu title="Resources">
                            <Nav.Item> What is Adobe Photoshop</Nav.Item>
                            <Nav.Item> What Is Android App Development</Nav.Item>
                            <Nav.Item> What Is Article Writing</Nav.Item>
                            <Nav.Item> What Is Data Entry</Nav.Item>
                            <Nav.Item> What Is Graphic Design </Nav.Item>
                            <Nav.Item> What is HTML </Nav.Item>
                            <Nav.Item> What Is Internet Marketing </Nav.Item>
                            <Nav.Item> What Is iPhone App Development </Nav.Item>
                            <Nav.Item> What Is JavaScript </Nav.Item>
                            <Nav.Item> What Is Logo Design </Nav.Item>
                            <Nav.Item> What Is Mobile App Development </Nav.Item>
                            <Nav.Item> What Is PHP </Nav.Item>
                            <Nav.Item> What Is Python </Nav.Item>
                            <Nav.Item> What Is Software Architecture</Nav.Item>
                            <Nav.Item> What Is Web Design</Nav.Item>
                            <Nav.Item> What Is WordPress</Nav.Item>
                        </Nav.Menu>
                    </Nav>
                </div>
            </div>
    );
}