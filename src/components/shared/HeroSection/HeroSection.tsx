import React from "react";
import { HeroSectionProps } from "./HeroSection.types";
import { BackgroundImage } from "@/components/shared/BackgroundImage";
import { Button } from "@/components/shared/Button";
import { FaArrowRight } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { Link } from "gatsby";
import parse from "html-react-parser";
import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";

export const HeroSection = ({
  heroTitle,
  heroSubtitle,
  heroBackgroundImage,
  heroBackgroundImageDesktop,
  heroBackgroundImageAlt,
  heroButtonText,
  heroButtonLink,
  heroLinks,
  featuredButtonLink,
  fontMedium,
  centerContentVertically
}: HeroSectionProps) => {
  return (
    <div className="main-grid-full-span">
      <BackgroundImage
        image={heroBackgroundImage}
        imageDesktop={heroBackgroundImageDesktop}
        alt={heroBackgroundImageAlt}
        style={{ height: "35rem" }}
        classNameChild={`flex flex-col ${centerContentVertically ? "justify-center" : "justify-end"} justify-end md:justify-center`}
      >
        <div className="main-grid">
          <div className="flex flex-col">
            <div className={`text-white  text-3xl  mb-7 w-4/5 md:w-1/2 ${
                fontMedium ? "" : "md:text-5xl font-bold"
            }`}>
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {heroTitle}
              </ReactMarkdown>
            </div>
            {heroSubtitle && (
              <p
                className="text-white text-sm md:text-lg md:font-light mb-10 md:mb-7 w-4/5 md:w-1/2"
                style={{ lineHeight: "30px" }}
              >
                {heroSubtitle}
              </p>
            )}

            <div className="flex flex-col md:flex-row md:align-center">
              {heroButtonText && (<a
                href={heroButtonLink}
                className="mb-5 md:mb-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>{heroButtonText}</Button>
              </a>)}
              {heroLinks?.map((heroLink) => (
                <a
                  href={heroLink.path}
                  className="text-white flex hover:opacity-50 mb-10 md:mb-0 md:ml-5 items-center"
                  key={heroLink.displayName}
                >
                  <span className="my-auto flex items-center">
                    {heroLink.displayName + ' ->'}
                  </span>
                </a>
              ))}
              {featuredButtonLink && (
                <div className="text-customRed font-medium flex flex-row items-center hover:text-white md:ml-5 mb-10 md:mb-0">
                  <Link to={featuredButtonLink}>
                    <span>
                      Read more <HiMenuAlt2 className="inline w-6 h-6" />
                    </span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </BackgroundImage>
    </div>
  );
};
