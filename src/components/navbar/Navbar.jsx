import React, {useState} from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.png'
import './navbar.css'



const Menu = (props) => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is AdaLink?</a></p>
    <p><a href="#workflow">Benefits</a></p>
    <p><a href="#faq">FAQ</a></p>
    <p><a href="#platform" onClick={() => props.setMiddleWindowTrigger(true)}>dApps</a></p>
  </>
)

/*<p ><a href="https://www.lidonation.com/en/catalyst-explorer/voter-tool?s=adalink" target="_blank" rel="noopener noreferrer">Vote for Us</a></p>  */
const Navbar = (props) => {
  const [toggleMenu,setToggleMenu]=useState(false);

  return (
    <div className='gpt3__navbar'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu setMiddleWindowTrigger={props.setMiddleWindowTrigger}/>
        </div>
      <div className='gpt3__navbar-sign'>
        <p><a href="https://app-preview.adalink.io" target="_blank" rel="noopener noreferrer">Sign in</a></p>
        <button type="button"><a href="https://app-preview.adalink.io" target="_blank" rel="noopener noreferrer">Sign up</a></button>
      </div>
      <div className='gpt3__navbar-menu'>
          {toggleMenu
            ? <RiCloseLine color='#FFFF' size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color='#FFFF' size={27} onClick={() => setToggleMenu(true)}  />
          }
          {toggleMenu && (
            <div className="gpt3__navbar-menu_container  scale-up-center">
              <div className='gpt3__navbar-menu_container-links'>
                <Menu setMiddleWindowTrigger={props.setMiddleWindowTrigger}/>
                <div className='gpt3__navbar-menu_container-links-sign'>
                  <p>Sign in</p>
                  <button type="button">Sign up</button>
                </div>
              </div>
            </div>
          )}
      </div>
    </div>
  )
}

export default Navbar