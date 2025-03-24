import './Page.scss';

import Nav from '../nav/Nav';
import Content from '../content/Content';

function Page({ children }) {
    return (
        <div id="page-wrapper">
            <Nav/>
            <Content>{children}</Content>
        </div>
    )
}

export default Page;