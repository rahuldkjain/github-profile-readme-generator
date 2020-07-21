import React, { useState, useEffect } from "react"
import MarkdownPreview from "../components/markdownPreview";
import Markdown from '../components/markdown';
import Header from '../components/header';
import Title from '../components/title';
import Subtitle from '../components/subtitle';
import Work from '../components/work';
import Social from '../components/social';
import Addons from '../components/addons';
import Skills from '../components/skills';
import { initialSkillState } from '../constants/skills';
import gsap from 'gsap';
import Loader from '../components/loader';
import Footer from '../components/footer';
import './index.css'
import { ArrowLeftIcon, CopyIcon, DownloadIcon, EyeIcon, CheckIcon, MarkdownIcon } from '@primer/octicons-react';
import SEO from '../components/seo';
import { isGithubUsernameValid } from '../utils/validation';
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
    dribbble: '',
    behance: '',
    medium: '',
    youtube: ''
  });
  const [skills, setSkills] = useState(initialSkillState)
  const [generatePreview, setGeneratePreview] = useState(false);
  const [generateMarkdown, setGenerateMarkdown] = useState(false);
  const [displayLoader, setDisplayLoader] = useState(false);
  const [copyObj, setcopyObj] = useState({
    isCopied: false,
    copiedText: 'copy-markdown'
  });
  const [previewMarkdown, setPreviewMarkdown] = useState({
    isPreview: false,
    buttonText: 'preview'
  });
  const handleSkillsChange = (field) => {
    let change = { ...skills }
    change[field] = !change[field];
    setSkills(change);
  }
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
    change[field] = e.target.value.toLowerCase();
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
  const trimDataValues = (item, setItem) => {
    const dataObj = { ...item };
    Object.keys(dataObj).forEach(k => (typeof dataObj[k] === 'string') ? dataObj[k] = dataObj[k].trim() : null);
    setItem(dataObj);
  }
  const handleGenerate = () => {
    trimDataValues(data, setData);
    trimDataValues(social, setSocial);
    trimDataValues(link, setLink);
    resetCopyMarkdownButton();
    if (data.visitorsBadge || data.githubStats) {
      if (social.github && isGithubUsernameValid(social.github)) {
        generate();
      }
    } else if (social.github) {
      if (isGithubUsernameValid(social.github)) {
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
      gsap.set('.copy-button, .download-button', {
        visibility: 'hidden'
      });
      setPreviewMarkdown({
        isPreview: true,
        buttonText: 'markdown'
      })
    } else {
      gsap.set('.copy-button, .download-button', {
        visibility: 'visible'
      });
      gsap.to('.copy-button', {
        border: '2px solid #3b3b4f',
        duration: 1
      });
      setPreviewMarkdown({
        isPreview: false,
        buttonText: 'preview'
      })
      resetCopyMarkdownButton();
    }
  }
  const resetCopyMarkdownButton = () => {
    gsap.set('#copy-markdown', {
      color: '#0a0a23',
    });
    setcopyObj({
      isCopied: false,
      copiedText: 'copy-markdown'
    });
  }
  const setCopyMarkdownButton = () => {
    gsap.set('#copy-markdown', {
      color: '#00471b',
    });
    gsap.fromTo('.copy-button', {
      scale: 0.5,
    }, {
      scale: 1,
      ease: 'elastic.in',
      border: '2px solid #00471b',
      duration: 0.5
    });
    setcopyObj({
      isCopied: true,
      copiedText: 'copied'
    });
  }
  const handleCopyToClipboard = () => {
    var range = document.createRange();
    range.selectNode(document.getElementById("markdown-content"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();

    setCopyMarkdownButton();
  }

  const handleDownload = () => {
    var markdownContent = document.getElementById("markdown-content");
    var tempElement = document.createElement('a');
    tempElement.setAttribute('href', 'data:text/markdown;charset=utf-8,' + encodeURIComponent(markdownContent.innerText));
    tempElement.setAttribute('download', 'README.md');
    tempElement.style.display = 'none';
    document.body.appendChild(tempElement);
    tempElement.click();
    document.body.removeChild(tempElement);
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
  useEffect(() => {
    gsap.fromTo(".generate", {
      boxShadow: "0 0 0 0px rgba(59, 59, 79, 0.4)"
    }, {
      boxShadow: "0 0 0 10px rgba(59, 59, 79, 0)",
      repeat: -1,
      duration: 1
    });
  });
  return (
    <>
      <SEO title="Github Profile Readme Generator" description="Github Profile Readme Generator" />
      <><Header heading="Github Profile Readme Generator" /></>
      <div className="form">
        <Title data={data} prefix={prefix} handleDataChange={handleDataChange} handlePrefixChange={handlePrefixChange} />
        <Subtitle data={data} handleDataChange={handleDataChange} />
        <Work prefix={prefix} data={data} link={link} handlePrefixChange={handlePrefixChange} handleLinkChange={handleLinkChange} handleDataChange={handleDataChange} />
        <Skills skills={skills} handleSkillsChange={handleSkillsChange} />
        <Social social={social} handleSocialChange={handleSocialChange} />
        <Addons data={data} handleCheckChange={handleCheckChange} />
        <div className="section">
          {(data.visitorsBadge || data.githubStats) && !social.github ?
            <div className="warning">* Please add github username to use these add-ons</div> : ''}
          {social.github && !isGithubUsernameValid(social.github) ?
            <div className="warning">* Github username is invalid, please add a valid username</div> : ''}
        </div>
        <div className="submit">
          <div className="button generate" tabIndex="0" role="button" onClick={handleGenerate}>Generate README</div>
        </div>
      </div>
      {displayLoader ? <Loader /> : ''}
      {(generateMarkdown || generatePreview) ?
        <div className="markdown-section">
          <div className="utils">
            <div className="back-button" tabIndex="0" role="button" onClick={handleBackToEdit}>
              <ArrowLeftIcon size={16} /> <span className="hide-on-mobile"> back to edit</span>
            </div>
            <div className="copy-button" tabIndex="0" role="button" onClick={handleCopyToClipboard}>
              {
                copyObj.isCopied === true ?
                  <CheckIcon size={24} />
                  :
                  <CopyIcon size={24} />
              }
              <span className="hide-on-mobile" id="copy-markdown"> {copyObj.copiedText} </span>
            </div>
            <div className="download-button" tabIndex="0" role="button" onClick={handleDownload}>
              <DownloadIcon size={24} /> <span className="hide-on-mobile" id="download-markdown"> download </span>
            </div>
            <div className="preview-button" tabIndex="0" role="button" onClick={handleGeneratePreview}>
              {previewMarkdown.isPreview ? <MarkdownIcon size={16} /> : <EyeIcon size={16} />} <span className="hide-on-mobile" id="preview-markdown">{previewMarkdown.buttonText}</span>
            </div>
          </div>
          <div className="markdown">
            <div className="markdown-box">
              {generatePreview ? <MarkdownPreview prefix={prefix} data={data} link={link} social={social} skills={skills} /> : ''}
              {generateMarkdown ? <Markdown prefix={prefix} data={data} link={link} social={social} skills={skills} /> : ''}
            </div>
          </div>
        </div>
        : ''}
      <Footer />
    </>
  )
}

export default IndexPage
