import React from 'react'
import "./home.css"
import {Link} from 'react-router-dom'
export default function Home() {
  return (
    <>
      <section>
        <div className='container'>
          <section className='sec-1'>
            <div className='box box-1'>
              <div className='content'>
                <h4>supercharged for pros.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo <br /> for 24 mo. footnote</p>
                <Link>Buy Now</Link>
              </div>
            </div>
            <div className='box box-2'>
              <div className='content'>
                <h4>best sale</h4>
                <h5>Laptops Max</h5>
                <p>From $1699.00 or <br /> $64.62/mo. </p>
              </div>
            </div>
            <div className='box box-3'>
              <div className='content'>
                <h4>new arrival</h4>
                <h5>Buy IPAD Air</h5>
                <p>From $599 or <br /> $49.91/mo. for 12 mo.*</p>
              </div>
            </div>
            <div className='box box-4'>
              <div className='content'>
                <h4>15% off</h4>
                <h5>Smartwatch 7</h5>
                <p>Shop the latest band <br /> styles and colors.</p>
              </div>
            </div>
            <div className='box box-5'>
              <div className='content'>
                <h4>free engraving</h4>
                <h5>AirPods Max</h5>
                <p>High-fidelity playback &<br /> ultra-low distortion</p>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className='section-2'>
        <div className='serv serve-1'>
          <div className='left'>
            <i class="fa-solid fa-truck"></i>
          </div>
          <div className='right'>
            <h6>Free Shipping</h6>
            <p>From all orders over $100</p>
          </div>
        </div>
        <div className='serv serve-2'>
          <div className='left'>
            <i class="fa-solid fa-gift"></i>
          </div>
          <div className='right'>
            <h6>Daily Surprise Offers</h6>
            <p>Save up to 25% off</p>
          </div>
        </div>
        <div className='serv serve-3'>
          <div className='left'>
            <i class="fa-solid fa-headset"></i>
          </div>
          <div className='right'>
            <h6>Support 24/7</h6>
            <p>Shop with an expert</p>
          </div>
        </div>
        <div className='serv serve-4'>
          <div className='left'>
            <i class="fa-solid fa-hand-holding-dollar"></i>
          </div>
          <div className='right'>
            <h6>Affordable Prices</h6>
            <p>Get Factory direct price</p>
          </div>
        </div>
        <div className='serv serve-5'>
          <div className='left'>
            <i class="fa-regular fa-credit-card"></i>
          </div>
          <div className='right'>
            <h6>Secure Payments</h6>
            <p>100% Protected Payments</p>
          </div>
        </div>
      </section>
      <section className='section-3'>
        <div className='container'>
          <div className='serv serve-1'>
            <div className='left'>
              <h6>Computers & Laptop</h6>
              <p>8 Items</p>
            </div>
            <div className='right'>
              <img src="./../../assets/laptop.jpg" alt='camera'/>
            </div>
          </div>
          <div className='serv serve-2'>
            <div className='left'>
              <h6>Cameras</h6>
              <p>10 Items</p>
            </div>
            <div className='right'>
              <img src="./../../assets/camera.jpg" alt='camera'/>
            </div>
          </div>
          <div className='serv serve-3'>
            <div className='left'>
              <h6>Smart Television</h6>
              <p>12 Items</p>
            </div>
            <div className='right'>
              <img src="./../../assets/tv.jpg" alt='tv'/>
            </div>
          </div>
          <div className='serv serve-4'>
            <div className='left'>
              <h6>SmartWatches</h6>
              <p>13 Items</p>
            </div>
            <div className='right'>
              <img src="./../../assets/headphone.jpg" alt='watch'/>
            </div>
          </div>
          <div className='serv serve-5'>
            <div className='left'>
              <h6>Music & Gaming</h6>
              <p>4 Items</p>
            </div>
            <div className='right'>
              <img src="./../../assets/laptop.jpg" alt='camera'/>
            </div>
          </div>
          <div className='serv serve-6'>
            <div className='left'>
              <h6>Mobiles & Tablets</h6>
              <p>5 Items</p>
            </div>
            <div className='right'>
              <img src="./../../assets/laptop.jpg" alt='camera'/>
            </div>
          </div>
          <div className='serv serve-7'>
            <div className='left'>
              <h6>Headphones</h6>
              <p>6 Items</p>
            </div>
            <div className='right'>
              <img src="./../../assets/headphone.jpg" alt='camera'/>
            </div>
          </div>
          <div className='serv serve-8'>
            <div className='left'>
              <h6>Accessories</h6>
              <p>10 Items</p>
            </div>
            <div className='right'>
              <img src="./../../assets/acc.jpg" alt='acc'/>
            </div>
          </div>
          <div className='serv serve-9'>
            <div className='left'>
              <h6>Portable Speakers</h6>
              <p>8 Items</p>
            </div>
            <div className='right'>
              <img src="./../../assets/speaker.jpg" alt='speaker'/>
            </div>
          </div>
          <div className='serv serve-11'>
            <div className='left'>
              <h6>Home Appliances</h6>
              <p>6 Items</p>
            </div>
            <div className='right'>
            <img src="./../../assets/homeapp.jpg" alt='homeapp'/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
