import React from "react";
import { PrismicRichText } from "@prismicio/react";

const Cards = ({ slice }) => (
    <section>
        <PrismicRichText field={slice.primary.title} />
        <PrismicRichText field={slice.primary.description} />
    </section>
);

export default Cards;
