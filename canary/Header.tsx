import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
    const [componentDidMount, setComponentDidMount] = React.useState(false);
    const [buttonToggleClicked, setButtonToggleClicked] = React.useState(false);
    React.useEffect(() => {

        if(!componentDidMount){
            setComponentDidMount(true);
        }
    }
    , [componentDidMount]);
    return(
        <nav
  className="navbar navbar-default navbar-fixed-top navbar-inverse navbar-trans navbar-trans-dark trans-helper navbar-fw"
    role="navigation"
>
  <div className="navbar-header page-scroll">
    <button
      type="button"
      onClick={(e)=>{
        console.info("hi2")
        e.preventDefault();
        setButtonToggleClicked(!buttonToggleClicked);
      }}
      className="navbar-toggle "
      data-toggle= {
        !buttonToggleClicked ? "collapse" : "collapse in"

      }
      data-target="#navbar"
      aria-expanded= {
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
    <a className="navbar-brand" href="index.html">
      <img
        className="navbar-logo-dark"
        style={{width:"150px"}}
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
        !buttonToggleClicked ? " navbar-collapse page-scroll navbar-right collapse" : "navbar-collapse page-scroll navbar-right collapse in"
    }
  >
    <ul className="nav navbar-nav">

      <li>
        <Link data-testid={
            "home-link"
        }  to="/test">
          Home
          <span className="sr-only" />
        </Link>
      </li>
      <li>
        <Link 
         data-testid={
            "test-link"
        }  
        to="/home">
          Test
          <span className="sr-only" />
        </Link>
      </li>
      
    </ul>
    {/* / .nav .navbar-nav */}
  </div>
  {/*/.navbar-collapse */}
</nav>

    )
}