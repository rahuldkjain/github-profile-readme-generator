import React from "react"
import { withPrefix } from "gatsby"
import { latestBlogs } from "../utils/workflows"
import links from "../constants/page-links"
import { isMediumUsernameValid } from "../utils/validation"

const AddonsItem = ({inputId, inputChecked, onInputChange, ...props}) => {
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
      </div>
  )
}

const Addons = props => {
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
  return (
    <div className="flex justify-center items-start flex-col w-full px-2 sm:px-6 mb-10">
      <div className="text-xl sm:text-2xl font-bold font-title mt-2 mb-2">
        Add-ons
      </div>
      <AddonsItem
        inputId="visitors-count"
        inputChecked={props.data.visitorsBadge}
        onInputChange={() => props.handleCheckChange("visitorsBadge")}
      >
        display visitors count badge
      </AddonsItem>
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
