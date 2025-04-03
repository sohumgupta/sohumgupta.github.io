import './PhotographySubPage.scss';
import Page from '../../layout/page/Page';
import Image from '../../layout/image/Image';

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';

import albumIDs from './AlbumIDs';

function mod(n, m) {
    return ((n % m) + m) % m;
}

const preloadImages = (ids) => {
    ids.forEach((id) => {
        const img = <img src={`https://i.imgur.com/${id}.jpg`}/>;
        // console.log(img);
        // img.src = `https://i.imgur.com/${id}.jpg`;
    });
};
  

function ImageCarousel() {
    let path = useLocation().pathname;
    let album = path.slice(path.lastIndexOf("/") + 1, path.length);

    let ids = albumIDs[album]["ids"];
    let numIDs = ids.length;

    useEffect(() => {
        if (!ids?.length) return; 
        preloadImages(ids);
    }, [ids]);

    const [imgID, setImgID] = useState(0);

    let createDots = () => {
        let arr = []
        for (let i = 0; i < numIDs; i++) { 
            arr.push(<div key={i} onClick={() => handleDot(i)} className={"dot" + (i === imgID ? " active" : "")}>•</div>)
        }
        return(<div className="dots">{arr.map(input=>input)}</div>);
    }

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

    return (
        <div className="image-carousel" {...handlers}>
            {/* <div className="description">{albumIDs[album]["descrip"]}</div> */}
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