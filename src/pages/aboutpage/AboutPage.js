import './AboutPage.scss';
import Page from '../../layout/page/Page';

import { SiSubstack, SiLinkedin, SiGithub, SiInstagram } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";

const contacts = [
    { text: <SiLinkedin/>, link: "https://www.linkedin.com/in/sohum-gupta/" },
    { text: <RiInstagramFill/>, link: "https://www.instagram.com/sohum_gupta/" },
    { text: <SiSubstack/>, link: "https://substack.com/@sohumgupta" },
    { text: <SiGithub/>, link: "https://github.com/sohumgupta" },
];

function AboutPage() {
    // const { imagesPreloaded } = useImagePreloader([]);
    // if (!imagesPreloaded) { return <LoadingScreen/> };

    return (
        <Page>
            <div id="about-page-wrapper">
                <div id="bio-wrapper">
                    <div id="bio-picture">
                    </div>
                    <div id="bio-text">
                        <p>
                            <span>Hi! My name is Sohum Gupta.</span>
                        </p>
                        <p>
                            I graduated from Brown University in 2022, with degrees in Computer Science and the History of Art and Architecture. During my senior year, I realized that the software engineering world wasn't for me, and decided to volunteer with Peace Corps Ghana. I spent two-ish years in a rural town in the Oti Region, teaching mathematics and computing to junior high school students, planning events and projects at my school and in the larger community, and doing a lot of reading, cooking, and sweating.
                        </p>
                        <p>
                            After finishing my service and returning to the States in late 2024, I spent nine months as an apprentice cheesemaker at Cherry Grove Farm, a farmstead creamery in central New Jersey – where my passion for food systems and regenerative agriculture was further cultivated. I'm now based in New York, looking for work in food systems and food access, and trying to keep up with my languages, hobbies, and friends.
                        </p>
                        <p>
                            This website is a repository of a lot of the stuff I've written, photographed, and thought about, from college to now. It's a bit jumbled, but I hope you'll find something you're interested in.
                        </p>
                        <p>
                            If you're a recruiter reading this, please hire me! If you're anyone else, please reach out to me if you want to chat about food, movies, art, or anything else :)
                        </p>
                    </div>
                </div>
                <div id="contact-wrapper">
                    <div className="contact-wrapper-row">
                        <a href="mailto:sohum_gupta@alumni.brown.edu">
                            <div className="contact-info">sohum_gupta@alumni.brown.edu</div>
                        </a>
                        <a href="tel:6303971796">
                            <div className="contact-info">(630)397-1796</div>
                        </a>
                    </div>
                    <div className="contact-wrapper-row">
                        {
                            contacts.map((c, i) => 
                                <a href={c.link} key={i} target="_blank" rel="noopener noreferrer">
                                    <div className="contact-info contact-logo">{c.text}</div>
                                </a>
                            )
                        }
                    </div>
                </div>
            </div>
        </Page>
    )
}

export default AboutPage;