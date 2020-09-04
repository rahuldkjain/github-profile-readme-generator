import React from 'react';
import links from '../constants/page-links'
import { Link } from 'gatsby'
const Footer = () => {
    return (
        <div className="bg-gray-100 p-4 flex flex-col justify-center items-center shadow-inner mt-2">
            <div className="w-full flex justify-evenly items-center py-2 text-orange-500">
                <div>
                    <Link to={links.about} activeStyle={{ color: "#002ead" }}>
                        About
                    </Link>
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
            </div>
            <div className="py-2">
                Developed in India <span role="img" aria-label="india"> 🇮🇳</span>
            </div>
        </div>
    )
}
export default Footer;