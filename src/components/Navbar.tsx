import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img, { FixedObject } from "gatsby-image";

export interface Props {
  fixed: FixedObject;
}

export const NavbarTemplate = ({ fixed }: Props) => (
  <div className="text-lg">
    <Img fixed={fixed} alt="Site logo" />
  </div>
);

export const Navbar = () => (
  <StaticQuery
    query={componentQuery}
    render={(data) => <NavbarTemplate {...data.file.childImageSharp} />}
  />
);

const componentQuery = graphql`
  query NavbarQuery {
    file(relativePath: { eq: "images/uploads/logo.png" }) {
      childImageSharp {
        fixed(height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
