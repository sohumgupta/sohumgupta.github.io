import './AboutPage.scss';
import Page from '../../layout/page/Page';
import Image from '../../layout/image/Image';

import useImagePreloader from '../../misc/UseImagePreloader';
import LoadingScreen from '../../misc/loading/LoadingScreen';

import { NavLink } from "react-router-dom";

const contacts = [
    { text: "sohum_gupta@alumni.brown.edu", link: "mailto:sohum_gupta@alumni.brown.edu" },
    { text: "630-397-1796", link: "tel:+16303971796" },
    { text: "LinkedIn", link: "https://www.linkedin.com/in/sohum-gupta/" },
    { text: "Instagram", link: "https://www.instagram.com/sohum_gupta/" },
    { text: "Substack", link: "https://sohumgupta.substack.com/" },
    { text: "GitHub", link: "https://github.com/sohumgupta" },
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
                            I finished up my service and returned to the States in late 2024, and realized that I wanted my career to reflect my passions. To that end, I have been passionate about cooking since I was old enough to look over a stove, and over the last few years this has transformed into a passion for food culture, food systems, and regenerative agriculture. 
                        </p>
                        <p>
                            This website is a repository of a lot of the stuff I've written, photographed, and thought about, from college to now. It's a bit jumbled, but I hope you'll find something you're interested in.
                        </p>
                        <p>
                            Please reach out to me if you want to chat about food, movies, art, or anything else you find interesting. I'm also currently looking for work!
                        </p>
                    </div>
                </div>
                <div id="contact-wrapper">
                    {
                        contacts.map((c, i) => 
                            <a href={c.link} key={i} target="_blank" rel="noopener noreferrer">
                                <div className="contact-info">{c.text}</div>
                            </a>
                        )
                    }
                </div>
            </div>
        </Page>
    )
}

export default AboutPage;