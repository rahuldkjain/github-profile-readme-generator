import React, { useRef, useState } from "react"
import MarkdownPreview from "../components/markdownPreview";
import Markdown from '../components/markdown';
import Header from '../components/header';
import Title from '../components/title';
import Subtitle from '../components/subtitle';
import Work from '../components/work';
import Social from '../components/social';
import Addons from '../components/addons';
import gsap from 'gsap';
import Loader from '../components/loader';
import Footer from '../components/footer';
import './index.css'

const IndexPage = () => {
  const [prefix, setPrefix] = useState({
    title: "Hi 👋, I'm",
    currentWork: '🔭 I’m currently working on',
    currentLearn: '🌱 I’m currently learning',
    collaborateOn: '👯 I’m looking to collaborate on',
    helpWith: '🤔 I’m looking for help with',
    ama: '💬 Ask me about',
    contact: '📫 How to reach me',
    funFact: '⚡ Fun fact',
    portfolio: '👨‍💻 All of my projects are available at',
    blog: '📝 I regulary write articles on',
  });
  const [data, setData] = useState({
    title: '',
    subtitle: 'A passionate frontend developer from India',
    currentWork: '',
    currentLearn: '',
    collaborateOn: '',
    helpWith: '',
    ama: '',
    contact: '',
    funFact: '',
    visitorsBadge: false,
    githubStats: false,
  });
  const [link, setLink] = useState({
    currentWork: '',
    collaborateOn: '',
    helpWith: '',
    portfolio: '',
    blog: '',
  });
  const [social, setSocial] = useState({
    github: '',
    dev: '',
    linkedin: '',
    codepen: '',
    stackoverflow: '',
    kaggle: '',
    codesandbox: '',
    fb: '',
    instagram: '',
    twitter: '',
  });
  const [generatePreview, setGeneratePreview] = useState(false);
  const [generateMarkdown, setGenerateMarkdown] = useState(false);
  const [displayLoader, setDisplayLoader] = useState(false);
  const handlePrefixChange = (field, e) => {
    let change = { ...prefix }
    change[field] = e.target.value;
    setPrefix(change);
  }
  const handleDataChange = (field, e) => {
    let change = { ...data }
    change[field] = e.target.value;
    setData(change);
  }
  const handleLinkChange = (field, e) => {
    let change = { ...link }
    change[field] = e.target.value;
    setLink(change);
  }
  const handleSocialChange = (field, e) => {
    let change = { ...social }
    change[field] = e.target.value;
    setSocial(change);
  }
  const handleCheckChange = (field) => {
    let change = { ...data }
    change[field] = !change[field];
    setData(change);
  }
  const generate = () => {
    var tl = new gsap.timeline();
    tl.to('.generate', {
      scale: 0,
      duration: 0.5,
      ease: 'Linear.easeNone',
    });
    tl.set('.form', { display: 'none' });
    setDisplayLoader(true);
    setTimeout(() => {
      setDisplayLoader(false);
      setGenerateMarkdown(!generateMarkdown);
      gsap.fromTo('.markdown-box', {
        scale: 0.2,
      }, {
        scale: 1,
        duration: 0.5,
        ease: 'Linear.easeNone',
      });
    }, 3000);
  }
  const handleGenerate = () => {
    if (data.visitorsBadge || data.githubStats) {
      if (social.github) {
        generate();
      }
    } else {
      generate();
    }
  }
  const handleGeneratePreview = () => {
    setGenerateMarkdown(!generateMarkdown);
    setGeneratePreview(!generatePreview);
    if (!generatePreview) {
      gsap.set('#copy-markdown', {
        visibility: 'hidden'
      });
      document.getElementById('preview-markdown').innerHTML = 'markdown'
    } else {
      gsap.set('#copy-markdown', {
        visibility: 'visible'
      });
      document.getElementById('preview-markdown').innerHTML = 'preview'
    }
  }
  const handleCopyToClipboard = () => {
    var range = document.createRange();
    range.selectNode(document.getElementById("markdown-content"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    gsap.set('#copy-markdown', {
      innerHTML: 'copied',
      color: '#00471b',
    });
  }
  const handleBackToEdit = () => {
    setGeneratePreview(false);
    setGenerateMarkdown(false);
    gsap.set('.form', {
      display: ''
    });
    gsap.to('.generate', {
      scale: 1,      
    });
  }
  return (
    <>
      {/* <SEO title="Home" /> */}
      <Header heading="Github Profile Readme Generator" />
      <div className="form">
        <Title data={data} prefix={prefix} handleDataChange={handleDataChange} handlePrefixChange={handlePrefixChange} />
        <Subtitle data={data} handleDataChange={handleDataChange} />
        <Work prefix={prefix} data={data} link={link} handlePrefixChange={handlePrefixChange} handleLinkChange={handleLinkChange} handleDataChange={handleDataChange} />
        <Social social={social} handleSocialChange={handleSocialChange} />
        <Addons data={data} handleCheckChange={handleCheckChange} />

        <div className="section">
          {(data.visitorsBadge || data.githubStats) && !social.github ?
            <div className="warning">* Please add github username to use these add-ons</div> : ''}
        </div>
        <div className="submit">
          <div className="button generate" onClick={handleGenerate}>Generate README</div>
        </div>
      </div>
      {displayLoader ? <Loader /> : ''}
      {/* <div className="section preview"></div> */}
      {(generateMarkdown || generatePreview) ?
        <div className="section">
          <div className="back-button" onClick={handleBackToEdit}>&#8592; back to edit</div>
        </div>
      : '' }
      {(generateMarkdown || generatePreview) ?
        <div className="markdown">
          <div className="markdown-box">
            <div className="markdown-util">
              <div className="copy-button" id="copy-markdown" onClick={handleCopyToClipboard}>copy</div>
              <div className="preview-button" id="preview-markdown" onClick={handleGeneratePreview}>preview</div>
            </div>
            {generatePreview ? <MarkdownPreview prefix={prefix} data={data} link={link} social={social} /> : ''}
            {generateMarkdown ? <Markdown prefix={prefix} data={data} link={link} social={social} /> : ''}
          </div>
        </div>
        : ''}
      <Footer />
    </>
  )
}

export default IndexPage
