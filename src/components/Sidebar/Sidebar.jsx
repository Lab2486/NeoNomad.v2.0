import "./Sidebar.css";
import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import { BiSolidTShirt } from "react-icons/bi";
import { PiHoodieLight } from "react-icons/pi";
import { MdOutlineContactMail } from "react-icons/md";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail, AiOutlineHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

function Sidebar() {
  return (
    <div className="sidebarContainer">
      <aside className="sidebarWrapper">
        <div className="sidebarHeader">
          <img className="logo" src="/Brand.png" alt="" />
          <h1 className="brandName">NEO NOMAD</h1>
          <div className="burger">
            <GiHamburgerMenu />
          </div>
        </div>
        <div className="line"></div>
        <Fragment>
          <nav className="sidebarNavContainer">
            <ul className="sidebarNav">
              <Link to="/" className="sidebarLinks">
                <AiOutlineHome />
                Home
              </Link>
              <Link className="sidebarLinks">
                <BiSolidTShirt />
                Remeras
              </Link>
              <Link className="sidebarLinks">
                <PiHoodieLight />
                Bruzos
              </Link>

              <Link className="sidebarLinks">
                <MdOutlineContactMail />
                Contact
              </Link>
            </ul>
          </nav>
        </Fragment>
        <div className="line"></div>
        <footer className="sidebarFooter">
          <div className="footerLinks">
            <Fragment>
              <a href="">
                <BsInstagram />
              </a>
              <a href="">
                <BsWhatsapp />
              </a>
              <a href="">
                <AiOutlineMail />
              </a>
            </Fragment>
          </div>
          <div className="line"></div>
          <Fragment>
            <p className="footerInfo">Clothes designs by Yagisama</p>
            <p className="footerInfo">
              Developed by Franco Carreras & Lucas Aballay
            </p>
          </Fragment>
        </footer>
      </aside>
    </div>
  );
}

export default Sidebar;
