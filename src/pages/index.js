import React, { useState, useEffect } from "react"
import gsap from "gsap"
import MarkdownPreview from "../components/markdownPreview"
import Markdown from "../components/markdown"
import Title from "../components/title"
import Subtitle from "../components/subtitle"
import Work from "../components/work"
import Social from "../components/social"
import Addons from "../components/addons"
import Skills from "../components/skills"
import Donate from "../components/donate"
import Support from "../components/support"
import { initialSkillState } from "../constants/skills"
import Loader from "../components/loader"
import SEO from "../components/seo"
import Layout from "../components/layout"
import "./index.css"
import {
  ArrowLeftIcon,
  CopyIcon,
  DownloadIcon,
  EyeIcon,
  CheckIcon,
  MarkdownIcon,
  FileCodeIcon,
} from "@primer/octicons-react"
import {
  isGitHubUsernameValid,
  isMediumUsernameValid,
  isTwitterUsernameValid,
} from "../utils/validation"
import {
  DEFAULT_PREFIX,
  DEFAULT_DATA,
  DEFAULT_LINK,
  DEFAULT_SOCIAL,
  DEFAULT_SUPPORT,
} from "../constants/defaults"

const KeepCacheUpdated = ({ prefix, data, link, social, skills, support }) => {
  useEffect(() => {
    localStorage.setItem(
      "cache",
      JSON.stringify({
        prefix,
        data,
        link,
        social,
        skills,
        support,
      })
    )
  }, [prefix, data, link, social, skills, support])
}

const DEFAULT_SKILLS = initialSkillState

