import React from 'react';
import Logo from '../../../img/1-removebg-preview - copia.png'
// import './Footer.css'

function Footer(classNameF, classNameF2) {
  return (
    <footer className={classNameF} >
      
      <div className={classNameF2} style={{ backgroundColor: "rgb(105, 119, 228, 1)"}} >
        <img src={Logo} alt="Logo" width="100px" height="100%" style={{marginRight:"auto", marginLeft:"auto"}} />
      </div>
    </footer>
  );
};

export default Footer;