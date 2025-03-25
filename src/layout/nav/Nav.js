import './Nav.scss';

import { NavLink, useLocation } from "react-router-dom";
  
let navLinks = [
    { linkText: "Sohum Gupta", href: "/", outerText: ""},
    { linkText: "Projects", href: "/projects", outerText: "├── "},
    { linkText: "Writing", href: "/writing", outerText: "├── "},
    { linkText: "Food", href: "/writing#food", outerText: "│\u00a0\u00a0\u00a0├── "},
    { linkText: "Creative", href: "/writing#creative", outerText: "│\u00a0\u00a0\u00a0├── "},
    { linkText: "Misc.", href: "/writing#misc", outerText: "│\u00a0\u00a0\u00a0└── "},
    { linkText: "Photography", href: "/photography", outerText: "├── "},
    { linkText: "About", href: "/about", outerText: "└── "},
    { linkText: "Bio", href: "/about#bio", outerText: "\u00a0\u00a0\u00a0\u00a0├── "},
    { linkText: "Contact", href: "/about#contact", outerText: "\u00a0\u00a0\u00a0\u00a0├── "},
    { linkText: "Resume", href: "https://drive.google.com/file/d/1FujUdpdkA5r8pBYvCMapaCI0uenfmo2l/view?usp=sharing", outerText: "\u00a0\u00a0\u00a0\u00a0└── "},
]

function NavRow({ link }) {
    const location = useLocation();
    return (
        <div className="nav-link">{link.outerText}
            <NavLink 
                className={location.pathname === link.href ? "active" : ""} 
                to={link.href}
                target={link.href.includes("https") ? "_blank" : ""}
                rel={link.href.includes("https") ? "noopener noreferrer" : ""}
            >{link.linkText}</NavLink>
        </div>);
}

function Nav() {
    let path = useLocation().pathname;
    let lastPath = path.slice(path.lastIndexOf("/") + 1, path.length);
    
    if (path.includes("/photography") && lastPath !== "photography") {
        let nameMap = {
            "oahu": "Oahu","arizona": "Arizona", "amsterdam": "Amsterdam", "berlin": "Berlin",
            "copenhagen": "Copenhagen", "ghana": "Ghana", "providence": "Providence", "illinois": "Illinois",
            "florida": "Florida", "san%20francisco": "San Francisco", "quebec%20city": "Quebec City"
        }
        let newNavLinks = navLinks.toSpliced(7, 0, { linkText: nameMap[lastPath], href: "#", outerText: "│\u00a0\u00a0\u00a0└── "});
        return (
            <div id="nav-wrapper">
                <div id="nav-list">
                    { newNavLinks.map((l, i) => <NavRow link={l} key={i}/>) }
                </div>
            </div>
        )
    }

    return (
        <div id="nav-wrapper">
            <div id="nav-list">
                { navLinks.map((l, i) => <NavRow link={l} key={i}/>) }
            </div>
        </div>
    )
}

export default Nav;