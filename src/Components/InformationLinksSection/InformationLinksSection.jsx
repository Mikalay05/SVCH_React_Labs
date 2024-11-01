import React from "react";

import "./InformationLinksSection.css";

import ImgLink from "../ImgLink/ImgLink";
import ButtonLink from "../ButtonLink/ButtonLink";
import ItemListLinkLI from "../ItemListLI/ItemListLinkLI";
import ListUL from "../ListUL/ListUL";

// import LinksButton from '../../Json/linksButtonInHeader.json'

export default function InformationLinksSection() {
  const data = [
    {
      name: "Pricing",
      link: "",
    },
    {
      name: "Solutions",
      link: "",
    },
    {
      name: "Demo ",
      link: "",
    },
    {
      name: "Products",
      link: "",
    },
    {
      name: "Services",
      link: "",
    },
    {
      name: "Resources",
      link: "",
    },
  ];

  const resultLinksButton = data.map((element, index) => {
    return (
      <ItemListLinkLI
        key={index}
        className="content-link"
        text={element.name}
        link={element.link}
      />
    );
  });

  return (
    <div className="content-nav-div">
      <ImgLink idImg="LogoId" pathImg="/Img/logo-zendesk.png" w="50px" h="50px"/>
      <ListUL className="links-button">
        {resultLinksButton}
        <ButtonLink text="Get started" bc=" rgba(23, 73, 77, 1)" />
      </ListUL>
    </div>
  );
}
