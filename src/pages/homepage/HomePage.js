import './HomePage.scss';
import MePicture from './me.jpg';
import Page from '../../layout/page/Page';
import Image from '../../layout/image/Image';

import useImagePreloader from '../../misc/UseImagePreloader';
import LoadingScreen from '../../misc/loading/LoadingScreen';

function HomePage() {
    const { imagesPreloaded } = useImagePreloader([MePicture]);

    if (!imagesPreloaded) {
        return <LoadingScreen/>
    }

    return (
        <Page>
            <div id="home-page-wrapper">
                <Image src={MePicture} alt="Me in front of some trees" imgClass="home-page-image"/>
            </div>
        </Page>
    )
}

export default HomePage;