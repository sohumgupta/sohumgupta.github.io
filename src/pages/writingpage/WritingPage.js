import './WritingPage.scss';
import Page from '../../layout/page/Page';
import Image from '../../layout/image/Image';

import useImagePreloader from '../../misc/UseImagePreloader';
import LoadingScreen from '../../misc/loading/LoadingScreen';

import writing from './Writing';

import { NavLink } from "react-router-dom";

function Writing({ w }) {
    return (
        <NavLink to={w.link} target="_blank" rel="noopener noreferrer">
            <div className="writing">
                <div className="writing-main">
                    <span className="writing-date">{w.date}</span> 
                    <span className="writing-title">{w.title}</span> 
                </div>
                <div className="writing-description">{w.description}</div>
            </div>
        </NavLink>
    )
}

function WritingPage() {
    const { imagesPreloaded } = useImagePreloader([]);
    if (!imagesPreloaded) { return <LoadingScreen/> };

    return (
        <Page>
            <div id="writing-page-wrapper">
                <div className="writing-wrapper">
                    { 
                        writing.map((s, i) => 
                            <div className="writing-wrapper" key={i}>
                                <h1>{s.section}</h1>
                                { s.pieces.map((p, j) => <Writing w={p} key={j}/>) }
                            </div>
                        ) 
                    }
                </div>
            </div>
        </Page>
    )
}

export default WritingPage;