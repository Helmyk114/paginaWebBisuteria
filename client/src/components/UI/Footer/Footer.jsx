import React from 'react';
import Logo from '../../../img/1-removebg-preview - copia.png'
// import './Footer.css'

function Footer() {
  return (
    <footer className="footer bg-body-tertiary text-center" >
      
      <div className="text-center " style={{ backgroundColor: "rgb(105, 119, 228, 1)"}} >
        <img src={Logo} width="100px" height="100%" style={{marginRight:"auto", marginLeft:"auto"}} />
      </div>
    </footer>
  );
};

export default Footer;