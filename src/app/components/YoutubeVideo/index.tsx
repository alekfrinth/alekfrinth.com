'use client';

import { useEffect, useRef } from 'react';

type Props = {
  className?: string;
};

const YoutubeVideo = ({ className }: Props) => {
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.src = `https://www.youtube.com/embed/ksxNlmAwAZA?enablejsapi=1&origin=${window.location.origin}`;
    }
  });

  return <iframe ref={ref} allowFullScreen className={className} />;
};

export default YoutubeVideo;
