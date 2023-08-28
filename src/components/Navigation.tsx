import { useRouter } from "next/router";
import { useState } from "react";

export default function Navigation() {

   const scrollToView = (id: string) => {
    const component = document.getElementById(id); 
    window.scrollTo({
      top: component.offsetTop,
      behavior: "smooth"
    });
  }
  

  return (
    <header id="header" className="navbar navbar-expand-lg navbar-end navbar-absolute-top navbar-light navbar-show-hide"
      data-hs-header-options='{
            "fixMoment": 1000,
            "fixEffect": "slide"
          }'>

      <div className="container">
        <nav className="js-mega-menu navbar-nav-wrap border-bottom">
          <a className="navbar-brand fw-semibold navbar-brand-logo" href="/" aria-label="Seun Owoyemi">
            <img src="/favicon.ico" alt="site logo" />
          </a>

          <div className="collapse navbar-collapse pt-2" id="navbarNavDropdown">
            <div className="navbar-absolute-top-scroller">
              <ul className="navbar-nav">

                <li className="nav-item">
                  <span className="btn btn-primary btn-transition" onClick={() => scrollToView("contact")}>Contact me</span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
