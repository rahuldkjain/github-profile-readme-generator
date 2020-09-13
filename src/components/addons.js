import React from "react"
import { withPrefix } from "gatsby"
import { latestBlogs } from "../utils/workflows"
import links from "../constants/page-links"
import { isMediumUsernameValid } from "../utils/validation"
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
      <div className="py-2 flex justify-start items-center text-sm sm:text-lg">
        <label htmlFor="visitors-count" className="cursor-pointer">
          <input
            type="checkbox"
            id="visitors-count"
            checked={props.data.visitorsBadge}
            onChange={event => props.handleCheckChange("visitorsBadge")}
          />
          &nbsp; display visitors count badge
        </label>
      </div>
      <div className="py-2 flex justify-start items-center text-sm sm:text-lg">
        <label htmlFor="github-stats" className="cursor-pointer">
          <input
            id="github-stats"
            type="checkbox"
            checked={props.data.githubStats}
            onChange={event => props.handleCheckChange("githubStats")}
          />
          &nbsp; display github profile stats card
        </label>
      </div>
      <div className="py-2 flex justify-start items-center text-sm sm:text-lg">
        <label htmlFor="top-languages" className="cursor-pointer">
          <input
            id="top-languages"
            type="checkbox"
            checked={props.data.topLanguages}
            onChange={event => props.handleCheckChange("topLanguages")}
          />
          &nbsp; display top skills
        </label>
      </div>
      <div className="py-2 flex justify-start items-center text-sm sm:text-lg">
        <label htmlFor="dev-dynamic-blogs" className="cursor-pointer">
          <input
            id="dev-dynamic-blogs"
            type="checkbox"
            checked={props.data.devDynamicBlogs}
            onChange={event => props.handleCheckChange("devDynamicBlogs")}
          />
          &nbsp; display latest dev.to blogs dynamically (GitHub Action)
        </label>
      </div>
      <div className="py-2 flex justify-start items-center text-sm sm:text-lg">
        <label htmlFor="medium-dynamic-blogs" className="cursor-pointer">
          <input
            id="medium-dynamic-blogs"
            type="checkbox"
            checked={props.data.mediumDynamicBlogs}
            onChange={event => props.handleCheckChange("mediumDynamicBlogs")}
          />
          &nbsp; display latest medium blogs dynamically (GitHub Action)
        </label>
      </div>
      <div className="py-2 flex justify-start items-center text-sm sm:text-lg">
        <label htmlFor="rss-dynamic-blogs" className="cursor-pointer">
          <input
            id="rss-dynamic-blogs"
            type="checkbox"
            checked={props.data.rssDynamicBlogs}
            onChange={event => props.handleCheckChange("rssDynamicBlogs")}
          />
          &nbsp; display latest blogs from your personal blog dynamically
          (GitHub Action)
        </label>
      </div>

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
