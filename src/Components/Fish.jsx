import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/fish.css';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'auto' });
};

const Fish = () => {
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
                <Link to="/Cephalods" onClick={scrollToTop}>
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
      <div class="containerpp">
        <img src="./Assets/cccc.jpg" alt="Image" class="image" />
        <h2 class="headingsss">SEA FISH</h2>
      </div>
      
  <h3 className ="aspirin" >Fishes</h3>
  <div className="containerfsp">
    <div className="cardf">
      <img src="./Assets/1 a.jpg" alt="Card 1" className="cardf-image"/>
      <div className="cardf-content">
       
        <p>White pomfret</p>
      </div>
    </div>
    <div className="cardf">
      <img src="./Assets/ish.jpg" alt="Card 2" className="cardf-image"/>
      <div className="cardf-content">
        
        <p>Chinese pomfret</p>
      </div>
    </div>
    <div className="cardf">
        <img src="./Assets/pre.jpg" alt="Card 2" className="cardf-image"/>
        <div className="cardf-content">
          
          <p>Black pomfret</p>
        </div>
      </div>
  </div>
  
  <div className="containerfsp">
    <div className="cardf">
      <img src="./Assets/sat.jpg" alt="Card 1" className="cardf-image"/>
      <div className="cardf-content">
     
        <p>Pink preach</p>
      </div>
    </div>
    <div className="cardf">
      <img src="./Assets/5.jpg" alt="Card 2" className="cardf-image"/>
      <div className="cardf-content">
        
        <p>Mathi or saridine</p>
      </div>
    </div>
    <div className="cardf">
        <img src="./Assets/4 a.jpg" alt="Card 2" className="cardf-image"/>
        <div className="cardf-content">
          
          <p>Sea bass</p>
        </div>
      </div>
</div>
  
  <div className="containerfsp">
    <div className="cardf">
      <img src="./Assets/3 a.jpg" alt="Card 1" className="cardf-image"/>
      <div className="cardf-content">
        
        <p>Indian salmon</p>
      </div>
    </div>
    <div className="cardf">
      <img src="./Assets/6 a.jpg" alt="Card 2" className="cardf-image"/>
      <div className="cardf-content">
       
        <p>Grey mullet </p>
      </div>
    </div>
    <div className="cardf">
        <img src="./Assets/7 a.jpg" alt="Card 2" className="cardf-image"/>
        <div className="cardf-content">
         
          <p>Yellow fin Tuna</p>
        </div>
      </div>
  </div>
  <div className="containerfsp">
    <div className="cardf">
      <img src="./Assets/8 a.jpg" alt="Card 1" className="cardf-image"/>
      <div className="cardf-content">
        
        <p>Anchovy</p>
      </div>
    </div>
    <div className="cardf">
      <img src="./Assets/9 a.jpg" alt="Card 2" className="cardf-image"/>
      <div className="cardf-content">
        
        <p>King para or gondu para</p>
      </div>
    </div>
    <div className="cardf">
        <img src="./Assets/10 a.jpg" alt="Card 2" className="cardf-image"/>
        <div className="cardf-content">
          
          <p>Mahi mahi</p>
        </div>
      </div>
  </div>
  <div className="containerfsp">
    <div className="cardf">
      <img src="./Assets/11 a.jpg" alt="Card 1" className="cardf-image"/>
      <div className="cardf-content">
        
        <p>Crocker</p>
      </div>
    </div>
    <div className="cardf">
      <img src="./Assets/25 a.jpg" alt="Card 2" className="cardf-image"/>
      <div className="cardf-content">
        
        <p>Indian mackerel or Bangda</p>
      </div>
    </div>
    <div className="cardf">
        <img src="./Assets/25.jpg" alt="Card 2" className="cardf-image"/>
        <div className="cardf-content">
          
          <p>Vanjiram</p>
        </div>
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

export default Fish;
