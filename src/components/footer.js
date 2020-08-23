import React from "react"
import links from "../constants/page-links"
import { Link } from "gatsby"

const Footer = () => {
  const footerList = [
    {
      route: links.about,
      name: "About",
    },
    {
      route: links.addons,
      name: "Addons",
    },
    {
      route: links.support,
      name: "Support",
    },
  ]

  return (
    <div className="footer">
      <div className="footer-pages">
        {footerList.map(item => (
          <div>
            <Link to={item.route} activeStyle={{ color: "#002ead" }}>
              {item.name}
            </Link>
          </div>
        ))}
      </div>

      <div className="footer-proud">
        Developed in India
        <span role="img" aria-label="india">
          🇮🇳
        </span>
      </div>
    </div>
  )
}
export default Footer
