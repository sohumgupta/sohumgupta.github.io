import './Image.scss';

function Image({ src, alt, imgClass }) {
    return (
        <div className="img-wrapper">
            <img src={src} alt={alt} className={imgClass}/>
        </div>
    )
}

export default Image;