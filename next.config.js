/** @type {import('next').NextConfig} */

const config = {
  images: {
    domains: ["s3.amazonaws.com", "scontent.cdninstagram.com"],
  },
  output: "export",
  trailingSlash: true,
};

module.exports = config;
