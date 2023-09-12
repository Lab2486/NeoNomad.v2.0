// import "./SidebarSlide.css";
// import { Link } from "react-router-dom";
// import { Fragment, useState } from "react";
// import { BiSolidTShirt } from "react-icons/bi";
// import { PiHoodieLight } from "react-icons/pi";
// import { MdOutlineContactMail } from "react-icons/md";
// import { BsInstagram, BsWhatsapp } from "react-icons/bs";
// import { AiOutlineMail, AiOutlineHome } from "react-icons/ai";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";

// function SidebarSlide({ children }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => {
//     setIsOpen(!isOpen);
//   };
//   const menuItem = [
//     {
//       path: "/",
//       nombre: "Home",
//       icon: <AiOutlineHome />,
//     },
//     {
//       path: "/remeras",
//       nombre: "Remeras",
//       icon: <BiSolidTShirt />,
//     },
//     {
//       path: "/buzos",
//       nombre: "Buzos",
//       icon: <PiHoodieLight />,
//     },
//     {
//       path: "/contact",
//       nombre: "Contacto",
//       icon: <AiOutlineMail />,
//     },
//     {
//       path: "/favoritos",
//       nombre: "Favoritos",
//       icon: <AiOutlineHeart />,
//     },
//   ];
//   return (
//     <div className="sidebarSlideContainer">
//       <div
//         style={{ width: isOpen ? "170px" : "50px" }}
//         className="sidebarSlide"
//       >
//         <div className="topSection">
//           <img
//             style={{ display: isOpen ? "block" : "none" }}
//             className="sidebarSlidelogo"
//             src="/Brand.png"
//             alt="logo"
//           />
//           <div
//             style={{ marginLeft: isOpen ? "60px" : "0px" }}
//             className="sidebarSlideBars"
//           >
//             <GiHamburgerMenu onClick={toggle} />
//           </div>
//         </div>
//         <div>
//           {menuItem.map((item, index) => (
//             <Link
//               to={item.path}
//               key={index}
//               className="link"
//               activeclassName="active"
//             >
//               <div className="icon">{item.icon}</div>
//               <div
//                 className="linkText"
//                 style={{ display: isOpen ? "block" : "none" }}
//               >
//                 {item.nombre}
//               </div>
//             </Link>
//           ))}
//         </div>
//         <main>{children}</main>
//       </div>
//     </div>
//   );
// }

// export default SidebarSlide;
