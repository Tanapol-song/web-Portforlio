"use clinet";

import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

const socials = [
    {
        icon: <FaGithub />,
        path: "",
    },
    {
        icon: <FaFacebook />,
        path: "https://www.facebook.com/tanapol.chaijaroen.5",
    },
    {
        icon: <FaInstagram />,
        path: "https://www.instagram.com/_song.tc/",
    },
]

const Socials = ({iconStyles}) => {
    return (
        <div className="flex gap-6">
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles} target="_blank">
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    )
}

export default Socials