import React, { useState } from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Img, { FixedObject } from "gatsby-image";
import { MdMenu } from "react-icons/md";
import {
  ButtonTooltip,
  Props as ButtonTooltipProps,
} from "./ButtonTooltip/ButtonTooltip";
import { SideNavbar } from "./SideNavbar/SideNavbar";
import { FeaturedEvent } from "@/types";
import "./Navbar.styled.css";

export enum LinkVariant {
  Red = "red",
  Black = "black",
}

export const getLinkClasses = (variant: LinkVariant): String => {
  if (variant == LinkVariant.Red) {
    return "hover:text-black text-red-500";
  } else if (variant == LinkVariant.Black) {
    return "hover:text-red-500 text-black";
  } else {
    return "";
  }
};

export const getButtonClasses = (variant: LinkVariant): String => {
  if (variant == LinkVariant.Red) {
    return "text-red-500";
  } else if (variant == LinkVariant.Black) {
    return "text-black";
  } else {
    return "";
  }
};

export interface Props {
  logoPath: string;
  navbarLinks: Array<{
    displayName: string;
    variant: LinkVariant;
    path: string;
  }>;
  navbarButtons: Array<{
    isTooltip: boolean;
    displayName: string;
    variant: LinkVariant;
    path: string;
    tooltipContents: ButtonTooltipProps["contents"];
  }>;
  featuredEvent: FeaturedEvent;
}

export const NavbarTemplate = (props: Props) => {
  const { logoPath, navbarButtons, featuredEvent } = props;
  var { navbarLinks } = props;
  const [sideOpen, setSideOpen] = useState(false);
  navbarLinks = featuredEvent.show
    ? [
        {
          displayName: featuredEvent.displayName,
          variant: LinkVariant.Black,
          path: `/event/${featuredEvent.slug}`,
        },
        ...navbarLinks,
      ]
    : navbarLinks;

  return (
    <>
      <header className="seamless-grid h-16 shadow">
        <div className="col-span-full flex flex-row items-center justify-center pl-6">
          <div className="flex flex-row items-center h-full w-full justify-between">
            <Link to="/" className="h-10 flex flex-row items-center">
              <img className="h-full" src={logoPath} alt="Logo" />
            </Link>
            <div className="h-full hidden lg:flex flex-row items-center uppercase font-semibold navbar-links">
              {navbarLinks.map((link, idx) => (
                <Link
                  className={`h-full flex flex-row items-center mr-10 
                      ${getLinkClasses(link.variant)}`}
                  key={idx}
                  to={link.path}
                >
                  {link.displayName}
                </Link>
              ))}
              <div className="flex flex-row items-center h-full last:border-r">
                {navbarButtons.map((button, idx) =>
                  button.isTooltip ? (
                    <ButtonTooltip
                      displayName={button.displayName}
                      variant={button.variant}
                      contents={button.tooltipContents}
                      key={idx}
                    />
                  ) : (
                    <Link
                      className={`h-full flex flex-row items-center border-gray-200 hover:bg-gray-200
                      border-l px-6 ${getButtonClasses(button.variant)}`}
                      to={button.path}
                      key={idx}
                    >
                      {button.displayName}
                    </Link>
                  )
                )}
              </div>
            </div>
            <button
              className="h-full flex items-center lg:hidden"
              onClick={() => setSideOpen(true)}
            >
              <MdMenu className="h-8 w-8 text-red-500" />
            </button>
          </div>
        </div>
        <SideNavbar
          {...props}
          navbarLinks={navbarLinks}
          open={sideOpen}
          setOpen={setSideOpen}
          logoPath={logoPath}
        />
      </header>
    </>
  );
};

export const Navbar = () => (
  <StaticQuery
    query={componentQuery}
    render={(data) => (
      <NavbarTemplate
        logoPath={data.file.publicURL}
        navbarLinks={data.globalYaml.navbarLinks}
        navbarButtons={data.globalYaml.navbarButtons}
        featuredEvent={data.featuredEventYaml}
      />
    )}
  />
);

const componentQuery = graphql`
  query Navbar {
    file(relativePath: { eq: "images/uploads/logo.svg" }) {
      publicURL
    }
    globalYaml(collectionId: { eq: "navbar" }) {
      navbarLinks {
        displayName
        variant
        path
      }
      navbarButtons {
        displayName
        variant
        path
        isTooltip
        tooltipContents {
          title
          description
          path
        }
      }
    }
    featuredEventYaml(collectionId: { eq: "featuredEvent" }) {
      displayName
      show
      slug
    }
  }
`;
