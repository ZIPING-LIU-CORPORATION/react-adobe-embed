import React from 'react';

import { Link } from 'react-router-dom';


export default function Header() {
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [buttonToggleClicked, setButtonToggleClicked] = React.useState(false);
  const [dropDownToggleClicked, setDropDownToggleClicked] = React.useState(false);
  React.useEffect(() => {

    if (!componentDidMount) {

      setComponentDidMount(true);
    }
  }
    , [componentDidMount]);
  return (
    <nav
      className="navbar navbar-default navbar-fixed-top navbar-inverse navbar-trans navbar-trans-dark trans-helper navbar-fw"
      role="navigation"
    >
      <div className="container">
        <div style={{
          width: "75%"
        }} className="navbar-header page-scroller">
          <button
            type="button"
            onClick={(e) => {
              console.info("hi2")
              e.preventDefault();
              setButtonToggleClicked(!buttonToggleClicked);
            }}
            className="navbar-toggle collapsed"
            data-toggle={
              !buttonToggleClicked ? "collapse" : "collapse in"

            }

            data-target="#navbar"
            aria-expanded={
              !buttonToggleClicked ? "false" : "true"
            }
            aria-controls="navbar"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          {/* Logo */}
          <a

            className="navbar-brand" href="index.html">
            <img
              className="navbar-logo-dark"
              style={{ content: 'unset', height: "50px", backgroundImage: 'none' }}
              src="https://synthethics.awscyber.ai/static/media/RADAR.c104f9526930a39724dc.png"
              alt="Definity - Logo"
            />
          </a>
        </div>
        {/* Navbar Links */}
        <div
          id="navbar"
          aria-expanded={
            !buttonToggleClicked ? "false" : "true"
          }
          className={
            !buttonToggleClicked ? " navbar-collapse   collapse" : "navbar-collapse   collapse in"
          }
        >
          <ul className="nav navbar-nav">

            <li>
              <Link data-testid={
                "home-link"
              } to="/test">
                Home
                <span className="sr-only" />
              </Link>
            </li>
            <li
              onClick={() => {
                setDropDownToggleClicked(!dropDownToggleClicked);
              }}
              className={
                "dropdown" + (dropDownToggleClicked ? " open" : "")
              }>
              <Link

                className='dropdown-toggle'
                data-testid={
                  "test-link"
                }
                 to="#"
                >
                Test
                <span className="caret"></span>
              </Link>
              <ul className="dropdown-menu">
                <div className="row">
                  <div className="col-lg-6 mb-sm-30">
                    <li className="dropdown-header">Test Routes</li>
                    <li className="divider" />
                    <li>
                      <Link to="/home">
                        Basic PDF Render
                      </Link>
                    </li>
                    <li>
                      <Link to="/light">
                        Lightbox PDF Render
                      </Link>
                    </li>
                  </div>
                </div>
              </ul>
            </li>

          </ul>
        </div>
        {/* / .nav .navbar-nav */}
      </div>
      {/*/.navbar-collapse */}
    </nav>

  )
}