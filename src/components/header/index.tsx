import React, { useMemo, Fragment, useState } from "react";
import Link from "next/link";

import { PrismicLink, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { Center } from "@chakra-ui/react";
import * as Icon from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import { Logo } from "@components";

interface HeaderProps {
    navigation: any;
    logo: any;
    site_name: any;
    social_media: any;
}

export const Header: React.FC = ({
    navigation,
    logo,
    site_name,
    social_media,
}: HeaderProps) => {
    return <header></header>;
};
