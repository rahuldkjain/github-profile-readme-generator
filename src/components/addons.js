import React, { useState, useEffect } from "react"
import { withPrefix } from "gatsby"
import { latestBlogs } from "../utils/workflows"
import links from "../constants/page-links"
import { isMediumUsernameValid } from "../utils/validation"
import { ToolsIcon, XCircleIcon } from "@primer/octicons-react";

const AddonsItem = ({inputId, inputChecked, onInputChange, Icon, onIconClick, ...props}) => {
  return (
      <div className="py-2 flex justify-start items-center text-sm sm:text-lg">
          <label htmlFor={inputId} className="cursor-pointer flex items-center">
              <input
                  type="checkbox"
                  id={inputId}
                  checked={inputChecked}
                  onChange={onInputChange}
              />
              <span className="pl-4">{props.children}</span>
          </label>
          {
            Icon?
              <button onClick={onIconClick} className="flex">
                <Icon className="transform scale-100 md:scale-125 ml-3" />
              </button>
              :''
          }
      </div>
  )
}

const CustomizeBadge = ({githubName, badgeOptions, onBadgeUpdate}) =>  {
  return (
    <div className={`border-2 border-solid border-gray-900 bg-gray-100 p-2 ml-8`} style={{maxWidth: '21rem'}}>
      <header className="text-base sm:text-lg">Customize Badge</header>
      <hr className="border-gray-500"/>
      <div className="text-sm sm:text-lg flex flex-col mt-2 ml-0 md:ml-4">
        <label htmlFor="badge-style">Style:&nbsp;
          <select 
            id="badge-style" 
            onChange={(e) => onBadgeUpdate('badgeStyle', e.target.value)} 
            value = {badgeOptions.badgeStyle}
          >
            <option value="flat">Flat</option>
            <option value="flat-square">Flat Square</option>
            <option value="plastic">Plastic</option>
          </select> 
        </label>
        
        <label htmlFor="badge-color">Color:&nbsp;
          <input 
            type="color" 
            id="badge-color" 
            defaultValue={`#${badgeOptions.badgeColor}`} 
            className="w-6"
            onChange={(e) => onBadgeUpdate('badgeColor', e.target.value.replace('#', ''))}
          />
        </label>
        
        <label htmlFor="badge-label-text">Label Text:&nbsp;
          <input 
            type="text" 
            id="badge-label-text" 
            placeholder="Profile views" 
            className="w-2/4 bg-gray-400 pl-2"
            onChange={(e) => onBadgeUpdate('badgeLabel', e.target.value.trim())}
            defaultValue={badgeOptions.badgeLabel}
          />
        </label>
        
        <span className="mt-2 flex items-center">
          Preview:&nbsp;
          <img 
            src={`https://komarev.com/ghpvc/`
                + `?username=${githubName}`
                + `&label=${encodeURI(badgeOptions.badgeLabel)}`
                + `&color=${badgeOptions.badgeColor}`
                + `&style=${badgeOptions.badgeStyle}`
                }
          />
        </span>
      </div>
    </div>
  )
}

