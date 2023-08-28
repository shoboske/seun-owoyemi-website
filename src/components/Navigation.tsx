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

      <div className="container navbar-topbar">
        <nav className="border-bottom js-mega-menu navbar-nav-wrap">

          <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#topbarNavDropdown" aria-controls="topbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="d-flex justify-content-between align-items-center small">
              <span className="navbar-toggler-text">Topbar</span>

              <span className="navbar-toggler-default">
                <i className="bi-chevron-down ms-2"></i>
              </span>
              <span className="navbar-toggler-toggled">
                <i className="bi-chevron-up ms-2"></i>
              </span>
            </span>
          </button>


          <div id="topbarNavDropdown" className="navbar-nav-wrap-collapse collapse navbar-collapse navbar-topbar-collapse">
            <div className="navbar-toggler-wrapper">
              <div className="navbar-topbar-toggler d-flex justify-content-between align-items-center">
                <span className="navbar-toggler-text small">Topbar</span>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#topbarNavDropdown" aria-controls="topbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="bi-x"></i>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="container">
        <nav className="js-mega-menu navbar-nav-wrap">
          <a className="navbar-brand fw-semibold navbar-brand-logo" href="/" aria-label="Seun Owoyemi">
            <img src="./favicon.ico" />
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
