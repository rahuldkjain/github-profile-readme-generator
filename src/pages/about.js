import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import './about.css';
import SEO from '../components/seo';

const About = () => {
    return (
        <>
            <SEO title="About" description="Github Profile Readme Generator" />
            <Header heading="Github Profile README Generator" />
            <h1 id="about-title">About</h1>
            <div className="content-container">
                <div id="introduction">
                    Github Profile README Generator provides a cool interface to generate Github profile README in markdown.
                    The tool aims to provide hassle-free experience to add trending addons like profile visitors count, github-stats,
                    dynamic blog posts etc.
                    <br /><br />
                    The profile should be neat and minimal to give a clear overview of the work. Non-uniform icons, too much content, too much images/gifs
                    distracts visitors to see your actual work.
                    <br /><br />
                    To solve this, Github Profile README Generator came into existence.
                    <br /><br />
                    So many developers contributed to the project and made it more awesome to use. You can contribute too to make it grow even further.
                </div>
                <br /><br />
                <div id="how-to-use">
                    <div className="content-title">How to use?</div>
                    Tired of editing profile README.md to add new features like visitors-count badge, github-stats etc?
                    <br />
                    Don't worry. Keep calm and fill the form and let the tool do the work for you
                    <br />
                    <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/github-profile-readme-generator.gif"
                        style={{ textAlign: 'center' }} id="gprg-gif" alt="github profile readme generator" />
                </div>
                <div id="faq">
                    <div className="content-title">Why visitors count keeps on increasing?</div>
                    So many users raised an issue that the counter keeps on increasing everytime the page reloads.
                    <br />
                    Well it is visitors count not "unique" visitors count. The goal of the addon is to provide a good stat
                    of how well the github profile is doing.
                    <br />
                    Proper use or misuse of the addon is the sole responsibility of the user.
                    The developer of the addon is working on it to fix this issue.
                </div>
            </div>
            <Footer />
        </>
    );
}
export default About;