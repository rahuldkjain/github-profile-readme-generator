import React, { useState, useEffect } from "react"
import { withPrefix } from "gatsby"
import { latestBlogs } from "../utils/workflows"
import links from "../constants/page-links"
import {
  isMediumUsernameValid,
  isGitHubUsernameValid,
} from "../utils/validation"
import { STATS_THEMES, STREAK_STATS_THEMES } from "../constants/options"
import { ToolsIcon, XCircleIcon } from "@primer/octicons-react"
import type {
  BadgeOptions,
  StatsType,
  StreakStatsType,
  ProfileInfo,
  ProfileDataHandle,
} from "../@types"

const AddonsItem = ({
  inputId,
  inputChecked,
  onInputChange,
  Options,
  children,
}: {
  inputId: string
  inputChecked: boolean
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  Options?: React.ReactElement
  children: React.ReactNode
}) => {
  const [open, setOpen] = useState(false)
  const Icon = open ? XCircleIcon : ToolsIcon

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
          <span className="pl-4">{children}</span>
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
  )
}

const CustomizeOptions = ({
  title,
  CustomizationOptions,
}: {
  title: string
  CustomizationOptions: React.ReactElement
}) => (
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
)

const CustomizeBadge = ({
  githubName,
  badgeOptions,
  onBadgeUpdate,
}: {
  githubName: string
  badgeOptions: BadgeOptions
  onBadgeUpdate: (key: keyof BadgeOptions, val: string) => void
}) => {
  return (
    <>
      <label htmlFor="badge-style">
        Style:&nbsp;
        <select
          id="badge-style"
          onChange={e => onBadgeUpdate("badgeStyle", e.target.value)}
          value={badgeOptions.badgeStyle}
        >
          <option value="flat">Flat</option>
          <option value="flat-square">Flat Square</option>
          <option value="plastic">Plastic</option>
        </select>
      </label>

      <label htmlFor="badge-color">
        Color:&nbsp;
        <input
          type="color"
          id="badge-color"
          defaultValue={`#${badgeOptions.badgeColor}`}
          className="w-6"
          onChange={e =>
            onBadgeUpdate("badgeColor", e.target.value.replace("#", ""))
          }
        />
      </label>

      <label htmlFor="badge-label-text">
        Label Text:&nbsp;
        <input
          type="text"
          id="badge-label-text"
          placeholder="Profile views"
          className="w-2/4 bg-gray-300 pl-2"
          onChange={e => onBadgeUpdate("badgeLabel", e.target.value.trim())}
          defaultValue={badgeOptions.badgeLabel}
        />
      </label>

      <span className="mt-2 flex items-center">
        Preview:&nbsp;
        {isGitHubUsernameValid(githubName) ? (
          <img
            src={
              `https://komarev.com/ghpvc/` +
              `?username=${githubName}` +
              `&label=${encodeURI(badgeOptions.badgeLabel)}` +
              `&color=${badgeOptions.badgeColor}` +
              `&style=${badgeOptions.badgeStyle}`
            }
          />
        ) : (
          <span className="text-xxs md:text-sm text-red-600">
            Invalid GitHub username
          </span>
        )}
      </span>
    </>
  )
}

const CustomizeGithubStatsBase = ({
  prefix,
  options,
  onUpdate,
}: {
  prefix: string
  options: StatsType
  onUpdate: (key: keyof StatsType, val: StatsType[keyof StatsType]) => void
}) => (
  <>
    <label htmlFor={`${prefix}-theme`}>
      Theme:&nbsp;
      <select
        id={`${prefix}-theme`}
        onChange={({ target: { value } }) => onUpdate("theme", value)}
        defaultValue={options.theme}
      >
        {Object.entries(STATS_THEMES).map(([val, name]) => {
          return (
            <option value={val} key={val}>
              {name}
            </option>
          )
        })}
      </select>
    </label>
    <label htmlFor={`${prefix}-title-color`}>
      Title Color:&nbsp;
      <input
        type="color"
        id={`${prefix}-title-color`}
        defaultValue={`#${options.titleColor}`}
        className="w-6"
        onChange={e => onUpdate("titleColor", e.target.value.replace("#", ""))}
      />
    </label>
    <label htmlFor={`${prefix}-text-color`}>
      Text Color:&nbsp;
      <input
        type="color"
        id={`${prefix}-text-color`}
        defaultValue={`#${options.textColor}`}
        className="w-6"
        onChange={e => onUpdate("textColor", e.target.value.replace("#", ""))}
      />
    </label>
    <label htmlFor={`${prefix}-bg-color`}>
      Background Color:&nbsp;
      <input
        type="color"
        id={`${prefix}-bg-color`}
        defaultValue={`#${options.bgColor}`}
        className="w-6"
        onChange={e => onUpdate("bgColor", e.target.value.replace("#", ""))}
      />
    </label>
    <label htmlFor={`${prefix}-hide-border`}>
      Hide border:&nbsp;
      <input
        id={`${prefix}-hide-border`}
        type="checkbox"
        checked={options.hideBorder}
        onChange={e => onUpdate("hideBorder", e.target.checked)}
      />
    </label>
    <label htmlFor={`${prefix}-cache-seconds`}>
      Cache Seconds:&nbsp;
      <input
        id={`${prefix}-cache-seconds`}
        type="number"
        min={1800}
        max={86400}
        placeholder="1800"
        defaultValue={options.cacheSeconds as number}
        onChange={e => onUpdate("cacheSeconds", e.target.value)}
      />
    </label>
    <label htmlFor={`${prefix}-locale`}>
      Locale:&nbsp;
      <input
        id={`${prefix}-locale`}
        type="text"
        placeholder="en"
        defaultValue={options.locale}
        onChange={e => onUpdate("locale", e.target.value)}
        size={2}
      />
    </label>
  </>
)

