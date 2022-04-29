import { useState } from "react";
import { Link, useLocation } from "remix";
import useMedia from "../../helpers/useMedia";

import Logo from "../../assets/images/logo.png";

/**
 * Get a link with the current locale parameter
 * @returns A localized <Link>
 */


const Header = () => {
    const location = useLocation();     
    const navLinks = [{ name: 'Home', route: '/'},{ name: 'About', route: '/about'},{ name: 'Services', route: '/services'},{ name: 'Contact', route: '/contact'}]
    const [navActive,setNavActive] = useState(false);

    let isMobile: boolean | null = null;
    if(typeof window !== 'undefined') {
         isMobile = useMedia<boolean>(
            // Media queries
            ["(min-width: 1250px)", "(max-width: 1249px)"],
            // Column counts (relates to above media queries by array index)
            [false, true],
    
            false
       
          );
    
    }
 

const onClickHandler = ()=> {
    setNavActive(!navActive);
}
return (
    <header>
        <div className="mobile-wrapper">
            <div className="mobile-nav container mobile-nav-container">
                <img id="mobile-logo" src={Logo} alt="mobile_company_logo" height="60" /> 
                <button aria-label="open the menu" id="menu-button" className={`hamburger hamburger--spring ${navActive || !isMobile  ? 'is-active' : ''}`} onClick={onClickHandler} type="button">
                    <span aria-hidden="true" className="hamburger-box">
                        <span aria-hidden="true" className="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </div>


        <nav>
            <div style={navActive || !isMobile   ? {width: '60%',     position: 'fixed'} :  {width: 0, position: 'unset'}} className="navbar-menu">
                <div id="side-menu" className="side-nav">
                    <img src={Logo} alt="company logo" width="100px" />
                    <ul  id="on-top" className={`navbar-links ${!navActive ? 'clicked' : ''}`}>
                        {navLinks.map((navLink)=>{
                            return <li style={navActive || !isMobile ? {opacity: 1, visibility: 'visible'} :  {opacity: 0, visibility: 'hidden'}} key={navLink.name + navLink.route} className="nav-li"><Link style={navActive || !isMobile   ? {opacity: 1, visibility: 'visible'} :  {opacity: 0, visibility: 'hidden'}} className={location.pathname === navLink.route ? 'active-menu' : ''}  
                            to={navLink.route}>{navLink.name}</Link></li>

})}
                    
                    </ul>
                </div>
            </div>
        </nav>
    </header>

  );
};

export default Header;


