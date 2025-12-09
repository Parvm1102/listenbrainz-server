import * as React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router";

type SEOProps = {
  year: number;
  userName: string;
};

export function YIMYearMetaTags({
  year,
}: // background,
{
  year: number;
  // background?: string;
}) {
  return (
    <Helmet>
      <meta
        property="og:image"
        content="https://listenbrainz.org/static/img/year-in-music-24/yim-24-header.png"
      />
      <meta
        property="twitter:image"
        content="https://listenbrainz.org/static/img/year-in-music-24/yim-24-header.png"
      />
      <meta property="og:image:type" content="image/png" />
      <style type="text/css">
        {`
        @font-face {
          font-family: "Inter";
          src: url("/static/fonts/Inter-variable.ttf");
        }
        section.footer{
          display: none;
        }`}
      </style>
    </Helmet>
  );
}

export default function SEO(props: SEOProps) {
  const { year, userName } = props;
  const location = useLocation();

  const urlString = new URL(
    location.pathname,
    "https://listenbrainz.org"
  ).toString();

  return (
    <Helmet>
      <title>{`Year in Music ${year} for ${userName}`}</title>
      <meta
        name="description"
        content={`Check out the music review for ${year} that @ListenBrainz created from my listening history!`}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@listenbrainz" />
      <meta property="og:url" content={urlString} />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={`ListenBrainz Year in Music for ${userName}`}
      />
      <meta
        property="og:description"
        content={`Check out the music review for ${year} that @ListenBrainz created from my listening history!`}
      />
      <meta property="twitter:url" content={urlString} />
      <meta
        property="twitter:title"
        content={`ListenBrainz Year in Music for ${userName}`}
      />
      <meta property="twitter:domain" content="listenbrainz.org" />
      <meta
        property="twitter:description"
        content={`Check out the music review for ${year} that @ListenBrainz created from my listening history!`}
      />
      <meta
        property="og:image"
        content="https://listenbrainz.org/static/img/year-in-music-23/yim-23-header.png"
      />
      <meta
        property="twitter:image"
        content="https://listenbrainz.org/static/img/year-in-music-23/yim-23-header.png"
      />
      <meta property="og:image:type" content="image/png" />
    </Helmet>
  );
}
