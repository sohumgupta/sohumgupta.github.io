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
    { linkText: "Bio & Contact", href: "/about#bio", outerText: "\u00a0\u00a0\u00a0\u00a0├── "},
    { linkText: "Resume", href: "/about#resume", outerText: "\u00a0\u00a0\u00a0\u00a0└── "},
]

function NavRow({ link }) {
    const location = useLocation();
    return (
        <div class="nav-link">{link.outerText}
            <NavLink className={location.pathname === link.href ? "active" : ""} to={link.href}>{link.linkText}</NavLink>
        </div>);
}

function Nav() {
    return (
        <div id="nav-wrapper">
            <div id="nav-list">
                { navLinks.map(l => <NavRow link={l}/>) }
            </div>
        </div>
    )
}

export default Nav;