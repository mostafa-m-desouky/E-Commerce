import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import "./header.css"

const Header = () => {
//   document.querySelector(".drop").onclick = () => {
//     document.querySelector(".drop-menu").classList.toggle("open");
// }
  return (
    <>
      <header className='head-1'>
        <section className='sec-1'>
            <div className='left'>
              <p>Free Shipping Over $100 & Free Returns</p>
            </div>
            <div className='right'>
              <div className='left-sec'>
                <p>
                  Hotline: <a href='tel:+20 1143237857'>01143237857</a>
                </p>
              </div>
              <div className='right-sec'>
              </div>
            </div>
        </section>
      </header>
      <header className='head-2'>
        <section className='sec-2'>
          <div className='col-1'>
            <h2><Link className='dev'>Developers.</Link></h2>
          </div>
          <div className='col-2'>
            <div>
            <input type="email" class="form-control" id="input" placeholder="Search Product Here..." />
            <label for="input" class="form-label"><i class="fa-solid fa-magnifying-glass"></i></label>
            </div>
          </div>
          <div className='col-3'>
            <div>
              <Link>
                <i class="fa-solid fa-arrows-rotate"></i>
                <div>
                  <span>Compare</span>
                  <span>products</span>
                </div>
              </Link>
            </div>
            <div>
              <Link>
                <i class="fa-regular fa-heart"></i>
                <div>
                  <span>Favorite</span>
                  <span>wishlist</span>
                </div>
              </Link>
            </div>
            <div>
              <Link>
                <i class="fa-solid fa-user"></i>
                <div>
                  <span>Log in</span>
                  <span>My Account</span>
                </div>
            </Link>
          </div>
          <div className='cart'>
              <Link>
                <i class="fa-solid fa-cart-shopping"></i>
                <div>
                  <span>0</span>
                  <span>$ 0.00</span>
                </div>
              </Link>
          </div>
          </div>
        </section>
      </header>
      <header className='head-3'>
        <section className='sec-3'>
        <div className='menu'>
          <i class="fa-solid fa-braille"></i>
            <ul>
              <li className='drop'>
                SHOP CATEGORIES <i class="fa-solid fa-caret-down"></i>
                <ul className='drop-menu'>
                  <li><NavLink to='/'>Action</NavLink></li>
                  <li><NavLink to='/'>Another action</NavLink></li>
                  <li><NavLink to='/'>Something else here</NavLink></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='menu-links'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/'>Our Store</NavLink>
            <NavLink to='/'>Blog</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
          </div>
        </section>
      </header>
    </>
  )
}

export default Header
