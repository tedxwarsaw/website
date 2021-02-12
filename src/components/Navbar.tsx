import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Img, { FixedObject } from "gatsby-image";

enum LinkVariant {
  Red = "red",
  Black = "black",
}

const getLinkClasses = (variant: LinkVariant): String => {
  if (variant == LinkVariant.Red) {
    return "hover:text-black text-red-500";
  } else if (variant == LinkVariant.Black) {
    return "hover:text-red-500 text-black";
  } else {
    return "";
  }
};

const getButtonClasses = (variant: LinkVariant): String => {
  if (variant == LinkVariant.Red) {
    return "text-red-500";
  } else if (variant == LinkVariant.Black) {
    return "text-black";
  } else {
    return "";
  }
};

export interface Props {
  imgFixed: FixedObject;
  navbarLinks: Array<{
    displayName: string;
    variant: LinkVariant;
    path: string;
  }>;
  navbarButtons: Array<{
    displayName: string;
    variant: LinkVariant;
    path: string;
  }>;
}

export const NavbarTemplate = ({
  imgFixed,
  navbarLinks,
  navbarButtons,
}: Props) => (
  <header className="flex flex-row items-center justify-between pl-4 h-16 shadow">
    <Link to="/" className="h-full flex flex-row items-center">
      <Img fixed={imgFixed} alt="Site logo" />
    </Link>
    <div
      className={`h-full hidden lg:flex flex-row items-center uppercase font-bold
                  tracking-wide`}
    >
      {navbarLinks.map((link) => (
        <Link
          className={`${getLinkClasses(link.variant)} pr-10`}
          to={link.path}
        >
          {link.displayName}
        </Link>
      ))}
      {navbarButtons.map((button) => (
        <Link
          className={`h-full flex flex-row items-center border-gray-200 hover:bg-gray-200
                      border-l px-6 ${getButtonClasses(button.variant)}`}
          to={button.path}
        >
          {button.displayName}
        </Link>
      ))}
    </div>
  </header>
);

export const Navbar = () => (
  <StaticQuery
    query={componentQuery}
    render={(data) => (
      <NavbarTemplate
        imgFixed={data.file.childImageSharp.fixed}
        navbarLinks={data.allGlobalYaml.nodes
          .map((node) => node.navbarLinks)
          .flat(1)}
        navbarButtons={data.allGlobalYaml.nodes
          .map((node) => node.navbarButtons)
          .flat(1)}
      />
    )}
  />
);

const componentQuery = graphql`
  query Navbar {
    file(relativePath: { eq: "images/uploads/logo.png" }) {
      childImageSharp {
        fixed(height: 32) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allGlobalYaml {
      nodes {
        navbarLinks {
          displayName
          variant
          path
        }
        navbarButtons {
          displayName
          variant
          path
        }
      }
    }
  }
`;
