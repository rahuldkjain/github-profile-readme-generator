import React from "react"
const Donate = () => {
  return (
    <>
      <div className="text-center text-4xl my-2">Support&nbsp;
        <span role="img" aria-label="praying hand emoji">🙏</span>
      </div>
      <div className="flex flex-col sm:flex-row items-start justify-between">
        <div className="w-full sm:w-2/3">
          <div className="text-2xl mb-2">
            Are you using the tool and happy with it to create your GitHub
            Profile?
          </div>
          <div className="text-lg">
            Your kind support keeps open-source tools like this free for others.
          </div>
          <div className="mt-4">
            <a
              className="flex items-center justify-start w-20"
              href="https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Frahuldkjain.github.io%2Fgithub-profile-readme-generator"
            >
              <img
                className="w-20"
                src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Frahuldkjain.github.io%2Fgithub-profile-readme-generator"
                alt="tweet github profile readme generator"
              />
            </a>
            Let the world know how you feel using this tool. Share with others
            on twitter.
          </div>
        </div>
        <div className="w-full sm:w-1/3 flex flex-col justify-center items-center">
          <span>Tip<span role="img" aria-label="Dollar medal">💰</span></span>
          {/* Ko-Fi */}
          <a
            href="https://ko-fi.com/A0A81XXSX"
            className="flex items-center justify-evenly bg-red-500 text-white py-2 px-4 my-2"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-6 h-6 mr-2"
              src="https://www.vectorlogo.zone/logos/ko-fi/ko-fi-icon.svg"
              alt="Buy ko-fi for rahuldkjain"
            />
            Buy me a ko-fi
          </a>
          {/* Paypal */}
          <a
            href="https://www.paypal.me/rahuldkjain/10"
            className="flex items-center justify-evenly bg-white-500 text-white py-2 px-4 my-2 border border-solid"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-32 h-4"
              src="https://cdn.worldvectorlogo.com/logos/paypal-2.svg"
              alt="Donate rahuldkjain via paypal"
            />
            {/* <img
              className="w-6 h-6 mr-2"
              src="https://www.vectorlogo.zone/logos/paypal/paypal-ar21.svg"
              alt="Donate rahuldkjain via paypal"
            />
            Paypal */}
          </a>
          {/* BuyMeACoffee */}
          <a
            href="https://www.buymeacoffee.com/rahuldkjain"
            className="flex items-center justify-evenly bg-orange-500 text-white py-2 px-4 my-2"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-6 h-6 mr-2"
              src="https://www.vectorlogo.zone/logos/buymeacoffee/buymeacoffee-icon.svg"
              alt="Buy rahuldkjain A Coffee"
            />
            Buy me a coffee
          </a>
        </div>
      </div>
    </>
  )
}

export default Donate
