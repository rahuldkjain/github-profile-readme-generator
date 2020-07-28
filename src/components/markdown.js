import React from 'react';
import { isMediumUsernameValid } from '../utils/validation'
import { icons, skills } from '../constants/skills';

const Markdown = (props) => {
    const Title = (props) => {
        if (props.prefix && props.title) {
            return (
                <>
                    {`<h1 align="center">${props.prefix + ' ' + props.title}</h1>`}
                    <br />
                </>
            );
        }
        return '';
    }
    const SubTitle = (props) => {
        if (props.subtitle) {
            return (
                <>
                    {`<h3 align="center">${props.subtitle}</h3>`}
                    <br />
                    <br />
                </>
            );
        }
        return '';
    }
    const DisplayWork = (props) => {
        if (props.prefix && props.project) {
            if (props.link) {
                return (<>{`- ${props.prefix} [${props.project}](${props.link})`}<br /><br /></>);
            } else {
                return (<>{`- ${props.prefix} **${props.project}**`}<br /><br /></>);
            }
        }
        if (props.prefix && props.link) {
            return (<>{`- ${props.prefix} [${props.link}](${props.link})`}<br /><br /></>);
        }
        return '';
    }
    const DisplaySocial = (props) => {
        if (props.username) {
            return (<>{`<a href="${props.base}/${props.username}" target="blank"><img align="center" src="${props.icon}" alt="${props.username}" height="20" width="20" /></a>`}<br /></>);
        }
        return '';
    }
    const VisitorsBadge = (props) => {
        let link = "https://komarev.com/ghpvc/?username=" + props.github
        if (props.show) {
            return (<>{`<p align="left"> <img src="${link}" alt="${props.github}" /> </p>`}<br /><br /></>);
        }
        return '';
    }
    const GithubStats = (props) => {
        let link = "https://github-readme-stats.vercel.app/api?username=" + props.github + "&show_icons=true"
        if (props.show) {
            return (<>{`<p align="center"> <img src="${link}" alt="${props.github}" /> </p>`}<br /><br /></>);
        }
        return '';
    }
    const isSocial = (social) => {
        return (social.dev || social.twitter || social.codepen || social.codesandbox || social.stackoverflow
            || social.linkedin || social.kaggle || social.instagram || social.fb || social.dribbble || social.behance || social.medium || social.youtube);
    }
    const DisplaySkills = (props) => {
        const listChosenSkills = [];
        skills.forEach(skill => {
            if (props.skills[skill]) {
                listChosenSkills.push(`<img src="${icons[skill]}" alt="${skill}" width="20" height="20"/>`);
            }
        });
        return listChosenSkills.length > 0 ? `<p align="left">${listChosenSkills.join(' ')}</p>` : '';
    }
    const DisplayDynamicBlogs = (props) => {
        if (props.show) {
            return (<>{`### Blogs posts`}
                <br />
                {`<!-- BLOG-POST-LIST:START -->`}
                <br />
                {`<!-- BLOG-POST-LIST:END -->`}<br /> <br /></>)
        }
        return '';
    }
    return (
        <div id="markdown-content">
            <><Title prefix={props.prefix.title} title={props.data.title} /></>
            <><SubTitle subtitle={props.data.subtitle} /></>
            <><VisitorsBadge show={props.data.visitorsBadge} github={props.social.github} /></>

            <><DisplayWork prefix={props.prefix.currentWork} project={props.data.currentWork} link={props.link.currentWork} /></>
            <><DisplayWork prefix={props.prefix.currentLearn} project={props.data.currentLearn} /></>
            <><DisplayWork prefix={props.prefix.collaborateOn} project={props.data.collaborateOn} link={props.link.collaborateOn} /></>
            <><DisplayWork prefix={props.prefix.helpWith} project={props.data.helpWith} link={props.link.helpWith} /></>
            <><DisplayWork prefix={props.prefix.portfolio} link={props.link.portfolio} /></>
            <><DisplayWork prefix={props.prefix.blog} link={props.link.blog} /></>
            <><DisplayWork prefix={props.prefix.ama} project={props.data.ama} /></>
            <><DisplayWork prefix={props.prefix.contact} project={props.data.contact} /></>
            <><DisplayWork prefix={props.prefix.funFact} project={props.data.funFact} /></>

            <><DisplayDynamicBlogs show={(props.data.devDynamicBlogs && props.social.dev) ||
                (props.data.mediumDynamicBlogs && props.social.medium && isMediumUsernameValid(props.social.medium))} /></>
            <><DisplaySkills skills={props.skills} /></>
            <><GithubStats show={props.data.githubStats} github={props.social.github} /></>
            {isSocial(props.social) ? `<p align="center">` : ''} <br />
            <><DisplaySocial base='https://codepen.io' icon='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codepen.svg'
                username={props.social.codepen} /></>
            <><DisplaySocial base='https://dev.to' icon='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/dev-dot-to.svg'
                username={props.social.dev} /></>
            <><DisplaySocial base='https://twitter.com' icon='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg'
                username={props.social.twitter} /></>
            <><DisplaySocial base='https://linkedin.com/in' icon='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg'
                username={props.social.linkedin} /></>
            <><DisplaySocial base='https://stackoverflow.com/users'
                icon='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/stackoverflow.svg' username={props.social.stackoverflow} /></>
            <><DisplaySocial base='https://codesandbox.com' icon='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codesandbox.svg'
                username={props.social.codesandbox} /></>
            <><DisplaySocial base='https://kaggle.com' icon='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/kaggle.svg'
                username={props.social.kaggle} /></>
            <><DisplaySocial base='https://fb.com' icon='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg'
                username={props.social.fb} /></>
            <><DisplaySocial base='https://instagram.com' icon='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg'
                username={props.social.instagram} /></>
            <><DisplaySocial base='https://dribbble.com' icon='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/dribbble.svg'
                username={props.social.dribbble} /></>
            <><DisplaySocial base='https://www.behance.net' icon='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/behance.svg'
                username={props.social.behance} /></>
            <><DisplaySocial base='https://medium.com' icon='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/medium.svg'
                username={props.social.medium} /></>
            <><DisplaySocial base='https://www.youtube.com/c' icon='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/youtube.svg'
                username={props.social.youtube} /></>
            {isSocial(props.social) ? `</p>` : ''}
        </div>
    );
};

export default Markdown;