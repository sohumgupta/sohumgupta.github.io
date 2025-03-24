import './Image.scss';

function Image({ src, alt, imgClass }) {
    return (
        <div id="img-wrapper">
            <img src={src} alt={alt} className={imgClass}/>
            <div id="img-bg"/>
        </div>
    )
}

export default Image;