const IndexPage = () => {
  const [prefix, setPrefix] = useState(DEFAULT_PREFIX)
  const [data, setData] = useState(DEFAULT_DATA)
  const [link, setLink] = useState(DEFAULT_LINK)
  const [social, setSocial] = useState(DEFAULT_SOCIAL)
  const [skills, setSkills] = useState(DEFAULT_SKILLS)
  const [support, setSupport] = useState(DEFAULT_SUPPORT)

  const [restore, setRestore] = useState("")
  const [generatePreview, setGeneratePreview] = useState(false)
  const [generateMarkdown, setGenerateMarkdown] = useState(false)
  const [displayLoader, setDisplayLoader] = useState(false)
  const [showConfig, setShowConfig] = useState(true)
  const [copyObj, setcopyObj] = useState({
    isCopied: false,
    copiedText: "copy-markdown",
  })
  const [previewMarkdown, setPreviewMarkdown] = useState({
    isPreview: false,
    buttonText: "preview",
  })

  const handleSkillsChange = field => {
    let change = { ...skills }
    change[field] = !change[field]
    setSkills(change)
  }

  const handlePrefixChange = (field, e) => {
    let change = { ...prefix }
    change[field] = e.target.value
    setPrefix(change)
  }

  const handleDataChange = (field, e) => {
    let change = { ...data }
    change[field] = e.target.value
    setData(change)
  }

  const handleLinkChange = (field, e) => {
    let change = { ...link }
    change[field] = e.target.value
    setLink(change)
  }

  const handleSocialChange = (field, e) => {
    let change = { ...social }
    change[field] =
      field === "discord" ? e.target.value : e.target.value.toLowerCase()
    setSocial(change)
  }

  const handleSupportChange = (field, e) => {
    let change = { ...support }
    change[field] = e.target.value
    setSupport(change)
  }

  const handleCheckChange = field => {
    let change = { ...data }
    change[field] = !change[field]
    setData(change)
  }

  const generate = () => {
    setShowConfig(false)
    var tl = new gsap.timeline()
    tl.to(".generate", {
      scale: 0,
      duration: 0.5,
      ease: "Linear.easeNone",
    })
    tl.set("#form", { display: "none" })
    setDisplayLoader(true)
    setTimeout(() => {
      setDisplayLoader(false)
      setGenerateMarkdown(!generateMarkdown)
      gsap.fromTo(
        "#markdown-box",
        {
          scale: 0.2,
        },
        {
          scale: 1,
          duration: 0.5,
          ease: "Linear.easeNone",
        }
      )
      gsap.fromTo(
        "#support",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 2,
          ease: "Linear.easeNone",
        }
      )
      document.body.scrollTop = 0 // For Safari
      document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
    }, 3000)
  }

  const trimDataValues = (item, setItem) => {
    const dataObj = { ...item }
    Object.keys(dataObj).forEach(k =>
      typeof dataObj[k] === "string" ? (dataObj[k] = dataObj[k].trim()) : null
    )
    setItem(dataObj)
  }

  const handleGenerate = () => {
    trimDataValues(data, setData)
    trimDataValues(social, setSocial)
    trimDataValues(link, setLink)
    resetCopyMarkdownButton()
    if (
      data.visitorsBadge ||
      data.githubProfileTrophy ||
      data.githubStats ||
      data.topLanguages ||
      data.streakStats
    ) {
      if (social.github && isGitHubUsernameValid(social.github)) {
        generate()
      }
    } else if (data.twitterBadge) {
      if (social.twitter && isTwitterUsernameValid(social.twitter)) {
        generate()
      }
    } else if (social.github) {
      if (isGitHubUsernameValid(social.github)) {
        generate()
      }
    } else {
      generate()
    }
  }

  const handleGeneratePreview = () => {
    setGenerateMarkdown(!generateMarkdown)
    setGeneratePreview(!generatePreview)
    if (!generatePreview) {
      gsap.set("#copy-button, #download-md-button, #download-json-button", {
        visibility: "hidden",
      })
      setPreviewMarkdown({
        isPreview: true,
        buttonText: "markdown",
      })
    } else {
      gsap.set("#copy-button, #download-md-button, #download-json-button", {
        visibility: "visible",
      })
      gsap.to("#copy-button", {
        border: "2px solid #3b3b4f",
        duration: 1,
      })
      setPreviewMarkdown({
        isPreview: false,
        buttonText: "preview",
      })
      resetCopyMarkdownButton()
    }
  }

  const resetCopyMarkdownButton = () => {
    var el = document.getElementById("copy-markdown")
    if (el) {
      gsap.set("#copy-markdown", {
        color: "#0a0a23",
      })
    }
    setcopyObj({
      isCopied: false,
      copiedText: "copy-markdown",
    })
  }

  const setCopyMarkdownButton = () => {
    var el = document.getElementById("copy-markdown")
    if (el) {
      gsap.set("#copy-markdown", {
        color: "#00471b",
      })
    }
    gsap.fromTo(
      "#copy-button",
      {
        scale: 0.5,
      },
      {
        scale: 1,
        ease: "elastic.in",
        border: "2px solid #00471b",
        duration: 0.5,
      }
    )
    setcopyObj({
      isCopied: true,
      copiedText: "copied",
    })
  }

  const handleCopyToClipboard = () => {
    var range = document.createRange()
    range.selectNode(document.getElementById("markdown-content"))
    window.getSelection().removeAllRanges() // clear current selection
    window.getSelection().addRange(range) // to select text
    document.execCommand("copy")
    window.getSelection().removeAllRanges()

    setCopyMarkdownButton()
  }

  const handleDownloadMarkdown = () => {
    var markdownContent = document.getElementById("markdown-content")
    var tempElement = document.createElement("a")
    tempElement.setAttribute(
      "href",
      "data:text/markdown;charset=utf-8," +
        encodeURIComponent(markdownContent.innerText)
    )
    tempElement.setAttribute("download", "README.md")
    tempElement.style.display = "none"
    document.body.appendChild(tempElement)
    tempElement.click()
    document.body.removeChild(tempElement)
  }

  const handleDownloadJson = () => {
    var tempElement = document.createElement("a")
    tempElement.setAttribute(
      "href",
      `data:text/json;charset=utf-8,${encodeURIComponent(
        JSON.stringify({ prefix, data, link, social, skills })
      )}`
    )
    tempElement.setAttribute("download", "data.json")
    tempElement.style.display = "none"
    document.body.appendChild(tempElement)
    tempElement.click()
    document.body.removeChild(tempElement)
  }

  const handleBackToEdit = () => {
    setGeneratePreview(false)
    setGenerateMarkdown(false)
    setShowConfig(true)
    gsap.set("#form", {
      display: "",
    })
    gsap.to(".generate", {
      scale: 1,
    })
  }

  const setInitialValues = () => {
    const cache = JSON.parse(localStorage.getItem("cache"))

    if (!cache) {
      return
    }

    setPrefix(
      cache.prefix ? { ...DEFAULT_PREFIX, ...cache.prefix } : DEFAULT_PREFIX
    )
    setData(cache.data ? { ...DEFAULT_DATA, ...cache.data } : DEFAULT_DATA)
    setLink(cache.link ? { ...DEFAULT_LINK, ...cache.link } : DEFAULT_LINK)
    setSocial(
      cache.social ? { ...DEFAULT_SOCIAL, ...cache.social } : DEFAULT_SOCIAL
    )

    const cacheSkills = mergeDefaultWithNewDataSkills(
      DEFAULT_SKILLS,
      cache.skills
    )
    setSkills(cacheSkills || DEFAULT_SKILLS)

    setSupport(
      cache.support ? { ...DEFAULT_SUPPORT, ...cache.support } : DEFAULT_SUPPORT
    )
  }

  useEffect(() => {
    gsap.fromTo(
      ".generate",
      {
        boxShadow: "0 0 0 0px rgba(59, 59, 79, 0.4)",
      },
      {
        boxShadow: "0 0 0 10px rgba(59, 59, 79, 0)",
        repeat: -1,
        duration: 1,
      }
    )

    // set initial values
    setInitialValues()
  }, [])

  // keep cache updated
  KeepCacheUpdated({ prefix, data, link, social, skills, support })

  const handleResetForm = () => {
    setPrefix(DEFAULT_PREFIX)
    setData(DEFAULT_DATA)
    setLink(DEFAULT_LINK)
    setSocial(DEFAULT_SOCIAL)
    setSkills(DEFAULT_SKILLS)
  }

  const mergeDefaultWithNewDataSkills = (defaultSkills, newSkills) => {
    return Object.keys(defaultSkills).reduce((previous, currentKey) => {
      let currentSelected = false

      if (newSkills[currentKey]) {
        currentSelected = true
      }

      return {
        ...previous,
        [currentKey]: currentSelected,
      }
    }, {})
  }

  const handleRestore = () => {
    try {
      const restoreData = JSON.parse(restore)

      if (!restoreData) {
        return
      }

      setPrefix(restoreData.prefix || DEFAULT_PREFIX)
      setData(restoreData.data || DEFAULT_DATA)
      setLink(restoreData.link || DEFAULT_LINK)
      setSocial(restoreData.social || DEFAULT_SOCIAL)

      const restoreDataSkills = mergeDefaultWithNewDataSkills(
        DEFAULT_SKILLS,
        restoreData.skills
      )
      setSkills(restoreDataSkills || DEFAULT_SKILLS)
    } catch (error) {
    } finally {
      setRestore("")
    }
  }

  const handleFileInput = e => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsText(file, "UTF-8")
    reader.onload = () => {
      setRestore(reader.result)
    }
  }

  return (
    <Layout>
      <div className="m-4 sm:p-4">
        <SEO title="GitHub Profile Readme Generator" />
        <div id="form">
          <Title
            data={data}
            prefix={prefix}
            handleDataChange={handleDataChange}
            handlePrefixChange={handlePrefixChange}
          />
          <Subtitle data={data} handleDataChange={handleDataChange} />
          <Work
            prefix={prefix}
            data={data}
            link={link}
            handlePrefixChange={handlePrefixChange}
            handleLinkChange={handleLinkChange}
            handleDataChange={handleDataChange}
          />
          <Skills skills={skills} handleSkillsChange={handleSkillsChange} />
          <Social social={social} handleSocialChange={handleSocialChange} />
          <Addons
            data={data}
            social={social}
            handleCheckChange={handleCheckChange}
            handleDataChange={handleDataChange}
          />
          <Support
            support={support}
            handleSupportChange={handleSupportChange}
          />
          <div className="section">
            {(data.visitorsBadge ||
              data.githubProfileTrophy ||
              data.githubStats ||
              data.topLanguages ||
              data.streakStats) &&
            !social.github ? (
              <div className="warning">
                * Please add github username to use these add-ons
              </div>
            ) : (
              ""
            )}
            {social.github && !isGitHubUsernameValid(social.github) ? (
              <div className="warning">
                * GitHub username is invalid, please add a valid username
              </div>
            ) : (
              ""
            )}
            {social.medium && !isMediumUsernameValid(social.medium) ? (
              <div className="warning">
                * Medium username is invalid, please add a valid username (with
                @)
              </div>
            ) : (
              ""
            )}
            {data.mediumDynamicBlogs && !social.medium ? (
              <div className="warning">
                * Please add medium username to display latest blogs dynamically
              </div>
            ) : (
              ""
            )}
            {data.devDynamicBlogs && !social.dev ? (
              <div className="warning">
                * Please add dev.to username to display latest blogs dynamically
              </div>
            ) : (
              ""
            )}
            {data.rssDynamicBlogs && !social.rssurl ? (
              <div className="warning">
                * Please add your rss feed url to display latest blogs
                dynamically from your personal blog
              </div>
            ) : (
              ""
            )}
            {data.twitterBadge && !social.twitter ? (
              <div className="warning">
                * Please add twitter username to use these add-ons
              </div>
            ) : (
              ""
            )}
            {social.twitter && !isTwitterUsernameValid(social.twitter) ? (
              <div className="warning">
                * Twitter username is invalid, please add a valid username
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="flex items-center justify-center w-full">
            <div
              className="text-xs sm:text-xl font-medium border-2 border-solid border-gray-900 bg-gray-100 flex items-center justify-center py-1 sm:py-2 px-2 sm:px-4 generate"
              tabIndex="0"
              role="button"
              onClick={handleGenerate}
              onKeyDown={e => e.keyCode === 13 && handleGenerate()}
            >
              Generate README
            </div>
          </div>
        </div>

        {displayLoader ? <Loader /> : ""}

        {generateMarkdown || generatePreview ? (
          <div className="markdown-section p-4 sm:py-4 sm:px-10">
            <div className="w-full flex justify-between items-center">
              <button
                className="text-base w-1/6 border-2 border-solid border-gray-900 bg-gray-100 flex items-center justify-center p-1"
                onClick={handleBackToEdit}
              >
                <ArrowLeftIcon size={24} />
                <span className="hidden sm:block"> back to edit</span>
              </button>

              <button
                className="text-base w-1/6 border-2 border-solid border-gray-900 bg-gray-100 flex items-center justify-center p-1"
                id="copy-button"
                onClick={handleCopyToClipboard}
              >
                {copyObj.isCopied === true ? (
                  <CheckIcon size={24} />
                ) : (
                  <CopyIcon size={24} />
                )}
                <span className="hidden sm:block" id="copy-markdown">
                  {copyObj.copiedText}
                </span>
              </button>

              <button
                className="text-base w-1/6 border-2 border-solid border-gray-900 bg-gray-100 flex items-center justify-center p-1"
                id="download-md-button"
                onClick={handleDownloadMarkdown}
              >
                <DownloadIcon size={24} />
                <span className="hidden sm:block" id="download-markdown">
                  download markdown
                </span>
              </button>

              <button
                className="text-base w-1/6 border-2 border-solid border-gray-900 bg-gray-100 flex items-center justify-center p-1"
                id="download-json-button"
                onClick={handleDownloadJson}
              >
                <FileCodeIcon size={24} />
                <span className="hidden sm:block" id="download-json">
                  download backup
                </span>
              </button>

              <button
                className="text-base w-1/6 border-2 border-solid border-gray-900 bg-gray-100 flex items-center justify-center p-1"
                onClick={handleGeneratePreview}
              >
                {previewMarkdown.isPreview ? (
                  <MarkdownIcon size={16} />
                ) : (
                  <EyeIcon size={16} />
                )}
                <span className="hidden sm:block ml-1" id="preview-markdown">
                  {previewMarkdown.buttonText}
                </span>
              </button>
            </div>

            <div className="w-full flex justify-center items-center">
              <div
                className="w-full text-sm text-gray-900 shadow-xl mt-2 p-4 bg-gray-100 border-2 border-solid border-gray-800"
                id="markdown-box"
              >
                {generatePreview ? (
                  <MarkdownPreview
                    prefix={prefix}
                    data={data}
                    link={link}
                    social={social}
                    skills={skills}
                    support={support}
                  />
                ) : (
                  ""
                )}
                {generateMarkdown ? (
                  <Markdown
                    prefix={prefix}
                    data={data}
                    link={link}
                    social={social}
                    skills={skills}
                    support={support}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="mt-10" id="support">
              <Donate />
            </div>
          </div>
        ) : (
          ""
        )}
        <div
          className={
            "w-full shadow flex flex-col justify-center items-start mt-16 border-2 border-solid border-gray-600 py-2 px-4 " +
            (!showConfig ? "hidden" : "block")
          }
        >
          <div className="flex justify-between items-center w-full">
            <div className="text-lg sm:text-2xl font-bold font-title mt-2 mb-2">
              Config options
              <span className="bg-green-800 text-white text-xs sm:text-sm p-1 ml-1">
                new feature
              </span>
            </div>
            <button
              className="text-xxs sm:text-sm border-2 w-auto px-2 border-solid border-gray-900 bg-gray-100 flex items-center justify-center"
              onClick={handleResetForm}
            >
              Reset form
            </button>
          </div>
          <div className="w-full flex justify-start items-center my-4">
            <input
              type="text"
              className="outline-none w-1/2 mr-6 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700 prefix"
              placeholder="Paste JSON code or upload file"
              value={restore}
              onChange={e => setRestore(e.target.value)}
            />

            <div className="overflow-hidden relative w-64 mt-4 mb-4">
              <input
                className="cursor-pointer absolute block opacity-0 pin-r pin-t before:cursor-pointer"
                type="file"
                name="vacancyImageFiles"
                onChange={handleFileInput}
              />
              <button className="text-xxs sm:text-sm border-2 w-40 border-solid border-gray-900 bg-gray-100 flex items-center justify-center py-1">
                Upload json file
              </button>
            </div>
          </div>
          <button
            className="mr-5 mb-10 text-xxs sm:text-sm border-2 w-32 border-solid border-gray-900 bg-gray-100 flex items-center justify-center py-1"
            onClick={handleRestore}
          >
            Restore
          </button>
          <div className="flex flex-col items-start justify-center">
            <div className="text-green-700 font-medium">Tips</div>
            <div className="text-sm sm:text-lg text-gray-700">
              * Enter the downloaded JSON text to restore.
            </div>
            <div className="text-sm sm:text-lg text-gray-700">
              * Press reset to reset the form.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
