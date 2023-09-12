import React, { useState } from "react";
import { Link } from "react-router-dom";
import { dropdownLinks, sidebarLinks } from "./sidebarData";
import { SidebarToggler, SidebarWrapper } from "./SidebarStyled";

const Sidebar2 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // toggling the Sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // toggling the Dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // closing the Sidebar on clicking outside of it.
  window.addEventListener("click", (e) => {
    if (e.target.closest(".section")) {
      setIsSidebarOpen(false);
    }
  });

  // disable the body-scroll when the Sidebar is open.
  const docBody = document.body;
  isSidebarOpen
    ? docBody.classList.add("overflow_hide")
    : docBody.classList.remove("overflow_hide");

  return (
    <>
      {/*===== Sidebar =====*/}
      <SidebarWrapper className={isSidebarOpen ? "show" : ""}>
        <div className="sidebar_head">
          <Link className="sidebar_head" to="/">
            <img className="logo" src="/Brand.png" alt="" />
            <h3>Neo Nomad</h3>
          </Link>
        </div>
        <div className="sidebar_body">
          <ul>
            <li>
              <div className="dropdown" onClick={toggleDropdown}>
                <span>Productos</span>
                <span>{isDropdownOpen ? "-" : "+"}</span>
              </div>
              {isDropdownOpen && (
                <ul className="dropdown_list">
                  {dropdownLinks.map((currValue) => {
                    const { id, link, path } = currValue;
                    return (
                      <li key={id}>
                        <Link to={path}>{link}</Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
            {sidebarLinks.map((currValue) => {
              const { id, link, path } = currValue;
              return (
                <li key={id}>
                  <Link to={path}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="sidebar_foot">
          <p>{new Date().getFullYear() + " "}| Neo Nomad</p>
        </div>
      </SidebarWrapper>

      {/*===== Sidebar-toggler =====*/}
      <SidebarToggler
        onClick={toggleSidebar}
        title={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
      >
        <span className="parpadea"></span>
        <span className="parpadea"></span>
        <span className="parpadea"></span>
      </SidebarToggler>
    </>
  );
};

export default Sidebar2;
