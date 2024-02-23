import React from 'react';
import Logo from '../../../img/1-removebg-preview - copia.png'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer bg-body-tertiary text-center" >
      
      <div className="text-center p-3" style={{ backgroundColor: "rgb(105, 119, 228, 1)"}} >
        <img src={Logo} width="80px" height="80px" style={{marginRight:"auto", marginLeft:"auto"}} />
      </div>
    </footer>
  );
};

export default Footer;