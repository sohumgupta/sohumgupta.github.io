import './PhotographyPage.scss';
import Page from '../../layout/page/Page';
import Image from '../../layout/image/Image';

import { NavLink } from "react-router-dom";

import HWIPic from './thumbnails/hwi_pic.jpg';
// import AZPic from './thumbnails/az_pic.jpg';
import AMSPic from './thumbnails/ams_pic.jpg';
import BERPic from './thumbnails/ber_pic.jpg';
import CPHPic from './thumbnails/cph_pic.jpg';
import GhanaPic from './thumbnails/ghana_pic.jpg';
import PVDPic from './thumbnails/pvd_pic.jpg';
// import ILLPic from './thumbnails/ill_pic.jpg';
import FLOPic from './thumbnails/flo_pic.jpg';
import SFPic from './thumbnails/sf_pic.jpg';
import QBCPic from './thumbnails/qbc_pic.jpg';

let albums = [
    { name: "Oahu", timeframe: "Feb 2025", picture: HWIPic },
    // { name: "Arizona", timeframe: "Dec 2024 - Jan 2025", picture: CPHPic },
    { name: "Amsterdam", timeframe: "Sept 2024", picture: AMSPic },
    { name: "Berlin", timeframe: "Sept 2024", picture: BERPic },
    { name: "Copenhagen", timeframe: "Sept 2024", picture: CPHPic },
    { name: "Ghana", timeframe: "June 2022 - Sept 2024", picture: GhanaPic },
    { name: "Providence", timeframe: "Aug 2018 - May 2022", picture: PVDPic },
    // { name: "Illinois", timeframe: "____", picture: CPHPic },
    { name: "Florida", timeframe: "Dec 2021", picture: FLOPic },
    { name: "San Francisco", timeframe: "May - Aug 2021", picture: SFPic },
    { name: "Quebec City", timeframe: "July 2019", picture: QBCPic },
]

function AlbumCover({ album }) {
    return (
        <NavLink to={album.name.toLowerCase()}>
            <div className="album-cover">
                <Image src={album.picture} imgClass="album-cover-pic" alt={"Cover for" + album.name + " album"}/>
                <div className="album-cover-info">
                    <div className="album-name">{album.name}</div>
                    <div className="album-timeframe">{album.timeframe}</div>
                </div>
            </div>
        </NavLink>
    )
}

function PhotographyPage() {
    return (
        <Page>
            <div id="photography-page-wrapper">
                {albums.map((a, i) => <AlbumCover key={i} album={a}/>)}
            </div>
        </Page>
    )
}

export default PhotographyPage;