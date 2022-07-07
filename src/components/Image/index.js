import React from "react";
import NextImage from "next/image";
import { number, string } from "prop-types";

const Image = ({ url, width, height, alt }) => (
  <NextImage src={url} width={width} height={height} alt={alt} />
);

export const ImageType = {
  url: string.isRequired,
  width: number,
  height: number,
  alt: string.isRequired,
};

export const ImageFragment = (width = 1020, height = 1800) => `
  url(imgixParams: { w: ${width}, h: ${height} } )
  width
  height
  alt
`;

Image.propTypes = ImageType;

export default Image;
