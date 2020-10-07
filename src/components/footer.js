import React from "react"
import links from "../constants/page-links"
import logo from "../images/mdg.png"
import discord from "../images/Discord-Logo.png"
import { Link } from "gatsby"
const Footer = () => {
  return (
    <div className="bg-gray-100 p-4 flex flex-col justify-center items-center shadow-inner mt-2">
      <div className="w-full flex justify-evenly py-2">
        <div className="mr-6">
          <h1 className="text-base font-bold font-title sm:text-2xl flex-col items-end">
            <img
              src={logo}
              className="h-24"
              alt="github profile markdown generator logo"
            />
            GitHub Profile README Generator
          </h1>
        </div>
        <div>
          <div className="mb-2 font-bold font-medium font-title">
            <strong>Pages</strong>
          </div>
          <div>
            <Link to={links.addons} activeStyle={{ color: "#002ead" }}>
              Addons
            </Link>
          </div>
          <div>
            <Link to={links.support} activeStyle={{ color: "#002ead" }}>
              Support
            </Link>
          </div>
          <div>
            <Link to={links.about} activeStyle={{ color: "#002ead" }}>
              About
            </Link>
          </div>
        </div>
        <div>
          <div className="mb-2 font-bold font-medium font-title">
            <strong>More</strong>
          </div>
          <div>
            <a
              href="https://github.com/rahuldkjain/github-profile-readme-generator"
              aria-label="Github rahuldkjain/github-profile-readme-generator"
              target="blank"
            >
              Github
            </a>
          </div>
          <div>
            <a
              href="https://github.com/rahuldkjain/github-profile-readme-generator/releases"
              aria-label="Releases on Github rahuldkjain/github-profile-readme-generator"
              target="blank"
            >
              Releases
            </a>
          </div>
        </div>
        <div>
          <div className="mb-2 font-bold font-medium font-title">
            <strong>Community</strong>
          </div>
          <div>
            <a
              href="https://discord.gg/HHMs7Eg"
              aria-label="Discord of the community"
              target="blank"
            >
              <img
                src={discord}
                className="h-12"
                alt="Discord of the community"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="py-2 mt-2">
        Developed in India{" "}
        <span role="img" aria-label="india">
          {" "}
          🇮🇳
        </span>
      </div>
    </div>
  )
}
export default Footer
