import './Page.scss';

import Nav from '../nav/Nav';
import Content from '../content/Content';

function Page({ children }) {
    return (
        <div id="page-wrapper">
            <div id="nav-wrapper"><Nav/></div>
            <div id="content-wrapper">{children}</div>
            <div id="right-wrapper"><Nav/></div>
        </div>
    )
}

export default Page;