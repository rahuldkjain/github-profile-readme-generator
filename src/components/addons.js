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
            id={`${inputId}-open-btn`}
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

const CustomizeGithubStatsBase = ({ prefix, options, onUpdate }) =>
    <>
      <label htmlFor={`${prefix}-theme`}>Theme:&nbsp;
        <select
          id={`${prefix}-theme`}
          onChange={({target: { value }}) => onUpdate("theme", value)}
          defaultValue={options.theme}
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
      <label htmlFor={`${prefix}-title-color`}>Title Color:&nbsp;
        <input
          type="color"
          id={`${prefix}-title-color`}
          defaultValue={`#${options.titleColor}`}
          className="w-6"
          onChange={(e) => onUpdate('titleColor', e.target.value.replace('#', ''))}
        />
      </label>
      <label htmlFor={`${prefix}-text-color`}>Text Color:&nbsp;
        <input
          type="color"
          id={`${prefix}-text-color`}
          defaultValue={`#${options.textColor}`}
          className="w-6"
          onChange={(e) => onUpdate('textColor', e.target.value.replace('#', ''))}
        />
      </label>
      <label htmlFor={`${prefix}-bg-color`}>Background Color:&nbsp;
        <input
          type="color"
          id={`${prefix}-bg-color`}
          defaultValue={`#${options.bgColor}`}
          className="w-6"
          onChange={(e) => onUpdate('bgColor', e.target.value.replace('#', ''))}
        />
      </label>
      <label htmlFor={`${prefix}-hide-border`}>Hide border:&nbsp;
        <input
          id={`${prefix}-hide-border`}
          type="checkbox"
          checked={options.hideBorder}
          onChange={(e) => onUpdate('hideBorder', e.target.checked)}
        />
      </label>
      <label htmlFor={`${prefix}-cache-seconds`}>Cache Seconds:&nbsp;
        <input
          id={`${prefix}-cache-seconds`}
          type="number"
          min={1800}
          max={86400}
          placeholder={1800}
          defaultValue={options.cacheSeconds}
          onChange={(e) => onUpdate('cacheSeconds', e.target.value)}
        />
      </label>
      <label htmlFor={`${prefix}-locale`}>Locale:&nbsp;
        <input
          id={`${prefix}-locale`}
          type="text"
          placeholder="en"
          defaultValue={options.locale}
          onChange={(e) => onUpdate('locale', e.target.value)}
          size="2"
        />
      </label>
    </>

const CustomizeStreakStats = ({ prefix, options, onUpdate }) => (
  <>
    <label htmlFor={`${prefix}-theme`}>
      Theme:&nbsp;
      <select
        id={`${prefix}-theme`}
        onChange={({ target: { value } }) => onUpdate("theme", value)}
        defaultValue={options.theme}
      >
        <option value="default">default</option>
        <option value="dark">dark</option>
        <option value="highcontrast">highcontrast</option>
      </select>
    </label>
  </>
)

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

  const [topLanguagesOptions, setTopLanguagesOptions] = useState({
    ...props.data.topLanguagesOptions,
  });

  useEffect(() => {
    setTopLanguagesOptions({
      ...props.data.topLanguagesOptions
    })
  }, [props.data.topLanguagesOptions])

  const [streakStatsOptions, setStreakStatsOptions] = useState({
    ...props.data.streakStatsOptions,
  });

  useEffect(() => {
    setStreakStatsOptions({
      ...props.data.streakStatsOptions
    })
  }, [props.data.streakStatsOptions])

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

  const onTopLangUpdate = (option, value) => {
    const newLangOptions = {...topLanguagesOptions, [option]: value}
    setTopLanguagesOptions(newLangOptions)
    props.handleDataChange("topLanguagesOptions", {target: {value: newLangOptions}})
  }

  const onStreakStatsUpdate = (option, value) => {
    const newStreakStatsOptions = {...streakStatsOptions, [option]: value}
    setStreakStatsOptions(newStreakStatsOptions)
    props.handleDataChange("streakStatsOptions", {target: {value: newStreakStatsOptions}})
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
          <CustomizeGithubStatsBase prefix="stats" options={githubStatsOptions} onUpdate={onStatsUpdate}/>
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
        Options={
          <CustomizeOptions
            title="Customize Top Skills Card"
            CustomizationOptions={
            <CustomizeGithubStatsBase prefix="top-lang" options={topLanguagesOptions} onUpdate={onTopLangUpdate}/>
            }
          />
        }
      >
        display top skills
      </AddonsItem>
      <AddonsItem
        inputId="streak-stats"
        inputChecked={props.data.streakStats}
        onInputChange={() => props.handleCheckChange("streakStats")}
        Options={
          <CustomizeOptions
            title="Customize Streak Stats Card"
            CustomizationOptions={
            <CustomizeStreakStats prefix="streak-stats" options={streakStatsOptions} onUpdate={onStreakStatsUpdate}/>
            }
          />
        }
      >
        display github streak stats
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
              id="blog-post-worklow-span"
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
