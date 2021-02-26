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
}: {
  graphql: (query: string, args?: any) => any;
  path: string;
  height?: number;
  width?: number;
  quality?: number;
}): Promise<FixedObject> => {
  const query = `#graphql
    query (
      $height: Int,
      $width: Int,
      $quality: Int,
      $path: String
    ) {
      photo: file(relativePath: { eq: $path }) {
        childImageSharp {
          fixed(width: $width, height: $height, quality: $quality) {
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
    })
  );
  return photo.childImageSharp.fixed;
};

export const getFluidImage = async ({
  graphql,
  path,
  sizes,
  quality,
}: {
  graphql: (query: string, args?: any) => any;
  path: string;
  sizes?: string;
  quality?: number;
}): Promise<FluidObject> => {
  const query = `#graphql
    query (
      $sizes: String,
      $quality: Int,
      $path: String
    ) {
      photo: file(relativePath: { eq: $path }) {
        childImageSharp {
          fluid(sizes: $sizes, quality: $quality) {
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
    })
  );
  return photo.childImageSharp.fluid;
};
