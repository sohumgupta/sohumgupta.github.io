import './Nav.scss';

import useWindowDimensions from "../hooks/useWindowDimensions";
import { useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { navLinks, navPhotoAlbums } from './NavLinks';

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
    let lastPath = path.slice(path.lastIndexOf("/"), path.length);
    
    let newNavLinks = navLinks.slice();
    if (path.includes("/photography")) {
        let index = -1;
        newNavLinks.find((function(item, i) {if (item.href == '/photography') {index = i + 1; return i;}}))
        if (lastPath == "/photography") {
            newNavLinks = navLinks.toSpliced(index, 0, ...navPhotoAlbums);
        } else {
            let currAlbum = navPhotoAlbums.filter(a => a.href == path)[0];
            newNavLinks = navLinks.toSpliced(index, 0, {linkText: currAlbum["linkText"], href: currAlbum["href"], outerText: "│\u00a0\u00a0\u00a0\u00a0└── "});
        }
    }

    return (
        <>
            <div id="nav-list" className={open ? "" : "nav-closed"}>
                { newNavLinks.map((l, i) => <NavRow link={l} key={i}/>) }
                <button id="nav-close" onClick={() => setOpen(false)}>✕</button>
            </div>
            <div id="nav-open">
                <button onClick={() => setOpen(true)}>☰</button>
                <NavLink to={"/"}>Sohum Gupta</NavLink>
            </div>
        </>
    )
}

export default Nav;