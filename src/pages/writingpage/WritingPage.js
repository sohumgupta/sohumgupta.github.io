import './WritingPage.scss';
import Page from '../../layout/page/Page';
import Image from '../../layout/image/Image';

import useImagePreloader from '../../misc/UseImagePreloader';
import LoadingScreen from '../../misc/loading/LoadingScreen';

import writing from './Writing';

import { NavLink } from "react-router-dom";

function Writing({ w }) {
    let publication = w.publication ? <div className="writing-publication">└── {w.publication}</div> : null;
    return (
        <div className="writing">
            <a href={w.link} target="_blank" rel="noopener noreferrer">
                <div className="writing-main">
                    <span className="writing-date">{w.date} ── </span>
                    <span className="writing-title">{w.title}</span> 
                </div>
            </a>
            { publication }
            <div className="writing-description">{w.description}</div>
        </div>
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
                            <div className="writing-section-wrapper" key={i}>
                                <h1 className="writing-section-name">{s.section}</h1>
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