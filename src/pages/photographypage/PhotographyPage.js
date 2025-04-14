import './PhotographyPage.scss';
import Page from '../../layout/page/Page';
import Image from '../../layout/image/Image';
import LoadingScreen from '../../misc/loading/LoadingScreen';

import { NavLink } from "react-router-dom";
import useImagePreloader from '../../misc/UseImagePreloader';

import HWIPic from './thumbnails/hwi_pic.webp';
// import AZPic from './thumbnails/az_pic.jpg';
import AMSPic from './thumbnails/ams_pic.webp';
import BERPic from './thumbnails/ber_pic.webp';
import CPHPic from './thumbnails/cph_pic.webp';
import GhanaPic from './thumbnails/ghana_pic.webp';
import PVDPic from './thumbnails/pvd_pic.webp';
import CANPic from './thumbnails/can_pic.webp';
// import ILLPic from './thumbnails/ill_pic.jpg';
import FLOPic from './thumbnails/flo_pic.webp';
import SFPic from './thumbnails/sf_pic.webp';
import QBCPic from './thumbnails/qbc_pic.webp';

const preloadSrcList = [
    HWIPic,
    AMSPic,
    BERPic,
    CPHPic,
    GhanaPic,
    PVDPic,
    CANPic,
    FLOPic,
    SFPic,
    QBCPic
]

let albums = [
    { name: "Oahu", timeframe: "Feb 2025", picture: HWIPic },
    // { name: "Arizona", timeframe: "Dec 2024 - Jan 2025", picture: CPHPic },
    { name: "Amsterdam", timeframe: "Sept 2024", picture: AMSPic },
    { name: "Berlin", timeframe: "Sept 2024", picture: BERPic },
    { name: "Copenhagen", timeframe: "Sept 2024", picture: CPHPic },
    { name: "Ghana", timeframe: "June 2022 - Sept 2024", picture: GhanaPic },
    { name: "New England", timeframe: "Aug 2018 - May 2022", picture: PVDPic },
    { name: "Cancun", timeframe: "March 2021", picture: CANPic },
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
    const { imagesPreloaded } = useImagePreloader(preloadSrcList);

    if (!imagesPreloaded) {
        // return <LoadingScreen/>
    }

    return (
        <Page>
            <div id="photography-page-wrapper">
                {albums.map((a, i) => <AlbumCover key={i} album={a}/>)}
            </div>
        </Page>
    )
}

export default PhotographyPage;