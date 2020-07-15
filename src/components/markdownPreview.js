import React from 'react';

const TitlePreview = (props) => {
    if (props.prefix && props.title) {
        return (
            <h1 className="title">{props.prefix + ' ' + props.title}</h1>
        )
    }
    return null;
}
const SubTitlePreview = (props) => {
    if(props.subtitle) {
        return (
            <h3 className="subtitle">{props.subtitle}</h3>
        )
    }
    return null;
}
const DisplayWork = (props) => {
    if(props.prefix && props.project){
        if(props.link) {
            return (
                <div>
                {props.prefix + ' '}<a href={props.link} className="link" target="blank">{props.project}</a>
                </div>
                );
        } else {
            return (<div>{props.prefix +' '}<b>{props.project}</b></div>);
        }
    }
    if (props.prefix && props.link) {
        return ( 
            <div>
                {props.prefix + ' '}<a href={props.link} className="link" target="blank">{props.link}</a>
            </div>
        );
    }
    return null;
}
const WorkPreview = (props) => {
    const prefix = props.work.prefix
    const data = props.work.data
    const link = props.work.link
    return (
        <>
            <DisplayWork prefix={prefix.currentWork} project={data.currentWork} link={link.currentWork}/>
            <DisplayWork prefix={prefix.helpWith} project={data.helpWith} link={link.helpWith}/>
            <DisplayWork prefix={prefix.collaborateOn} project={data.collaborateOn} 
                link={link.collaborateOn}/>
            <DisplayWork prefix={prefix.ama} project={data.ama}/>
            <DisplayWork prefix={prefix.portfolio} link={link.portfolio}/>
            <DisplayWork prefix={prefix.blog} link={link.blog}/>
            <DisplayWork prefix={prefix.contact} project={data.contact}/>
            <DisplayWork prefix={prefix.funFact} project={data.funFact}/>
        </>
    )
}
const DisplaySocial = (props) => {
    if(props.username) {
        return (<a className="link social-icon" href={props.base + '/' +props.username} target="blank"><img className="icon" src={props.icon} alt="props.username" /></a>)
    }
    return null;
}
const SocialPreview = (props) => {
    return (
        <div className="social">
            <DisplaySocial base="https://codepen.io" icon="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codepen.svg" username={props.social.codepen} />
            <DisplaySocial base="https://dev.to" icon="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/dev-dot-to.svg" username={props.social.dev} />
            <DisplaySocial base="https://twitter.com" icon="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg" username={props.social.twitter} />
            <DisplaySocial base="https://linkedin.com/in" icon="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" username={props.social.linkedin} />
            <DisplaySocial base="https://stackoverflow.com" icon="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/stackoverflow.svg" username={props.social.stackoverflow} />
            <DisplaySocial base="https://codesandbox.com" icon="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codesandbox.svg" username={props.social.codesandbox} />
            <DisplaySocial base="https://kaggle.com" icon="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/kaggle.svg" username={props.social.kaggle} />
            <DisplaySocial base="https://fb.com" icon="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg" username={props.social.fb} />
            <DisplaySocial base="https://instagram.com" icon="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" username={props.social.instagram} />
        </div>
    )
}
const VisitorsBadgePreview = (props) => {
    let link = "https://visitor-badge.glitch.me/badge?page_id="+props.github+'.'+props.github
    if (props.show) {
        return (<div className="badge"> <img className="badgeImage" src={link} alt={props.github}/> </div>)
    }
    return null;
}
const GithubStatsPreview = (props) => {
    let link = "https://github-readme-stats.vercel.app/api?username="+props.github+"&show_icons=true"
    if (props.show) {
        return (<div className="card"> <img className="cardImage" src={link} alt={props.github}/> </div>)
    }
    return null;
}

const MarkdownPreview = (props) => {
    return (
        <div id="markdown-preview">
            <TitlePreview prefix={props.prefix.title} title={props.data.title} />
            <SubTitlePreview subtitle={props.data.subtitle} />
            <VisitorsBadgePreview show={props.data.visitorsBadge} github={props.social.github}/>
            <WorkPreview work={props}/>
            <GithubStatsPreview show={props.data.githubStats} github={props.social.github} />
            <SocialPreview social={props.social} />
        </div>
    )
}

export default MarkdownPreview;