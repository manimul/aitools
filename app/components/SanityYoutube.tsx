/* eslint-disable prettier/prettier */
import React from 'react';
import getYouTubeId from 'get-youtube-id';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

export default function SanityYoutube(props: { value: any }) {
  const { value } = props;
  const youtubeId = getYouTubeId(value.url) || '';

  return <LiteYouTubeEmbed id={youtubeId || ''} title={value.title || ''} />;
}
