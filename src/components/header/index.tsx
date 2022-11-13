import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MyButton } from "@components/button";
import Style from "./style.module.scss";

import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

import { FilledLink } from "@customtypes/common";
import { NavigationDocument } from "@customtypes/rest";
import { ImageField } from "@prismicio/types";
import { isFilled } from "@prismicio/helpers";
import { linkResolver } from "prismicio";

interface HeaderProps {
    navigation: NavigationDocument;
    logo: ImageField;
}

export const Header: React.FC<HeaderProps> = ({ navigation, logo }) => {
    const [showMenu, setShowMenu] = useState(false);
    const toggle = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className={`${Style.navWrapper}`}>
            <div className={`${Style.navMain}`}>
                {/* < -- DESKTOP LOGO -- > */}
                <div className={`${Style.logoContainer}`}>
                    <div className={`${Style.logo}`}>
                        {isFilled.image(logo) && (
                            <Link href="/" passHref>
                                <a onClick={() => setShowMenu(false)}>
                                    <Image
                                        src={logo.url}
                                        alt={logo.alt ?? "logo"}
                                        layout="fill"
                                    />
                                </a>
                            </Link>
                        )}
                    </div>
                </div>
                {/* < -- MOBILE Burger Button -- > */}
                <div className={`${Style.SideNav}`}>
                    <div className={`${Style.navBurger}`}>
                        <button onClick={() => toggle()}>
                            {showMenu ? (
                                <IoClose size={36} color="white" />
                            ) : (
                                <BiMenu size={40} color="white" />
                            )}
                        </button>
                    </div>
                    {/* < -- MOBILE Nav Header -- > */}
                    <nav
                        className={`${Style.navCollapse} ${
                            showMenu && Style.ShowMenu
                        }`}
                    >
                        <ul>
                            {navigation?.data.links.map((navItem, i) => (
                                <li key={i} onClick={() => setShowMenu(false)}>
                                    <Link
                                        href={linkResolver(
                                            navItem.link as FilledLink,
                                        )}
                                        passHref
                                        prefetch={false}
                                    >
                                        <a>{navItem.label}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    {/* < -- DESKTOP Action Buttons -- > */}
                    <div className={`${Style.navAction}`}>
                        {navigation?.data.action_group.map((navItem, i) =>
                            navItem.button_shape ? (
                                <MyButton
                                    key={i}
                                    link={navItem.button_url}
                                    variant={navItem.button_shape}
                                >
                                    {navItem.button_label}
                                </MyButton>
                            ) : (
                                <Link
                                    key={i}
                                    href={linkResolver(
                                        navItem.button_url as FilledLink,
                                    )}
                                    passHref
                                    prefetch={false}
                                >
                                    <a>{navItem.button_label}</a>
                                </Link>
                            ),
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};
