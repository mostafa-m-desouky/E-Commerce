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
          <section className='sec-2'></section>
          <section className='sec-3'></section>
        </div>
      </section>
    </>
  )
}
