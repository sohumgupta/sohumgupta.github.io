import './PhotographyPage.scss';
import Page from '../../layout/page/Page';
import Image from '../../layout/image/Image';

import CPHPic from './cph_pic.jpg';
import PVDPic from './pvd_pic.jpg';
import GhanaPic from './ghana_pic.jpg';

let albums = [
    {
        key: 0,
        // name: "Ghana",
        // subtitle: "Pictures from my two years in rural Ghana - taken mostly in Accra + the Oti Region.",
        subtitle: "Ghana",
        timeframe: "June 2022 - Sept. 2024",
        picture: GhanaPic
    },
    {
        key: 1,
        name: "Providence, RI",
        subtitle: "Pictures from my four years at Brown University in Providence, Rhode Island.",
        timeframe: "August 2018 - May 2022",
        picture: PVDPic
    },
    {
        key: 2,
        name: "Copenhagen",
        subtitle: "Pictures from a solo trip to Copenhagen!",
        timeframe: "September 2024",
        picture: CPHPic
    },
]
// add SF, florida, quebec city, copenhagen, amsterdam, berlin, oahu, illinois, arizona

function AlbumCover({ album }) {
    return (
        <div class="album-cover">
            <Image src={album.picture} imgClass="album-cover-pic" alt={"Cover for" + album.name + " album"}/>
            <div className="album-cover-info">
                <span>
                    <div className="album-name">{album.name}</div>
                    <div className="album-timeframe">{album.timeframe}</div>
                </span>
                <div className="album-subtitle">{album.subtitle}</div>
            </div>

        </div>
    )
}

function PhotographyPage() {
    return (
        <Page>
            <div id="photography-page-wrapper">
                {albums.map(a => <AlbumCover key={a.key} album={a}/>)}
            </div>
        </Page>
    )
}

export default PhotographyPage;