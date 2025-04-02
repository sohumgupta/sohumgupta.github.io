import './Nav.scss';

import useWindowDimensions from "../hooks/useWindowDimensions";
import { useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";

  
let navLinks = [
    { linkText: "Sohum Gupta", href: "/", outerText: ""},
    { linkText: "Projects", href: "/projects", outerText: "├── "},
    { linkText: "Writing", href: "/writing", outerText: "├── "},
    // { linkText: "Food", href: "/writing#food", outerText: "│\u00a0\u00a0\u00a0├── "},
    // { linkText: "Creative", href: "/writing#creative", outerText: "│\u00a0\u00a0\u00a0├── "},
    // { linkText: "Misc.", href: "/writing#misc", outerText: "│\u00a0\u00a0\u00a0└── "},
    { linkText: "Photography", href: "/photography", outerText: "├── "},
    { linkText: "About", href: "/about", outerText: "└── "},
    { linkText: "Bio", href: "/about#bio", outerText: "\u00a0\u00a0\u00a0\u00a0├── "},
    // { linkText: "Contact", href: "/about#contact", outerText: "\u00a0\u00a0\u00a0\u00a0├── "},
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
    let [open, setOpen] = useState(false);

    let path = useLocation().pathname;
    let lastPath = path.slice(path.lastIndexOf("/") + 1, path.length);
    
    let newNavLinks = navLinks.slice();
    if (path.includes("/photography") && lastPath !== "photography") {
        let nameMap = {
            "oahu": "Oahu","arizona": "Arizona", "amsterdam": "Amsterdam", 
            "berlin": "Berlin", "copenhagen": "Copenhagen", "ghana": "Ghana", 
            "new%20england": "New England", "cancun": "Cancun", "illinois": "Illinois",
            "florida": "Florida", "san%20francisco": "San Francisco", "quebec%20city": "Quebec City"
        }
        newNavLinks = navLinks.toSpliced(4, 0, { linkText: nameMap[lastPath], href: "#", outerText: "│\u00a0\u00a0\u00a0└── "});
    }

    return (
        <>
            <div id="nav-list" className={open ? "" : "nav-closed"}>
                { newNavLinks.map((l, i) => <NavRow link={l} key={i}/>) }
                <button id="nav-close" onClick={() => setOpen(false)}>✕</button>
            </div>
            <button id="nav-open" onClick={() => setOpen(true)}>☰</button>
        </>
    )
}

export default Nav;