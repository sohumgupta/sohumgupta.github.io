import './PhotographySubPage.scss';
import Page from '../../layout/page/Page';
import Image from '../../layout/image/Image';

import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import albumIDs from './AlbumIDs';

function ImageCarousel() {
    let path = useLocation().pathname;
    let album = path.slice(path.lastIndexOf("/") + 1, path.length);
    let ids = albumIDs[album];
    let numIDs = ids.length;

    const [imgID, setImgID] = useState(0);

    let createDots = () => {
        let arr = []
        for (let i = 0; i < numIDs; i++) { 
            arr.push(<div key={i} onClick={() => handleDot(i)} className={"dot" + (i === imgID ? " active" : "")}>•</div>)
        }
        return(<div className="dots">{arr.map(input=>input)}</div>);
    }

    const handleNext = () => { setImgID((imgID + 1) % numIDs); };
    const handlePrev = () => { setImgID((imgID - 1) % numIDs); };
    const handleDot = (i) => { setImgID(i); };

    return (
        <div className="image-carousel">
            <div className="content">
                <div className="prev-button" onClick={handlePrev}>←</div>
                <Image src={"https://i.imgur.com/" + ids[imgID] + ".jpg"} imgClass="carousel-image"/>
                <div className="next-button" onClick={handleNext}>→</div>
            </div>
            {createDots()}
        </div>
        
    )
}

function PhotographySubPage() {

    return (
        <Page>
            <div id="photography-sub-page-wrapper">
                <div id="image-carousel-wrapper">
                    <ImageCarousel/>
                </div>
            </div>
        </Page>
    )
}

export default PhotographySubPage;