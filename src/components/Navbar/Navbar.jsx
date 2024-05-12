import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo1Img from "../../assets/logo1.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className={styles.navbar} id="navbar"> 
      <div className={`${styles.container} ${styles.navbarContent} flex`}> 
        <div className={`${styles.brandAndToggler} flex flex-sb`}> 
          <Link to="/" className={styles.navbarBrand}> 
            <img src={logo1Img} alt="site logo" />
            <span
              className={styles.headerText} 
              style={{
                marginTop: "25px",
                fontFamily: "poppins",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Bookhub
            </span>
          </Link>
          <button
            type="button"
            className={styles.navbarTogglerBtn} 
            onClick={handleNavbar}
          >
            <HiOutlineMenuAlt3
              size={35}
              style={{
                color: `${toggleMenu ? "#fff" : "#010101"}`,
              }}
            />
          </button>
        </div>

        <div
          className={`${styles.navbarCollapse} ${toggleMenu ? styles.showNavbarCollapse : ''}`} 
        >
          <ul className={styles.navbarNav}> 
            <li className={styles.navItem}> 
              <Link
                to="book"
                className={`${styles.navLink} text-uppercase text-white fs-22 fw-6 ls-1`}
              >
                Home
              </Link>
            </li>
            <li className={styles.navItem}> 
              <Link
                to="register"
                className={`${styles.navLink} text-uppercase text-white fs-22 fw-6 ls-1`} 
              >
                Register
              </Link>
            </li>
            <li className={styles.navItem}> 
              <Link
                to="Sign-in"
                className={`${styles.navLink} text-uppercase text-white fs-22 fw-6 ls-1`} 
              >
                Sign-in
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
