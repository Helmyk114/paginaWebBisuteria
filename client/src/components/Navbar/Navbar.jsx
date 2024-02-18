// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import '../Navbar/Navbar.css'
// import { Image, Container, Navbar } from 'react-bootstrap'
// import Logo from '../../img/1-removebg-preview - copia.png'
// //import Perfil from '../../img/IMG_4880_720x.webp'

// function Navegar({ children }) {
//   return (
//     <div className='nav'>
//       <Navbar
//         fixed="top"
//         expand="false"
//         className='nav'
//       >
//         <Container className='contenedor'>
//           {children}
//         </Container>
//       </Navbar>
//     </div>
//   )
// }

// function ImagenPerfil({ img }) {
//   return (
//     <div className='ImgPerfil'>
//       <Image src={img} alt="una Imagen" roundedCircle  width="70px" height="70px" />
//     </div>
//   );
// }

// function BotonRetroceder() {
//   const history = useNavigate();
//   const handleRetroceder = () => {
//     history(-1);
//   };

//   return (
//     <div className='back' onClick={handleRetroceder} >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="30" height="30"
//         fill="currentColor"
//         className="bi bi-chevron-left"
//         viewBox="0 0 16 16"
//       >
//         <path
//           fillRule="evenodd"
//           d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
//       </svg>
//     </div>
//   );
// };

// function Titulo({ texto }) {
//   return (
//     <div className='titulo'>
//       <Navbar.Brand className='txTitulo text-left'>{texto}</Navbar.Brand>
//     </div>
//   );
// };

// function Imagen() {
//   return (
//     <div className='titulo'>
//       <Navbar.Brand >
//         <img src={Logo} alt="Logo" width="80px" height="80px" style={{ display: 'flex', justifyContent: 'center' }} />
//       </Navbar.Brand>
//     </div>
//   );
// };

// function Wave() {
//   return (
//     <svg
//       id="wave"
//       style={{ transform: 'rotate(180deg)', transition: '0.3s' }}
//       viewBox="0 0 1440 100"
//       version="1.1"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <defs>
//         <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0" height="100%">
//           <stop stopColor="#6977E4" offset="0%"></stop>
//           <stop stopColor="#6977E4" offset="100%"></stop>
//         </linearGradient>
//       </defs>
//       <path
//         style={{ transform: 'translate(0, 0px)', opacity: 1 }}
//         fill="url(#sw-gradient-0)"
//         d="M0,50L48,51.7C96,53,192,57,288,48.3C384,40,480,20,576,18.3C672,17,768,33,864,40C960,47,1056,43,1152,35C1248,27,1344,13,1440,11.7C1536,10,1632,20,1728,25C1824,30,1920,30,2016,26.7C2112,23,2208,17,2304,25C2400,33,2496,57,2592,70C2688,83,2784,87,2880,78.3C2976,70,3072,50,3168,40C3264,30,3360,30,3456,35C3552,40,3648,50,3744,46.7C3840,43,3936,27,4032,28.3C4128,30,4224,50,4320,63.3C4416,77,4512,83,4608,83.3C4704,83,4800,77,4896,76.7C4992,77,5088,83,5184,71.7C5280,60,5376,30,5472,28.3C5568,27,5664,53,5760,60C5856,67,5952,53,6048,53.3C6144,53,6240,67,6336,70C6432,73,6528,67,6624,61.7C6720,57,6816,53,6864,51.7L6912,50L6912,100L6864,100C6816,100,6720,100,6624,100C6528,100,6432,100,6336,100C6240,100,6144,100,6048,100C5952,100,5856,100,5760,100C5664,100,5568,100,5472,100C5376,100,5280,100,5184,100C5088,100,4992,100,4896,100C4800,100,4704,100,4608,100C4512,100,4416,100,4320,100C4224,100,4128,100,4032,100C3936,100,3840,100,3744,100C3648,100,3552,100,3456,100C3360,100,3264,100,3168,100C3072,100,2976,100,2880,100C2784,100,2688,100,2592,100C2496,100,2400,100,2304,100C2208,100,2112,100,2016,100C1920,100,1824,100,1728,100C1632,100,1536,100,1440,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z">
//       </path>
//     </svg>
//   )
// };


// function TituloBienvenido({ texto, nombretrabajador, rol }) {
//   return (
//     <div className='bienvenido'>
//       <Navbar.Brand className='txtBienvenido text-left' >
//         <h1>{texto}</h1>
//         <h6>{nombretrabajador}</h6>
//         <h6>{rol}</h6>
//       </Navbar.Brand>
//     </div>
//   );
// };

// function Notificacion() {
//   return (
//     <div className='notificar'>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="26"
//         height="26"
//         fill="currentColor"
//         className="bi bi-bell-fill"
//         viewBox="0 0 16 16"
//       >
//         <path
//           d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
//       </svg>
//     </div>
//   );
// };

// export default Navegar;
// export {
//   BotonRetroceder,
//   Titulo,
//   Notificacion,
//   ImagenPerfil,
//   TituloBienvenido,
//   Imagen,
//   Wave
// };