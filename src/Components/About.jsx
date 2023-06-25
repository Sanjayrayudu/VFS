import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/about.css';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'auto' });
};

const About = () => {
    return(
      <div>
      <header>
        <div className="header-content">Seafood exporters from India</div>
        <div className="social-icons">
        
          <a href="https://www.facebook.com/profile.php?id=100094101189736">
            <i className="fab fa-facebook-f social-icon"></i>
          </a>
          <a href="https://www.instagram.com/varsha_farmer_sea_food/">
            <i className="fab fa-instagram social-icon"></i>
          </a>
          
        </div>
      </header>
      <div className="headerb">
        <div className="header-bcontent">
          <Link to="/">
            {' '}
            <img src="./Assets/logoss.jpg" alt="Logo" className="logo" />{' '}
          </Link>
          <div>
            <div className="company-name" style={{ color: '#333' }}>
              Varsha Farmer Sea Food Pvt.Ltd
            </div>
            <div className="contact-details">
              <div className="contact-icon" style={{ marginRight: '-69px' }}>
                <i className="fa fa-envelope" style={{ marginLeft: '-101px', color: 'darkseagreen' }}></i>
              </div>
              <div>
                <span>Email:</span>
                <a href="mailto:vfseafoods@gmail.com">vfseafoods@gmail.com</a>
              </div>
            </div>
            <div className="contact-details">
              <div className="contact-icon" style={{ marginRight: '-69px' }}>
                <i className="fa fa-phone" style={{ marginLeft: '-101px', color: 'darkseagreen' }}></i>
              </div>
              <div>
              <span>Call us:</span>
                <a href="tel:+918790432054"> +918790432054</a>
              </div>
            </div>
            <div className='tds'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" color= "darkseagreen" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
</svg><span style={{    marginLeft: "10px"
}}>Owned by:</span> M.SATISH</div>
          </div>
        </div>
      </div>
<div className='saann'>
<nav>
        <ul className="menu">
          <li>
            <Link to="/" onClick={scrollToTop}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/About" onClick={scrollToTop}>
              ABOUT
            </Link>
          </li>
          <li>
            <a href="#">OUR DIVISIONS</a>
            <ul className="dropdown-menu">
              <li>
                <Link to="/Preprocessing" onClick={scrollToTop}>
                  TRANSPORTATION
                </Link>
              </li>
              <li>
                <Link to="/Ice" onClick={scrollToTop}>
                  THE BAY OF BENGAL
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">PRODUCTS</a>
            <ul className="dropdown-menu">
              <li>
                <Link to="/Fish" onClick={scrollToTop}>
                  Sea Fish
                </Link>
              </li>
              <li>
                <Link to="/CrustCephalods" onClick={scrollToTop}>
                Sea Prawns 
                </Link>
              </li>
              <li>
                <Link to="/Mollus" onClick={scrollToTop}>
                  Lobster, Crab
                </Link>
              </li>
              <li>
                <Link to="/Crust" onClick={scrollToTop}>
                Frozen Foods
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/Contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
</div>

  <div class="containerp">
    <img src="./Assets/ccc1.jpg" alt="Image" class="image"/>
    <h2 class="heading">About Us</h2>
  </div>
  <h3 className ="janjs" >About Us</h3>
  
  <div class="about , jsnndk">
  <p><b>VARSHA FARMERS SEAFOOD,</b> We travel each and every day to the sea and catch the fish from the Bay of Bengal. We supply wide range of fish to our customers with good quality and freshness. We take care every step to assure the highest levels of freshness and hygiene. We practice quality by Organoleptic checking tools like., Appearance, texture, smell for checking freshness. We are supplying seafood to Kakinada,Uppada,Vizag,Chirala,Andaman & Nicoboar.</p>
     <p>Here are the top 5 benefits of boosting your seafood intake, according to Gans</p>
     <p> <b>1.</b>  Seafood Can Prevent and Reduce Symptoms of Depression
“Studies have shown that people who regularly eat fish are 20 percent less likely than their peers to have depression,” says Gans. This is thanks to seafood’s anti-inflammatory properties—a result of its high amount of DHA and EPA omega-3 fatty acids—and its ability to promote serotonin production and absorption.</p>
<p><b>2.</b>  Seafood Decreases the Risk of Alzheimer’s and Dementia
According to Gans, nutrition interventions, such as increased consumption of fatty fish, and the subsequent increases in EPA and DHA levels in the blood, have proven to decrease the risk of developing dementia and Alzheimer’s disease. “In fact, consuming as little as one seafood meal per week has been associated with decreasing one’s risk for both Alzheimer’s and dementia,” she adds. Your best options are wild Alaska salmon, halibut, and sablefish, which contain Vitamin D, amino acids such as tryptophan, and the omega-3 fatty acids EPA and DHA, all of which are necessary to supporting mood and cognition, says Gans.</p>
 <p><b>3.</b>  Seafood Protects Your Heart
“Eating seafood two times per week has proven to reduce the risk of death from any health-related cause by 17 percent, and the risk of dying from heart disease by 36 percent,” says Gans. Incorporating nutrient dense seafood into a diet can lower inflammation and improve triglyceride and cholesterol levels.</p>
<p><b>4.</b>  Seafood Builds Up Your Immune System and Lowers Inflammation
The omega-3 fatty acids from fish help to reduce the risk of inflammation. In addition, Gans says that seafood is also a source of immune-boosting vitamin A, D, selenium, zinc, and glutamine.</p>
     <p><b>5.</b>  Seafood Promotes Infant and Child Development
“Omega-3 fatty acids (DHA in particular) are essential nutrients in early human development, including vision, immune, nervous system, and brain growth,” explains Gans. “During pregnancy, a Harvard study showed that seafood consumption is beneficial for mom’s health and baby brain development. The benefits continue throughout infancy and adolescence as seafood consumption has proven to drive an increase in IQ.”</p>
 </div>
 <div className="full-width-box" style={{ backgroundImage: `url('./Assets/fish4.jpg')` }}>
    <h2>Accreditations</h2><br></br>
    <p style={{    marginTop: "-37px",
    marginLeft: "30px"}}>We take immense pride to state that we meet all international standards of sea food industry</p>
    <img src="./Assets/boximg.jpg" alt="Box Image"/>
  </div>
  <div class="infra , shdha" > Our Material </div>
  <div class="containera">
    <div class="boxa">
      
    <b>Seafood:</b>
White pomfret,
Black pomfret,
Silver or Chinese pomfret,
Indian salmon or maga,
King fish or surmai,
Seer or vanjiram,
Sardine or mathi,
Sea bass,
Mahi mahi fish,
Tuna or yellow fin Tuna,
Indian Marcel or Bangda,
Shark fish,
Grey mullet, 
Travally vatta or gondu para,
Anchovy or nethallu,
Pink preach ,
Barrakuda fish,
Leather jacket or skin,
Silver crocker,
Teak fish,
Marine fish,
Doller fish,
Blue crab,
3 dot crab,
Mud crab,
Lobster,
Norn or white prawns,
Kalanda prawns,
Tiger prawns,
Squid ,
Cuttle Fish
    </div>
    <div class="boxa">
    <b>Vanami :</b> 
White prawns ( all counts),
Scampi prawns,
Murrel fish or korameenu fish,
Pandugappa ,
Rohu fish,
Catla or botchee fish,
Pungus or basa,
Roopchand, 
Tilapia
    </div>
    <div class="boxa">
  <b>Frozen :</b>
Pd,pdto available
Grade 1 & 2 available
8/12,
13/15,
16/20,
21/25,
26/30,
31/40 all counts available
Fish - tilapia, pangus basa & Vietnam white basa fillet also available
    </div>
   
  </div>
  <div className="container1">
    <div className="box contact-info">
      <h2>Contact Information</h2>
      <i className="icon fas fa-phone"></i>
      <p>Call us: +91 8790432054</p> 
    </div>
    <div className="box email-info">
      <h2>Email</h2>
      <div>
        <i className="icon fas fa-envelope"></i>
        <p>vfseafoods@gmail.com</p>
      </div>
    </div>
  </div>
  <div className="container2 my-5" style={{margin:0 , height:"10px"}}>
  <footer className="text-center text-lg-start text-white , sdasjdansd  " >
     
      <section
               className="d-flex justify-content-between p-4"
               style={{backgroundColor: "#6351ce"}}
               >
       
        <div className="me-5">
          <span>Get connected with us on social networks:</span>
        </div>
       
         <div> <a href="https://www.facebook.com/profile.php?id=100094101189736" className="text-white me-4 , vf" >
            <i className="fab fa-facebook-f"></i>
          </a>
         
         
         
          <a href="https://www.instagram.com/varsha_farmer_sea_food/" className="text-white me-4">
            <i className="fab fa-instagram"></i>
          </a>
         
         
        </div>
       
      </section>
   
      <section className="">
        <div className="container2 text-center text-md-start mt-5">
         
          <div className="row mt-3">
            
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
             
              <h6 className="text-uppercase fw-bold">varsha sea foods</h6>
              <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style = {{
                    width: '60px',
                    backgroundColor: '#7c4dff',
                    height: '2px',
                  }}
                  />
              <p className="faf">
              Sea Food Exporter in India . We supply wide range of fish to our customers with good quality and freshness.
              </p>
            </div>
        
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
             
              <h6 className="text-uppercase fw-bold">Main Menu</h6>
              <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                  />
              <p>
                <Link to="/" className="text-white" onClick={scrollToTop}>Home</Link>
              </p>
              <p>
                <Link to="/About" className="text-white" onClick={scrollToTop}>About Us</Link>
              </p>
              <p>
                <Link to="/Preprocessing" className="text-white" onClick={scrollToTop}>Our Divisions</Link>
              </p>
              <p>
                <Link to="/Fish" className="text-white" onClick={scrollToTop}>Our Products</Link>
              </p>
            </div>
            
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
             
              <h6 className="text-uppercase fw-bold">Products</h6>
              <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                  />
              <p>
                <Link to="/Fish" className="text-white" onClick={scrollToTop}>Sea Fish</Link>
              </p>
              <p>
                <Link to="/Cephalods" className="text-white" onClick={scrollToTop}>Sea Prawns</Link>
              </p>
              <p>
                <Link to="/Mollus" className="text-white" onClick={scrollToTop}>Lobster,Crab</Link>
              </p>
              <p>
                <Link to="/Crust" className="text-white" onClick={scrollToTop}>Frozen Food</Link>
              </p>
            </div>
            
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                  />
              <p><i className="fas fa-home mr-3"></i> 8-3, Road No-6, Vakalpudi ,Kakinada </p>
              <p><i className="fas fa-envelope mr-3"></i> vfseafoods@gmail.com</p>
              <p><i className="fas fa-phone mr-3"></i> + 91 8790432054</p>
              <p><i className="fas fa-phone mr-3"></i> + 91 6281836080</p>
            </div>
            
          </div>
          
        </div>
      </section>
      <div
           className="text-center p-3"
           style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
           >
        © 2022: 
        <a className="text-white" href="/"
           >Varsha Farmer Sea Food</a>
      </div>
    </footer>
    </div>
    </div>
 
 )

 }

export default About;