const CustomizeStreakStats = ({
  prefix,
  options,
  onUpdate,
}: {
  prefix: string
  options: StreakStatsType
  onUpdate: (
    key: keyof StreakStatsType,
    val: StreakStatsType[keyof StreakStatsType]
  ) => void
}) => (
  <>
    <label htmlFor={`${prefix}-theme`}>
      Theme:&nbsp;
      <select
        id={`${prefix}-theme`}
        onChange={({ target: { value } }) =>
          onUpdate("theme", value as StreakStatsType[keyof StreakStatsType])
        }
        defaultValue={options.theme}
      >
        {Object.entries(STREAK_STATS_THEMES).map(([val, name]) => {
          return (
            <option value={val} key={val}>
              {name}
            </option>
          )
        })}
      </select>
    </label>
  </>
)

const Addons = ({
  data,
  social,
  handleDataChange,
  handleCheckChange,
}: Pick<ProfileInfo, "social"> &
  ProfileDataHandle & { handleCheckChange: (key: string) => void }) => {
  const [debounce, setDebounce] = useState<NodeJS.Timeout | undefined>(
    undefined
  )
  const [badgeOptions, setBadgeOptions] = useState<BadgeOptions>({
    badgeStyle: data.badgeStyle,
    badgeColor: data.badgeColor,
    badgeLabel: data.badgeLabel,
  })

  useEffect(() => {
    setBadgeOptions({
      badgeStyle: data.badgeStyle,
      badgeColor: data.badgeColor,
      badgeLabel: data.badgeLabel,
    })
  }, [data.badgeStyle, data.badgeColor, data.badgeLabel])

  const [githubStatsOptions, setGithubStatsOptions] = useState({
    ...data.githubStatsOptions,
  })

  useEffect(() => {
    setGithubStatsOptions({
      ...data.githubStatsOptions,
    })
  }, [data.githubStatsOptions])

  const [topLanguagesOptions, setTopLanguagesOptions] = useState({
    ...data.topLanguagesOptions,
  })

  useEffect(() => {
    setTopLanguagesOptions({
      ...data.topLanguagesOptions,
    })
  }, [data.topLanguagesOptions])

  const [streakStatsOptions, setStreakStatsOptions] = useState({
    ...data.streakStatsOptions,
  })

  useEffect(() => {
    setStreakStatsOptions({
      ...data.streakStatsOptions,
    })
  }, [data.streakStatsOptions])

  const blogPostPorkflow = () => {
    const payload = {
      dev: {
        show: data.devDynamicBlogs,
        username: social.dev,
      },
      medium: {
        show: data.mediumDynamicBlogs,
        username: social.medium,
      },
      rssurl: {
        show: data.rssDynamicBlogs,
        username: social.rssurl,
      },
    }
    const actionContent = latestBlogs(payload)
    const tempElement = document.createElement("a")
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

  const onBadgeUpdate = (option: keyof ProfileInfo["data"], value: string) => {
    const callback = () => {
      const newVal =
        option === "badgeLabel" && value === "" ? "Profile views" : value
      setBadgeOptions({ ...badgeOptions, [option]: newVal })
      handleDataChange(option, {
        target: { value: newVal },
      } as React.ChangeEvent<HTMLInputElement>)
    }
    clearTimeout(debounce!)
    setDebounce(setTimeout(callback, 300))
  }

  const onStatsUpdate = (
    option: keyof StatsType,
    value: StatsType[keyof StatsType]
  ) => {
    const newStatsOptions = { ...githubStatsOptions, [option]: value }
    setGithubStatsOptions(newStatsOptions)
    handleDataChange("githubStatsOptions", ({
      target: { value: newStatsOptions },
    } as unknown) as React.ChangeEvent<HTMLInputElement>)
  }

  const onTopLangUpdate = (
    option: keyof StatsType,
    value: StatsType[keyof StatsType]
  ) => {
    const newLangOptions = { ...topLanguagesOptions, [option]: value }
    setTopLanguagesOptions(newLangOptions)
    handleDataChange("topLanguagesOptions", ({
      target: { value: newLangOptions },
    } as unknown) as React.ChangeEvent<HTMLInputElement>)
  }

  const onStreakStatsUpdate = (
    option: keyof StreakStatsType,
    value: StreakStatsType[keyof StreakStatsType]
  ) => {
    const newStreakStatsOptions = { ...streakStatsOptions, [option]: value }
    setStreakStatsOptions(newStreakStatsOptions)
    handleDataChange("streakStatsOptions", ({
      target: { value: newStreakStatsOptions },
    } as unknown) as React.ChangeEvent<HTMLInputElement>)
  }

  return (
    <div className="flex justify-center items-start flex-col w-full px-2 sm:px-6 mb-10">
      <div className="text-xl sm:text-2xl font-bold font-title mt-2 mb-2">
        Add-ons
      </div>
      <AddonsItem
        inputId="visitors-count"
        inputChecked={data.visitorsBadge}
        onInputChange={() => handleCheckChange("visitorsBadge")}
        Options={
          <CustomizeOptions
            title="Customize Badge"
            CustomizationOptions={
              <CustomizeBadge
                githubName={social.github}
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
        inputChecked={data.githubProfileTrophy}
        onInputChange={() => handleCheckChange("githubProfileTrophy")}
      >
        display github trophy
      </AddonsItem>
      <AddonsItem
        inputId="github-stats"
        inputChecked={data.githubStats}
        onInputChange={() => handleCheckChange("githubStats")}
        Options={
          <CustomizeOptions
            title="Customize Github Stats Card"
            CustomizationOptions={
              <CustomizeGithubStatsBase
                prefix="stats"
                options={githubStatsOptions as StatsType}
                onUpdate={onStatsUpdate}
              />
            }
          />
        }
      >
        display github profile stats card
      </AddonsItem>
      <AddonsItem
        inputId="top-languages"
        inputChecked={data.topLanguages}
        onInputChange={() => handleCheckChange("topLanguages")}
        Options={
          <CustomizeOptions
            title="Customize Top Skills Card"
            CustomizationOptions={
              <CustomizeGithubStatsBase
                prefix="top-lang"
                options={topLanguagesOptions as StatsType}
                onUpdate={onTopLangUpdate}
              />
            }
          />
        }
      >
        display top skills
      </AddonsItem>
      <AddonsItem
        inputId="streak-stats"
        inputChecked={data.streakStats}
        onInputChange={() => handleCheckChange("streakStats")}
        Options={
          <CustomizeOptions
            title="Customize Streak Stats Card"
            CustomizationOptions={
              <CustomizeStreakStats
                prefix="streak-stats"
                options={streakStatsOptions as StreakStatsType}
                onUpdate={onStreakStatsUpdate}
              />
            }
          />
        }
      >
        display github streak stats
      </AddonsItem>
      <AddonsItem
        inputId="twitter-badge"
        inputChecked={data.twitterBadge}
        onInputChange={() => handleCheckChange("twitterBadge")}
      >
        display twitter badge
      </AddonsItem>
      <AddonsItem
        inputId="dev-dynamic-blogs"
        inputChecked={data.devDynamicBlogs}
        onInputChange={() => handleCheckChange("devDynamicBlogs")}
      >
        display latest dev.to blogs dynamically (GitHub Action)
      </AddonsItem>
      <AddonsItem
        inputId="medium-dynamic-blogs"
        inputChecked={data.mediumDynamicBlogs}
        onInputChange={() => handleCheckChange("mediumDynamicBlogs")}
      >
        display latest medium blogs dynamically (GitHub Action)
      </AddonsItem>
      <AddonsItem
        inputId="rss-dynamic-blogs"
        inputChecked={data.rssDynamicBlogs}
        onInputChange={() => handleCheckChange("rssDynamicBlogs")}
      >
        display latest blogs from your personal blog dynamically (GitHub Action)
      </AddonsItem>

      {(data.devDynamicBlogs && social.dev) ||
      (data.rssDynamicBlogs && social.rssurl) ||
      (data.mediumDynamicBlogs &&
        social.medium &&
        isMediumUsernameValid(social.medium)) ? (
        <div className="workflow">
          <div>
            download
            <span
              id="blog-post-worklow-span"
              onClick={blogPostPorkflow}
              onKeyDown={e => e.keyCode === 13 && blogPostPorkflow()}
              role="button"
              tabIndex={0}
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
