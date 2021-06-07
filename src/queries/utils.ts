import { FluidObject, FixedObject } from "gatsby-image";

export const gatsbyImageFluidFragment = `
  base64
  aspectRatio
  src
  srcSet
  sizes
`;

export const gatsbyImageFixedFragment = `
  base64
  width
  height
  src
  srcSet
`;

const pruneNull = (obj: Object): Object => {
  Object.keys(obj).forEach((key) => (obj[key] == null ? delete obj[key] : {}));
  return obj;
};

export const getFixedImage = async ({
  graphql,
  path,
  height,
  width,
  quality,
  grayscale,
}: {
  graphql: (query: string, args?: any) => any;
  path: string;
  height?: number;
  width?: number;
  quality?: number;
  grayscale?: boolean;
}): Promise<FixedObject> => {
  const query = `#graphql
    query (
      $height: Int,
      $width: Int,
      $quality: Int,
      $path: String,
      $grayscale: Boolean,
    ) {
      photo: file(relativePath: { eq: $path }) {
        childImageSharp {
          fixed(width: $width, height: $height, quality: $quality, grayscale: $grayscale) {
            ${gatsbyImageFixedFragment}
          }
        }
      }
    }
  `;
  const {
    data: { photo },
  } = await graphql(
    query,
    pruneNull({
      path,
      width,
      height,
      quality,
      grayscale,
    })
  );
  return photo.childImageSharp.fixed;
};

export const getFluidImage = async ({
  graphql,
  path,
  sizes,
  quality,
  grayscale,
}: {
  graphql: (query: string, args?: any) => any;
  path: string;
  sizes?: string;
  quality?: number;
  grayscale?: boolean;
}): Promise<FluidObject> => {
  const query = `#graphql
    query (
      $sizes: String,
      $quality: Int,
      $path: String
      $grayscale: Boolean,
    ) {
      photo: file(relativePath: { eq: $path }) {
        childImageSharp {
          fluid(sizes: $sizes, quality: $quality, grayscale: $grayscale) {
            ${gatsbyImageFluidFragment}
          }
        }
      }
    }
  `;
  const {
    data: { photo },
  } = await graphql(
    query,
    pruneNull({
      path,
      sizes,
      quality,
      grayscale,
    })
  );
  return photo.childImageSharp.fluid;
};
