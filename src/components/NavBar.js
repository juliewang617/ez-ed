import {Link} from "react-router-dom"; 
import React from "react"; 
import "/Users/juliewang/Desktop/projects/websites/ez-ed/src/styles/styles.css"

export default function NavBar(){

    // expand hamburger menu on click (mobile only)
    const toggleHamburgerMenu = () => {
        var links = document.getElementsByClassName("nav-link-container")[0];
        if (window.outerWidth > 700){
            links.style.setProperty("display", "flex")
        }
        else{
            if (links.style.getPropertyValue("display") === "none"){
                links.style.setProperty("display", "flex");
            } else{
                links.style.setProperty("display", "none")
            }
        }
    }

    return(
        <div>
        <nav>
              <Link className="nav-link" to="/">Ez-Ed</Link>

              <div className="hamburger-container">
                <div className="hamburger-menu" onClick={toggleHamburgerMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div className="nav-link-container">
                    <Link className="nav-link" to="/about">About</Link>
                    <Link className="nav-link" to="/learnmore">Learn More</Link>
                    <Link className="nav-link" to="/getsupport">Get Support</Link>
                    <Link className="nav-link" to="/giveback">Give Back</Link>
                </div>
              </div>



        </nav>
        </div>
    )
}