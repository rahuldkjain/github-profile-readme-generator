import React, { useState, useEffect } from "react"
import { withPrefix } from "gatsby"
import { latestBlogs } from "../utils/workflows"
import links from "../constants/page-links"
import { isMediumUsernameValid, isGitHubUsernameValid } from "../utils/validation"
import { ToolsIcon, XCircleIcon } from "@primer/octicons-react";

const AddonsItem = ({ inputId, inputChecked, onInputChange, Options, onIconClick, ...props }) => {
  const [open, setOpen] = useState(false);
  const Icon = open ? XCircleIcon : ToolsIcon;

  return (
    <>
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
        {Options && (
          <button
            onClick={() => setOpen(!open)}
            className="flex ml-3 focus:bg-gray-400"
            style={{ outline: "none" }}
          >
            <Icon className="transform scale-100 md:scale-125" />
          </button>
        )}
      </div>
      {Options && open && Options}
    </>
  );
};

const CustomizeOptions = ({ title, CustomizationOptions }) => (
  <div
    className={`border-2 border-solid border-gray-900 bg-gray-100 p-2 ml-8`}
    style={{ maxWidth: "21rem" }}
  >
    <header className="text-base sm:text-lg">{title}</header>
    <hr className="border-gray-500" />
    <div className="text-sm sm:text-lg flex flex-col mt-2 ml-0 md:ml-4">
      {CustomizationOptions}
    </div>
  </div>
);


const CustomizeBadge = ({githubName, badgeOptions, onBadgeUpdate}) =>  {
  return (
    <>
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
            className="w-2/4 bg-gray-300 pl-2"
            onChange={(e) => onBadgeUpdate('badgeLabel', e.target.value.trim())}
            defaultValue={badgeOptions.badgeLabel}
          />
        </label>
        
        <span className="mt-2 flex items-center">
          Preview:&nbsp;
          {
            isGitHubUsernameValid(githubName)?
              <img 
                src={`https://komarev.com/ghpvc/`
                    + `?username=${githubName}`
                    + `&label=${encodeURI(badgeOptions.badgeLabel)}`
                    + `&color=${badgeOptions.badgeColor}`
                    + `&style=${badgeOptions.badgeStyle}`
                    }
              />
            : <span className="text-xxs md:text-sm text-red-600">Invalid GitHub username</span>
          }
          
        </span>
    </>
  )
}

const CustomizeGithubStats = ({ githubStatsOptions, onStatsUpdate }) => {
  return (
    <>
      <label htmlFor="github-stats-theme">Theme:&nbsp;
        <select
          id="github-stats-theme"
          onChange={({target: { value }}) => onStatsUpdate("theme", value)}
          value={githubStatsOptions.theme}
        >
          <option value="none">none</option>
          <option value="dark">Dark</option>
          <option value="radical">Radical</option>
          <option value="merko">Merko</option>
          <option value="gruvbox">Gruvbox</option>
          <option value="tokyonight">Tokyonight</option>
          <option value="onedark">Onedark</option>
          <option value="cobalt">Cobalt</option>
          <option value="synthwave">Synthwave</option>
          <option value="highcontrast">Highcontrast</option>
          <option value="dracula">Dracula</option>
        </select>
      </label>
      <label htmlFor="github-stats-title-color">Title Color:&nbsp;
        <input
          type="color"
          id="github-stats-title-color"
          defaultValue={`#${githubStatsOptions.titleColor}`}
          className="w-6"
          onChange={(e) => onStatsUpdate('titleColor', e.target.value.replace('#', ''))}
        />
      </label>
      <label htmlFor="github-stats-text-color">Text Color:&nbsp;
        <input
          type="color"
          id="github-stats-text-color"
          defaultValue={`#${githubStatsOptions.textColor}`}
          className="w-6"
          onChange={(e) => onStatsUpdate('textColor', e.target.value.replace('#', ''))}
        />
      </label>
      <label htmlFor="github-stats-bg-color">Background Color:&nbsp;
        <input
          type="color"
          id="github-stats-bg-color"
          defaultValue={`#${githubStatsOptions.bgColor}`}
          className="w-6"
          onChange={(e) => onStatsUpdate('bgColor', e.target.value.replace('#', ''))}
        />
      </label>
      <label htmlFor="github-stats-hide-border">Hide border:&nbsp;
        <input
          id="github-stats-hide-border"
          type="checkbox"
          checked={githubStatsOptions.hideBorder}
          onChange={(e) => onStatsUpdate('hideBorder', e.target.checked)}
        />
      </label>
      <label htmlFor="github-stats-cache-seconds">Cache Seconds:&nbsp;
        <input
          id="github-stats-cache-seconds"
          type="number"
          min={1800}
          max={86400}
          placeholder={1800}
          onChange={(e) => onStatsUpdate('cacheSeconds', e.target.value)}
        />
      </label>
      <label htmlFor="github-stats-locale">Locale:&nbsp;
        <input
          id="github-stats-locale"
          type="text"
          placeholder="en"
          onChange={(e) => onStatsUpdate('locale', e.target.value)}
          size="2"
        />
      </label>
    </>
  )
}

const Addons = props => {
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

  const [githubStatsOptions, setGithubStatsOptions] = useState({
    ...props.data.githubStatsOptions,
  });

  useEffect(() => {
    setGithubStatsOptions({
      ...props.data.githubStatsOptions
    })
  }, [props.data.githubStatsOptions])

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

  const onBadgeUpdate = (option, value) => {
    const callback = () => {
      let newVal = (option==='badgeLabel' && value==='')?'Profile views':value;
      setBadgeOptions({...badgeOptions, [option]: newVal});
      props.handleDataChange(option, {target: {value: newVal}})
    }
    clearTimeout(debounce);
    setDebounce(setTimeout(callback, 300));
  }

  const onStatsUpdate = (option, value) => {
    const newStatsOptions = {...githubStatsOptions, [option]: value}
    setGithubStatsOptions(newStatsOptions)
    props.handleDataChange("githubStatsOptions", {target: {value: newStatsOptions}})
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
        Options={
          <CustomizeOptions
            title="Customize Badge"
            CustomizationOptions={
              <CustomizeBadge
                githubName={props.social.github} 
                badgeOptions={badgeOptions}
                onBadgeUpdate={onBadgeUpdate}
              />
            }
          />
        }
      >
        display visitors count badge
      </AddonsItem>
      <AddonsItem
        inputId="github-profile-trophy"
        inputChecked={props.data.githubProfileTrophy}
        onInputChange={() => props.handleCheckChange("githubProfileTrophy")}
      >
        display github trophy
      </AddonsItem>
      <AddonsItem
        inputId="github-stats"
        inputChecked={props.data.githubStats}
        onInputChange={() => props.handleCheckChange("githubStats")}
        Options={
          <CustomizeOptions
            title="Customize Github Stats Card"
            CustomizationOptions={
          <CustomizeGithubStats githubStatsOptions={githubStatsOptions} onStatsUpdate={onStatsUpdate}/>
            }
          />
        }
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
        inputId="twitter-badge"
        inputChecked={props.data.twitterBadge}
        onInputChange={() => props.handleCheckChange("twitterBadge")}
      >
        display twitter badge
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
              onKeyDown={(e) => e.keyCode === 13 && blogPostPorkflow()}
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
