import './PhotographySubPage.scss';
import Page from '../../layout/page/Page';
import Image from '../../layout/image/Image';

import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';

import albumIDs from './AlbumIDs';

function mod(n, m) {
    return ((n % m) + m) % m;
}

const preloadImages = (ids) => {
    ids.forEach((id) => {
        const img = new window.Image();
        img.src = `https://i.imgur.com/${id}h.jpg`;
    });
};

function ImageCarousel() {
    let path = useLocation().pathname;
    let album = path.slice(path.lastIndexOf("/") + 1, path.length);

    let ids = albumIDs[album]["ids"];
    let numIDs = ids.length;

    useEffect(() => {preloadImages(ids);}, [ids]);

    const [imgID, setImgID] = useState(0);

    let createDots = () => {
        let arr = []
        for (let i = 0; i < numIDs; i++) { 
            arr.push(<div key={i} onClick={() => handleDot(i)} className={"dot" + (i === imgID ? " active" : "")}>•</div>)
        }
        return(<div className="dots" ref={dotsContainerRef}>{arr.map(input=>input)}</div>);
    }

    useEffect(() => {
        const activeDot = dotsContainerRef.current?.querySelector('.dot.active');
        activeDot?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }, [imgID]);
    
    const dotsContainerRef = useRef(null);

    const handleNext = () => { setImgID(mod((imgID + 1), numIDs)); };
    const handlePrev = () => { setImgID(mod((imgID - 1), numIDs)); };
    const handleDot = (i) => { setImgID(i); };

    const handlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        swipeDuration: 500,
        preventScrollOnSwipe: true,
        trackMouse: true
    });

    let touchScreen = (window.matchMedia("(pointer: coarse)").matches);

    return (
        <div className={"image-carousel " + (touchScreen ? "touch" : "")} {...handlers}>
            {/* <div className="description">{albumIDs[album]["descrip"]}</div> */}
            <div className="content">
                <div className="prev-button" onClick={handlePrev}>←</div>
                <Image src={"https://i.imgur.com/" + ids[imgID] + "h.jpg"} imgClass="carousel-image"/>
                <div className="next-button" onClick={handleNext}>→</div>
            </div>
            <div className="dots-wrapper">
                {createDots()}
            </div>
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