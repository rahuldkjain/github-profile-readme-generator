import React from "react"

const Social = props => {
  const socialListInputs = [
    {
      key: "github",
      placeholder: "github username",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg",
    },
    {
      key: "twitter",
      placeholder: "twitter username",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg",
    },
    {
      key: "dev",
      placeholder: "dev.to username",
      icon:
        "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/dev-dot-to.svg",
    },
    {
      key: "codepen",
      placeholder: "codepen username",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codepen.svg",
    },
    {
      key: "codesandbox",
      placeholder: "codesandbox username",
      icon:
        "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codesandbox.svg",
    },
    {
      key: "stackoverflow",
      placeholder: "stackoverflow user ID",
      icon:
        "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/stackoverflow.svg",
    },
    {
      key: "linkedin",
      placeholder: "linkedin username",
      icon:
        "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg",
    },
    {
      key: "kaggle",
      placeholder: "kaggle username",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/kaggle.svg",
    },
    {
      key: "fb",
      placeholder: "facebook username",
      icon:
        "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg",
    },
    {
      key: "instagram",
      placeholder: "instagram username",
      icon:
        "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg",
    },
    {
      key: "dribbble",
      placeholder: "dribbble username",
      icon:
        "https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/dribbble.svg",
    },
    {
      key: "behance",
      placeholder: "behance username",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/behance.svg",
    },
    {
      key: "medium",
      placeholder: "medium username (with @)",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/medium.svg",
    },
    {
      key: "youtube",
      placeholder: "youtube channel name",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/youtube.svg",
    },
  ]

  return (
    <div className="section">
      <div className="section-title">Social</div>

      {socialListInputs.map(item => (
        <div className="container" key={item.key}>
          <img src={item.icon} className="icon" alt={item.key} />
          <input
            id={item.key}
            placeholder={item.placeholder}
            className="inputField lg"
            value={props.social[item.key]}
            onChange={event => props.handleSocialChange(item.key, event)}
          />
        </div>
      ))}
    </div>
  )
}

export default Social
