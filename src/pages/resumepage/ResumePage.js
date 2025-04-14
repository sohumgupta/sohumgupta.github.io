import './ResumePage.scss';
import Page from '../../layout/page/Page';

import ResumePDF from './SohumGupta_Resume_Mar2025.pdf';

function ResumePage() {
    return (
        <Page>
            <div id="resume-page-wrapper">
                {/* <a href="https://drive.google.com/uc?export=download&id=1FujUdpdkA5r8pBYvCMapaCI0uenfmo2l" download>Download</a>
                <iframe 
                    id="resume-embed" 
                    title="Sohum Gupta Resume March 2025"
                    style={{border: 'none', boxShadow: '0 0 3rem 0rem rgba(0, 0, 0, 0.2)'}}
                    src="https://drive.google.com/file/d/1FujUdpdkA5r8pBYvCMapaCI0uenfmo2l/preview"/> */}
                <object id="resume-embed" data={ResumePDF} type="application/pdf"/>
            </div>
        </Page>
    )
}

export default ResumePage;