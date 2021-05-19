import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Img, { FixedObject } from "gatsby-image";
import {
  FaArrowRight,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FeaturedEvent } from "../../types";

interface Props {
  logoPath: string;
  secondColumn: {
    displayName: string;
    links: {
      displayName: string;
      path: string;
    }[];
  };
  thirdColumn: {
    displayName: string;
    links: {
      displayName: string;
      path: string;
    }[];
  };
  bottomLinks: {
    displayName: string;
    path: string;
  }[];
  featuredEvent: FeaturedEvent;
}

const Column = (props: { title: string; children: React.ReactNode }) => (
  <div className="space-y-4 mr-4">
    <div className="uppercase font-bold">{props.title}</div>
    {props.children}
  </div>
);

export const FooterTemplate = (props: Props) => (
  <footer className="main-grid border-t">
    <div className="inner-grid my-10 space-y-10 xl:space-y-0">
      <Link to="/" className="h-12 flex flex-row items-center">
        <img className="h-full" src={props.logoPath} alt="Logo" />
      </Link>
      <div className="col-span-full xl:col-span-2 grid gap-16 grid-cols-2 md:grid-cols-4">
        {props.featuredEvent.show ? (
          <Column title={props.featuredEvent.displayName}>
            <div>
              <Link
                to={`/event/${props.featuredEvent.slug}`}
                className="text-red-500 font-bold hover:opacity-50"
              >
                Join {'->'}
              </Link>
            </div>
          </Column>
        ) : (
          <Column title="Newsletter">
            <div>
              <a
                href="#newsletter"
                className="text-red-500 font-bold hover:opacity-50"
              >
                Join {'->'}
              </a>
            </div>
          </Column>
        )}
        <Column title={props.secondColumn.displayName}>
          {props.secondColumn.links.map(({ displayName, path }, idx) => (
            <div key={idx}>
              <Link to={path} className="font-light lowercase hover:opacity-50">
                {displayName}
              </Link>
            </div>
          ))}
        </Column>
        <Column title={props.thirdColumn.displayName}>
          {props.thirdColumn.links.map(({ displayName, path }, idx) => (
            <div key={idx}>
              <Link to={path} className="font-light lowercase hover:opacity-50">
                {displayName}
              </Link>
            </div>
          ))}
        </Column>
        <Column title="Follow us">
          <div className="flex flex-row space-x-4">
            {[
              [
                "https://www.facebook.com/tedxwarsaw",
                <FaFacebook className="inline w-6 h-6" />,
              ],
              [
                "https://twitter.com/tedxwarsaw",
                <FaTwitter className="inline w-6 h-6" />,
              ],
              [
                "https://www.instagram.com/tedxwarsaw/",
                <RiInstagramFill className="inline w-6 h-6" />,
              ],
              [
                "https://www.linkedin.com/company/tedxwarsaw/",
                <FaLinkedin className="inline w-6 h-6" />,
              ],
            ].map(([link, icon], idx) => (
              <a
                href={`${link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-red-500 hover:opacity-50"
                key={idx}
              >
                {icon}
              </a>
            ))}
          </div>
        </Column>
      </div>
      <div className="col-span-full flex flex-row lowercase space-x-6 font-light">
        {props.bottomLinks.map((link, idx) => (
          <Link key={idx} className="lowercase hover:opacity-50" to={link.path}>
            {link.displayName}
          </Link>
        ))}
      </div>
    </div>
  </footer>
);

export const Footer = () => (
  <StaticQuery
    query={componentQuery}
    render={(data) => (
      <FooterTemplate
        logoPath={data.file.publicURL}
        secondColumn={data.globalYaml.footerSecondColumn}
        thirdColumn={data.globalYaml.footerThirdColumn}
        bottomLinks={data.globalYaml.footerBottomLinks}
        featuredEvent={data.featuredEventYaml}
      />
    )}
  />
);

const componentQuery = graphql`
  query Footer {
    file(relativePath: { eq: "images/uploads/logo.svg" }) {
      publicURL
    }
    globalYaml(collectionId: { eq: "footer" }) {
      footerSecondColumn {
        displayName
        links {
          displayName
          path
        }
      }
      footerThirdColumn {
        displayName
        links {
          displayName
          path
        }
      }
      footerBottomLinks {
        displayName
        path
      }
    }
    featuredEventYaml(collectionId: { eq: "featuredEvent" }) {
      displayName
      show
      slug
    }
  }
`;
