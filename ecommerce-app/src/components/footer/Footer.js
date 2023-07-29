import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <section className='sec-1'>
        <div className='container'>
          <div className='left'>
          <i class="fa-regular fa-paper-plane"></i>
          <h2>Sign Up For Newsletter</h2>
          </div>
          <div className='right'>
          <input type="email" class="form-control" id="input" placeholder="Your Email" />
          <label for="input" class="form-label">subscribe</label>
          </div>
        </div>
      </section>
      <section className='sec-2'>
        <div className='container-2'>
          <div className='cont content-1'>
            <h4>Contact Us</h4>
            <div className='links'>
              <address>
                Hno : 227 Near Vill chopal, <br />
                PinCode: 131103
              </address>
              <a href='tel:+20 1143237857'><i class="fa-solid fa-phone"></i> 0143237857</a>
              <div className='social-icons'>
                <a href='https://github.com/mostafa-m-desouky'><i class="fa-brands fa-github"></i></a>
                <a href='https://www.linkedin.com/in/mostafa-magdy-ba1096271/'><i class="fa-brands fa-linkedin"></i></a>
                <a href='https://twitter.com/Mustafa_Desouky'><i class="fa-brands fa-twitter"></i></a>
                <a href='mailto:mostafa.m.desouky@gmail.com'><i class="fa-brands fa-google"></i></a>
              </div>
            </div>
          </div>
          <div className='cont content-2'>
            <h4>Information</h4>    
            <div className='links'>
              <Link>Privacy Policy</Link>
              <Link>Refund Policy</Link>
              <Link>Shipping Policy</Link>
              <Link>Terms & Conditions</Link>
            </div>        
          </div>
          <div className='cont content-3'>
            <h4>Account</h4>  
            <div className='links'>
              <Link>About Us</Link>
              <Link>Faq</Link>
              <Link>Contact</Link>
              <Link>Blogs</Link>
            </div>
          </div>
          <div className='cont content-4'>
            <h4>Quick Links</h4>
            <div className='links'>
              <Link>Laptops</Link>
              <Link>Headphones</Link>
              <Link>Tablets</Link>
              <Link>Watch</Link>
            </div>
          </div>
        </div>
      </section>
      <section className='sec-3'>
        <p>Made By Mostafa Magdy</p>
      </section>
     </footer> 
  )
}

export default Footer