const Addons = props => {
  const [customizeBadgeOpen, setCustomizeOpen] = useState(false);
  const [debounce, setDebounce] = useState(undefined);
  const [badgeOptions, setBadgeOptions] = useState({
    badgeStyle: props.data.badgeStyle, 
    badgeColor: props.data.badgeColor, 
    badgeLabel: props.data.badgeLabel
  });

  useEffect(() => {
    setBadgeOptions({
      badgeStyle: props.data.badgeStyle, 
      badgeColor: props.data.badgeColor, 
      badgeLabel: props.data.badgeLabel
    })
  }, [props.data.badgeStyle, props.data.badgeColor, props.data.badgeLabel])

  const blogPostPorkflow = () => {
    let payload = {
      dev: {
        show: props.data.devDynamicBlogs,
        username: props.social.dev,
      },
      medium: {
        show: props.data.mediumDynamicBlogs,
        username: props.social.medium,
      },
      rssurl: {
        show: props.data.rssDynamicBlogs,
        username: props.social.rssurl,
      },
    }
    var actionContent = latestBlogs(payload)
    var tempElement = document.createElement("a")
    tempElement.setAttribute(
      "href",
      "data:text/yaml;charset=utf-8," + encodeURIComponent(actionContent)
    )
    tempElement.setAttribute("download", "blog-post-workflow.yml")
    tempElement.style.display = "none"
    document.body.appendChild(tempElement)
    tempElement.click()
    document.body.removeChild(tempElement)
  }

  const onCustomizeClick = () => {
    setCustomizeOpen(!customizeBadgeOpen);
  }

  const onBadgeUpdate = (option, value) => {
    const callback = () => {
      let newVal = (option==='badgeLabel' && value==='')?'Profile views':value;
      setBadgeOptions({...badgeOptions, [option]: newVal});
      props.handleDataChange(option, {target: {value: newVal}})
    }
    clearTimeout(debounce);
    setDebounce(setTimeout(callback, 300));
  }
  return (
    <div className="flex justify-center items-start flex-col w-full px-2 sm:px-6 mb-10">
      <div className="text-xl sm:text-2xl font-bold font-title mt-2 mb-2">
        Add-ons
      </div>
      <AddonsItem
        inputId="visitors-count"
        inputChecked={props.data.visitorsBadge}
        onInputChange={() => props.handleCheckChange("visitorsBadge")}
        Icon={ customizeBadgeOpen ? XCircleIcon : ToolsIcon }
        onIconClick={onCustomizeClick}
      >
        display visitors count badge
      </AddonsItem>
      {
        customizeBadgeOpen?
          <CustomizeBadge 
            githubName={props.social.github} 
            badgeOptions={badgeOptions}
            onBadgeUpdate={onBadgeUpdate}
          />
        : ''
      }
      <AddonsItem
        inputId="github-stats"
        inputChecked={props.data.githubStats}
        onInputChange={() => props.handleCheckChange("githubStats")}
      >
        display github profile stats card
      </AddonsItem>
      <AddonsItem
        inputId="top-languages"
        inputChecked={props.data.topLanguages}
        onInputChange={() => props.handleCheckChange("topLanguages")}
      >
        display top skills
      </AddonsItem>
      <AddonsItem
        inputId="dev-dynamic-blogs"
        inputChecked={props.data.devDynamicBlogs}
        onInputChange={() => props.handleCheckChange("devDynamicBlogs")}
      >
        display latest dev.to blogs dynamically (GitHub Action)
      </AddonsItem>
      <AddonsItem
        inputId="medium-dynamic-blogs"
        inputChecked={props.data.mediumDynamicBlogs}
        onInputChange={() => props.handleCheckChange("mediumDynamicBlogs")}
      >
        display latest medium blogs dynamically (GitHub Action)
      </AddonsItem>
      <AddonsItem
        inputId="rss-dynamic-blogs"
        inputChecked={props.data.rssDynamicBlogs}
        onInputChange={() => props.handleCheckChange("rssDynamicBlogs")}
      >
        display latest blogs from your personal blog dynamically (GitHub Action)
      </AddonsItem>

      {(props.data.devDynamicBlogs && props.social.dev) ||
      (props.data.rssDynamicBlogs && props.social.rssurl) ||
      (props.data.mediumDynamicBlogs &&
        props.social.medium &&
        isMediumUsernameValid(props.social.medium)) ? (
        <div className="workflow">
          <div>
            download
            <span
              onClick={blogPostPorkflow}
              role="button"
              tabIndex="0"
              style={{ cursor: "pointer", color: "#002ead" }}
            >
              {" "}
              blog-post-workflow.yml
            </span>{" "}
            file(learn
            <a
              href={withPrefix(links.addons)}
              target="blank"
              style={{ color: "#002ead" }}
            >
              {" "}
              how to setup
            </a>
            )
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export default Addons
