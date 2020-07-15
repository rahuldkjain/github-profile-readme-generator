import React from 'react';

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
        return (<>{`<a href=${props.base}/${props.username} target="blank"><img align="center" src=${props.icon} alt="${props.username}" height="20" width="20" /></a>`}<br /></>);
    }
    return '';
}
const VisitorsBadge = (props) => {
    let link = "https://visitor-badge.glitch.me/badge?page_id=" + props.github + '.' + props.github
    if (props.show) {
        return (<>{`<p align="left"> <img src=${link} alt=${props.github}/> </p>`}<br /><br /></>);
    }
    return '';
}
const GithubStats = (props) => {
    let link = "https://github-readme-stats.vercel.app/api?username=" + props.github + "&show_icons=true"
    if (props.show) {
        return (<>{`<p align="center"> <img src=${link} alt=${props.github} /> </p>`}<br /><br /></>);
    }
    return '';
}
const isSocial = (social) => {
    return (social.dev || social.twitter || social.codepen || social.codesandbox || social.stackoverflow
        || social.linkedin || social.kaggle || social.instagram || social.fb);
}
const Markdown = (props) => {
    return (
        <div id="markdown-content">
            <Title prefix={props.prefix.title} title={props.data.title} />
            <SubTitle subtitle={props.data.subtitle} />
            <VisitorsBadge show={props.data.visitorsBadge} github={props.social.github} />

            <DisplayWork prefix={props.prefix.currentWork} project={props.data.currentWork} link={props.link.currentWork} />
            <DisplayWork prefix={props.prefix.collaborateOn} project={props.data.collaborateOn} link={props.link.collaborateOn} />
            <DisplayWork prefix={props.prefix.helpWith} project={props.data.helpWith} link={props.link.helpWith} />
            <DisplayWork prefix={props.prefix.portfolio} project={props.data.portfolio} />
            <DisplayWork prefix={props.prefix.blog} project={props.data.blog} />
            <DisplayWork prefix={props.prefix.ama} project={props.data.ama} />
            <DisplayWork prefix={props.prefix.contact} project={props.data.contact} />
            <DisplayWork prefix={props.prefix.funFact} project={props.data.funFact} />
            { isSocial(props.social) ? `<p align="center">` : ''} <br />
            <DisplaySocial base='https://codepen.io' icon='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codepen.svg'
                username={props.social.codepen} />
            <DisplaySocial base='https://dev.to' icon='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/dev-dot-to.svg'
                username={props.social.dev} />
            <DisplaySocial base='https://twitter.com' icon='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg'
                username={props.social.twitter} />
            <DisplaySocial base='https://linkedin.com/in' icon='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg'
                username={props.social.linkedin} />
            <DisplaySocial base='https://stackoverflow.com'
                icon='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/stackoverflow.svg' username={props.social.stackoverflow} />
            <DisplaySocial base='https://codesandbox.com' icon='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codesandbox.svg'
                username={props.social.codesandbox} />
            <DisplaySocial base='https://kaggle.com' icon='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/kaggle.svg'
                username={props.social.kaggle} />
            <DisplaySocial base='https://fb.com' icon='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg'
                username={props.social.fb} />
            <DisplaySocial base='https://instagram.com' icon='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg'
                username={props.social.instagram} />
            { isSocial(props.social) ? `</p>` : ''}
            <br /><br />
            <GithubStats show={props.data.githubStats} github={props.social.github} />
        </div>
    );
};

export default Markdown;