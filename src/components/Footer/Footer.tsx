import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Img, { FixedObject } from "gatsby-image";
import {
  FaArrowRight,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

interface Props {
  imgFixed: FixedObject;
}

const Column = (props: { title: string; children: React.ReactNode }) => (
  <div className="space-y-4 mr-4">
    <div className="uppercase font-bold">{props.title}</div>
    {props.children}
  </div>
);

const TwoColumns = (props: {
  children: [React.ReactNode, React.ReactNode];
}) => <div className="flex flex-row justify-between">{props.children}</div>;

export const FooterTemplate = ({ imgFixed }: Props) => (
  <footer className="main-grid border-t">
    <div className="inner-grid my-10 space-y-10 xl:space-y-0">
      <Img
        fixed={imgFixed}
        alt="Site logo"
        className="col-span-full xl:col-span-1"
      />
      <div className="col-span-full xl:col-span-2 grid gap-16 grid-cols-2 xl:grid-cols-4">
        <Column title="featured event">
          <div>
            <Link
              to="/event"
              className="text-red-500 font-bold hover:opacity-50"
            >
              Join <FaArrowRight className="inline" />
            </Link>
          </div>
        </Column>
        <Column title="Events">
          <div>
            <Link
              to="/events"
              className="font-light lowercase hover:opacity-50"
            >
              attend
            </Link>
          </div>
          <div>
            <Link to="/events" className="hover:opacity-50">
              watch
            </Link>
          </div>
          <div>
            <Link to="/events" className="hover:opacity-50">
              join
            </Link>
          </div>
        </Column>
        <Column title="Get Involved">
          <div>
            <Link
              to="/events"
              className="font-light lowercase hover:opacity-50"
            >
              attend
            </Link>
          </div>
          <div>
            <Link to="/events" className="hover:opacity-50">
              watch
            </Link>
          </div>
          <div>
            <Link to="/events" className="hover:opacity-50">
              join
            </Link>
          </div>
        </Column>
        <Column title="Follow us">
          <div className="flex">
            <a
              href="https://facebook.com/"
              className="font-bold text-red-500 hover:opacity-50"
            >
              <FaFacebook className="inline w-6 h-6 mr-4" />
            </a>
            <a
              href="https://facebook.com/"
              className="font-light text-red-500 lowercase hover:opacity-50"
            >
              <FaTwitter className="inline w-6 h-6 mr-4" />
            </a>
            <a
              href="https://facebook.com/"
              className="font-light text-red-500 lowercase hover:opacity-50"
            >
              <FaInstagram className="inline w-6 h-6 mr-4" />
            </a>
          </div>
        </Column>
      </div>
    </div>
  </footer>
);

export const Footer = () => (
  <StaticQuery
    query={componentQuery}
    render={(data) => (
      <FooterTemplate imgFixed={data.file.childImageSharp.fixed} />
    )}
  />
);

const componentQuery = graphql`
  query Footer {
    file(relativePath: { eq: "images/uploads/logo.png" }) {
      childImageSharp {
        fixed(height: 52) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
